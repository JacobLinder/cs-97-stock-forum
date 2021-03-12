import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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
 * Adds a new comment to a ticker.
 * @param {string} ticker - the ticker of the stock
 * @param {string} uid - the user's uid
 * @param {string} text - the comment's text
 * @async
 * @returns true if success, false if error
 */
export async function createComment(ticker, uid, text) {
  try {
    const commentRef = db.collection('stocks').doc(ticker).collection('comments');
    const timestamp = new Date();
    // const doc = 
    await commentRef.add({
      children: [{
        uid: uid,
        timestamp: timestamp,
        text: text,
        upvotes: [],
        downvotes: []
      }]
    });
    // await doc.update({id: doc.id});
    await saveUserComment(uid, ticker, text, timestamp);
    return true;
  } catch(err) {
    console.log(err);
    return false;
  }
}

/**
 * Adds a reply to a ticker's comment.
 * @param {string} ticker - the ticker of the stock
 * @param {string} id - the comment's id
 * @param {string} uid - the user's uid
 * @param {string} text - the text of the comment
 * @async
 * @returns true if success, false if error
 */
export async function addReply(ticker, id, uid, text) {
  try {
    const timestamp = new Date();
    const commentRef = db.collection('stocks').doc(ticker).collection('comments').doc(id);
    const children = (await commentRef.get()).data().children.splice();
    children.push({
      uid: uid,
      timestamp: timestamp,
      text: text,
      upvotes: [],
      downvotes: []
    });
    await commentRef.update({children: children});
    await saveUserComment(uid, ticker, text, timestamp);
    return true;
  } catch(err) {
    console.log(err);
    return false;
  }
}

async function saveUserComment(uid, ticker, text, timestamp) {
  const commentRef = db.collection('users').doc(uid);
  const comments = (await commentRef.get()).data().comments;
  comments.push({
    ticker: ticker,
    text: text,
    timestamp: timestamp
  });
  await commentRef.update({comments: comments});
}

/**
 * Gets all the comments from a ticker.
 * @param {string} ticker - the stock ticker
 * @async
 * @returns array of comments, empty array if error
 */
export async function getTickerComments(ticker) {
  try {
    const commentQuery = await db.collection('stocks').doc(ticker).collection('comments').get();
    console.log('qry, ', commentQuery);
    const comments = [];
    commentQuery.forEach((comment) => {
      const children = comment.data().children;
      const newComment = [];
      children.forEach((child) => {
        const newChild = {
          downvotes: child.downvotes,
          text: child.text,
          timestamp: child.timestamp,
          uid: child.uid,
          upvotes: child.upvotes,
          id: comment.id
        };
        newComment.push(newChild);
      });
      comments.push(newComment);
    });
    if (comments.length === 0) {
      comments.push([]);
    }
    return comments;
  } catch(err) {
    console.log(err);
    return [];
  }
}

/**
 * Gets all the comments from a user.
 * @param {string} uid - the user's uid
 * @async
 * @returns array of comments, empty array if error
 */
export async function getUserComments(uid) {
  try {
    const comments = (await db.collection('users').doc(uid).get()).data().comments;
    return comments;
  } catch(err) {
    console.log(err);
    return [];
  }
}

/**
 * Checks whether a user has upvoted a comment.
 * @param {string} uid - the user's uid
 * @param {object} comment - the ticker comment object
 * @returns true if user has upvoted, false otherwise
 */
export function userHasUpvoted(uid, comment) {
  if (comment.upvotes.indexOf(uid) === -1)
    return false;
  return true;
}

/**
 * Checks whether a user has downvoted a comment.
 * @param {string} uid - the user's uid
 * @param {object} comment - the ticker comment object
 * @returns true if user has upvoted, false otherwise
 */
export function userHasDownvoted(uid, comment) {
  if (comment.downvotes.indexOf(uid) === -1)
    return false;
  return true;
}

/**
 * Checks whether a user has upvoted a comment.
 * @param {string} uid - the user's uid
 * @param {object} comment - the comment object
 * @returns comment with removed upvote
 */
function removeUpvote(uid, comment) {
  const uidIndex = comment.upvotes.indexOf(uid);
  comment.upvotes.splice(uidIndex, 1);
  return comment;
}

/**
 * Removes a user's downvote from a comment.
 * @param {string} uid - the user's uid
 * @param {object} comment - the comment object
 * @returns comment with removed downvote
 */
function removeDownvote(uid, comment) {
  const uidIndex = comment.downvotes.indexOf(uid);
  comment.downvotes.splice(uidIndex, 1);
  return comment;
}

/**
 * Toggles the upvote button from a user.
 * @param {string} uid - the user's uid
 * @param {string} ticker - the ticker for the comment
 * @param {string} id - the comment id
 * @param {int} replyIndex - the index of the reply for a comment (-1 if root comment)
 * @async
 * @returns true if success, false if error
 */
export async function toggleUpvoteComment(uid, ticker, id, replyIndex) {
  try {
    const commentRef = db.collection('stocks').doc(ticker).collection('comments').doc(id);
    const comments = (await commentRef.get()).data().children.slice();
    var comment = comments[replyIndex]
    if (userHasUpvoted(uid, comment))
      comment = removeUpvote(uid, comment);
    else {
      comment.upvotes.push(uid);
      if (userHasDownvoted(uid, comment))
        comment = removeDownvote(uid, comment);
    }
    comments[replyIndex] = comment;
    await commentRef.update({children: comments});
    return comment;
  } catch(err) {
    console.log(err);
    return false;
  }
}

/**
 * Toggles the downvote button from a user.
 * @param {string} uid - the user's uid
 * @param {string} ticker - the ticker for the comment
 * @param {string} id - the comment id
 * @param {int} replyIndex - the index of the reply for a comment (-1 if root comment)
 * @async
 * @returns true if success, false if error
 */
export async function toggleDownvoteComment(uid, ticker, id, replyIndex) {
  try {
    const commentRef = db.collection('stocks').doc(ticker).collection('comments').doc(id);
    const comments = (await commentRef.get()).data().children.slice();
    var comment = comments[replyIndex]
    if (userHasDownvoted(uid, comment)) {
      comment = removeDownvote(uid, comment);
    }
    else {
      comment.downvotes.push(uid);
      if (userHasUpvoted(uid, comment))
        comment = removeUpvote(uid, comment);
    }
    comments[replyIndex] = comment;
    await commentRef.update({children: comments});
    return comment;
  } catch(err) {
    console.log(err);
    return false;
  }
}
