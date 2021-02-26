// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyAneHtBGox07-t4PL5lQUPTJSDV699-me4",
//   authDomain: "cs97-stock-forum.firebaseapp.com",
//   projectId: "cs97-stock-forum",
//   storageBucket: "cs97-stock-forum.appspot.com",
//   messagingSenderId: "102652179476",
//   appId: "1:102652179476:web:2990e1610da4903c4f2301",
//   measurementId: "G-Z9C54MJ34X"
// };
// if (firebase.app.length === 0)
//   firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

// /**
//  * Adds a new comment to a ticker.
//  * @param {string} ticker - the ticker of the stock
//  * @param {string} uid - the user's uid
//  * @param {string} text - the comment's text
//  * @async
//  * @returns true if success, false if failure
//  */
// export async function createComment(ticker, uid, text) {
//   try {
//     const commentRef = db.collection('stocks').doc(ticker).collection('comments');
//     const timestamp = new Date();
//     const doc = await commentRef.add({
//       children: [{
//         uid: uid,
//         timestamp: timestamp,
//         text: text,
//         upvotes: [],
//         downvotes: []
//       }]
//     });
//     await doc.update({id: doc.id});
//     const comments = (await db.collection('users').doc(uid).get()).data().comments.slice();
//     comments.push({
//       timestamp: timestamp,
//       text: text,
//       upvotes: [],
//       downvotes: [],
//       id: doc.id,
//       replyIndex: 0
//     });
//   } catch(err) {
//     console.log(err);
//   }
// }

// /**
//  * Adds a reply to a ticker's comment.
//  * @param {string} ticker - the ticker of the stock
//  * @param {string} id - the comment's id
//  * @param {string} uid - the user's uid
//  * @param {string} text - the text of the comment
//  */
// export async function addReply(ticker, id, uid, text) {
//   try {
//     const commentRef = db.collection('stocks').doc(ticker).collection('comments').doc(id);
//     const children = (await commentRef.get()).data().children.splice();
//     const timestamp = new Date();
//     children.push({
//       uid: uid,
//       timestamp: timestamp,
//       text: text,
//       upvotes: [],
//       downvotes: []
//     });
//     await commentRef.update({children: children});
//     await db.collection('users').doc(uid).update({
//       timestamp: timestamp,
//       text: text,
//       upvotes: [],
//       downvotes: [],
//       id: id,
//       replyIndex: children.length - 1
//     });
//   } catch(err) {
//     console.log(err);
//   }
// }

// /**
//  * Gets all the comments from a ticker.
//  * @param {string} ticker - the stock ticker
//  */
// export async function getTickerComments(ticker) {
//   try {
//     const commentQuery = await db.collection('stocks').doc(ticker).collection('comments').get();
//     const comments = [];
//     commentQuery.forEach(comment => comments.push(comment.data()));
//     return comments;
//   } catch(err) {
//     console.log(err);
//   }
// }

// /**
//  * Gets all the comments from a user.
//  * @param {string} uid - the user's uid
//  */
// export async function getUserComments(uid) {
//   try {
//     const comments = (await db.collection('users').doc(uid).get()).data.comments;
//     return comments;
//   } catch(err) {
//     console.log(err);
//   }
// }

// /**
//  * Checks whether a user has upvoted a comment.
//  * @param {string} uid - the user's uid
//  * @param {object} comment - the comment object (either root or child)
//  */
// export function userHasUpvoted(uid, comment) {
//   if (comment.upvotes.indexOf(uid) === -1)
//     return false;
//   return true;
// }

// /**
//  * Checks whether a user has downvoted a comment.
//  * @param {string} uid - the user's uid
//  * @param {object} comment - the comment object (either root or child)
//  */
// export function userHasDownvoted(uid, comment) {
//   if (comment.downvotes.indexOf(uid) === -1)
//     return false;
//   return true;
// }

// /**
//  * Checks whether a user has upvoted a comment.
//  * @param {string} uid - the user's uid
//  * @param {object} comment - the comment object (either root or child)
//  */
// function removeUpvote(uid, comment) {
//   const uidIndex = comment.upvotes.indexOf(uid);
//   if (uidIndex !== -1) comment.upvotes.splice(uidIndex, 1);
//   return comment;
// }

// /**
//  * Removes a user's downvote from a comment.
//  * @param {string} uid - the user's uid
//  * @param {object} comment - the comment object (either root or child)
//  */
// function removeDownvote(uid, comment) {
//   const uidIndex = comment.downvotes.indexOf(uid);
//   if (uidIndex !== -1) comment.downvotes.splice(uidIndex, 1);
//   return comment;
// }

// /**
//  * Toggles the upvote button from a user.
//  * @param {string} uid - the user's uid
//  * @param {string} ticker - the ticker for the comment
//  * @param {string} id - the comment id
//  * @param {int} replyIndex - the index of the reply for a comment (-1 if root comment)
//  */
// export async function toggleUpvoteComment(uid, ticker, id, replyIndex) {
//   try {
//     const commentRef = db.collection('stocks').doc(ticker).collection('comments').doc(id);
//     const comments = (await commentRef.get()).data();
//     const comment = replyIndex === -1 ? comments : comments.children[0]
//     if (userHasUpvoted(uid, comment))
//       comment =  removeUpvote(uid, comment);
//     else {
//       comment.upvotes.push(uid);
//       if (userHasDownvoted(uid, comment))
//         comment = removeDownvote(uid, comment);
//     }
//     if (replyIndex === -1)
//       comments = comment;
//     else
//       comments.children[replyIndex] = comment;
//     return true;
//   } catch(err) {
//     console.log(err);
//     return false;
//   }
// }

// /**
//  * Toggles the downvote button from a user.
//  * @param {string} uid - the user's uid
//  * @param {string} ticker - the ticker for the comment
//  * @param {string} id - the comment id
//  * @param {int} replyIndex - the index of the reply for a comment (-1 if root comment)
//  * @async
//  * @returns true if success, false if something went wrong
//  */
// export async function toggleDownvoteComment(uid, ticker, id, replyIndex) {
//   try {
//     const commentRef = db.collection('stocks').doc(ticker).collection('comments').doc(id);
//     const comments = (await commentRef.get()).data();
//     const comment = replyIndex === -1 ? comments : comments.children[0]
//     if (userHasDownvoted(uid, comment))
//       comment =  removeDownvote(uid, comment);
//     else {
//       comment.upvotes.push(uid);
//       if (userHasUpvoted(uid, comment))
//         comment = removeUpvote(uid, comment);
//     }
//     if (replyIndex === -1)
//       comments = comment;
//     else
//       comments.children[replyIndex] = comment;
//     return true;
//   } catch(err) {
//     console.log(err);
//     return false;
//   }
// }
