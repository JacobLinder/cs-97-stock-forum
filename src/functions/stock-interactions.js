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
if (firebase.app.length === 0)
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

/**
 * 
 * @param {*} uid 
 * @param {*} ticker 
 * @async
 * @returns 0 if followed, 1 if unfollowed, 2 if error
 */
export async function toggleFollow(uid, ticker) {
  try {
    const followed = await checkFollowStatus(uid, ticker);
    const userRef = db.collection('users').doc(uid);
    const followList = (await userRef.get()).data().followed.slice();
    if (followed) {
      const index = followList.indexOf(ticker);
      followList.splice(index, 1);
    } else {
      followList.push(ticker);
    }
    await userRef.update({followed: followList});
    return !followed ? 0 : 1;
  } catch(err) {
    console.log(err);
    return 2;
  }
}

/**
 * 
 * @param {*} uid 
 * @param {*} ticker 
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
 * 
 * @param {*} uid 
 * @param {*} ticker 
 * 
 */
export async function toggleBullish(uid, ticker) {
  try {
    const date = (new Date()).toDateString();
    await db.collection('users').doc(uid).collection('sentiment').doc(ticker).set({
      sentiment: 'bullish',
      date: date
    });
    await db.collection('')
  } catch(err) {
    console.log(err);
    return 2;
  }
}

/**
 * 
 * @param {*} uid 
 * @param {*} ticker 
 * @async
 * @returns 0 if none, 1 if bullish, 2 if neutral, 3 if bearish, 4 if error
 */
export async function checkStatus(uid, ticker) {
  try {
    const date = (new Date()).toDateString();
    const doc = await db.collection('users').doc(uid).collection('sentiment').doc(ticker).get();
    if (!doc.exists || doc.data().date !== date)
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

export async function getStockSentiment(ticker, date) {
  const doc = await db.collection('stocks').doc(ticker).collection('sentiment').doc(date).get();
  if (!doc.exists)
    return {};
}
