import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAneHtBGox07-t4PL5lQUPTJSDV699-me4",
  authDomain: "cs97-stock-forum.firebaseapp.com",
  projectId: "cs97-stock-forum",
  storageBucket: "cs97-stock-forum.appspot.com",
  messagingSenderId: "102652179476",
  appId: "1:102652179476:web:2990e1610da4903c4f2301",
  measurementId: "G-Z9C54MJ34X"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

/**
 * Checks whether or not a user has followed a stock.
 * @param {string} uid - the user's uid
 * @param {string} ticker - the stock ticker
 * @async
 * @returns true if followed, false if not followed
 */
export async function checkFollowStatus(uid, ticker) {
  try {
    const user = (await db.collection('users').doc(uid).get()).data();
    if (user.followed.includes(ticker))
      return true;
    return false;
  } catch(err) {
    console.log(err);
    return false;
  }
}

/**
 * Gets a list of all stocks the user followed
 * @param {string} uid - the user's uid
 * @async
 * @returns array of strings of followed stocks, empty array if error
 */
export async function getFollowedStocks(uid) {
  try {
    const followList = (await db.collection('users').doc(uid).get()).data().followed.slice();
    return followList;
  } catch(err) {
    console.log(err);
    return [];
  }
}

/**
 * Handles the backend for the user's click of the follow button
 * @param {string} uid - the user's uid
 * @param {string} ticker - the stock ticker
 * @async
 * @returns 0 if followed, 1 if unfollowed, 2 if error
 */
export async function toggleFollow(uid, ticker) {
  try {
    const followed = await checkFollowStatus(uid, ticker);
    const followList = await getFollowedStocks(uid);
    if (followed) {
      const index = followList.indexOf(ticker);
      followList.splice(index, 1);
    } else {
      followList.push(ticker);
    }
    await db.collection('users').doc(uid).update({followed: followList});
    return !followed ? 0 : 1;
  } catch(err) {
    console.log(err);
    return 2;
  }
}

/**
 * Checks the users daily sentiment for a particular stock
 * @param {string} uid - the user's uid
 * @param {string} ticker - the stock ticker
 * @async
 * @returns 0 if none, 1 if bullish, 2 if neutral, 3 if bearish, 4 if error
 */
export async function checkUserSentiment(uid, ticker) {
  try {
    const date = (new Date()).toDateString();
    const doc = await db.collection('users').doc(uid).collection('sentiment').doc(ticker).get();
    if (!doc.exists || doc.data().sentiment === 'none')
      return 0;
    else if (doc.data().sentiment === 'bullish')
      return 1;
    else if (doc.data().sentiment === 'neutral')
      return 2;
    else if (doc.data().sentiment === 'bearish')
      return 3;
    else
      return 4;
  } catch(err) {
    console.log(err);
    return 4;
  }
}

/**
 * Handles the toggle for each of the sentiment buttons.
 * @param {string} uid - the user's uid
 * @param {string} ticker - the stock ticker
 * @param {string} sentiment - either bullish, neutral, or bearish
 * @async
 * @returns 0 if none, 1 if bullish, 2 if neutral, 3 if bearish, 4 if error
 */
async function updateUserSentiment(uid, ticker, sentiment) {
  try {
    const oldSentiment = await checkUserSentiment(uid, ticker);
    const newSentiment = sentiment === oldSentiment ? 'none' : sentiment;
    const date = (new Date()).toDateString();
    await db.collection('users').doc(uid).collection('sentiment').doc(ticker).set({
      sentiment: newSentiment,
      date: date
    });
    const stockDoc = await db.collection('stocks').doc(ticker).get();
    if (stockDoc.exists) {
      const data = stockDoc.data();
      if (oldSentiment === 'bullish')
        data.bullish -= 1;
      else if (oldSentiment === 'neutral')
        data.neutral -= 1;
      else if (oldSentiment === 'bearish')
        data.bearish -= 1;
      if (newSentiment === 'bullish')
        data.bullish += 1;
      else if (newSentiment === 'neutral')
        data.neutral += 1;
      else if (newSentiment === 'bearish')
        data.bearish += 1;
      await stockDoc.ref.update({
        bullish: data.bullish,
        neutral: data.neutral,
        bearish: data.bearish
      });
    } else {
      await stockDoc.set({
        bullish: newSentiment === 'bullish' ? 1 : 0,
        neutral: newSentiment === 'neutral' ? 1 : 0,
        bearish: newSentiment === 'bearish' ? 1 : 0
      });
    }
    const returnInt = newSentiment === 'none' ? 0
      : newSentiment === 'bullish' ? 1
      : newSentiment === 'neutral' ? 2
      : newSentiment === 'bearish' ? 3 : 4;
    return returnInt;
  } catch(err) {
    console.log(err);
    return 4;
  }
}

/**
 * Handles what happens when the user toggles the bullish button.
 * @param {string} uid - the user's uid
 * @param {string} ticker - the stock ticker
 * @async
 * @returns 0 if none, 1 if bullish, 2 if neutral, 3 if bearish, 4 if error
 */
export async function toggleBullish(uid, ticker) {
  try {
    const sentimentStatus = await updateUserSentiment(uid, ticker, 'bullish');
    return sentimentStatus;
  } catch(err) {
    console.log(err);
    return 4;
  }
}

/**
 * Handles what happens when the user toggles the neutral button.
 * @param {string} uid - the user's uid
 * @param {string} ticker - the stock ticker
 * @async
 * @returns 0 if none, 1 if bullish, 2 if neutral, 3 if bearish, 4 if error
 */
export async function toggleNeutral(uid, ticker) {
  try {
    const sentimentStatus = await updateUserSentiment(uid, ticker, 'neutral');
    return sentimentStatus;
  } catch(err) {
    console.log(err);
    return 4;
  }
}

/**
 * Handles what happens when the user toggles the bearish button.
 * @param {string} uid - the user's uid
 * @param {string} ticker - the stock ticker
 * @async
 * @returns 0 if none, 1 if bullish, 2 if neutral, 3 if bearish, 4 if error
 */
export async function toggleBearish(uid, ticker) {
  try {
    const sentimentStatus = await updateUserSentiment(uid, ticker, 'bearish');
    return sentimentStatus;
  } catch(err) {
    console.log(err);
    return 4;
  }
}

/**
 * Gets the total sentiment for a stock
 * @param {string} ticker - the stock ticker
 * @async
 * @returns - {bullish: int, neutral: int, bearish: int} sentiment object
 */
export async function getSentimentHistory(ticker) {
  var stockSentiment = {
    bullish: 0,
    neutral: 0,
    bearish: 0
  };
  try {
    const doc = await db.collection('stocks').doc(ticker).get();
    if (doc.exists) {
      stockSentiment.bullish = doc.data().bullish;
      stockSentiment.neutral = doc.data().neutral;
      stockSentiment.bearish = doc.data().bearish;
    }
    return stockSentiment;
  } catch(err) {
    console.log(err);
    return stockSentiment;
  }
}
