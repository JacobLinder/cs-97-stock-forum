import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const db = firebase.firestore();

export async function createComment(ticker, uid, comment) {
  try {
    const commentRef = db.collection('stocks').doc(ticker).collection('comments');
    const timestamp = new Date();
    const doc = await commentRef.add({
      uid: uid,
      timestamp: timestamp,
      comment: comment,
      upvotes: [],
      downvotes: [],
      children: []
    });
    await doc.update({id: doc.id});
    const comments = (await db.collection('users').doc(uid).get()).data().comments.splice();
    comments.push({
      timestamp: timestamp,
      comment: comment,
      upvotes: [],
      downvotes: [],
      id: doc.id,
      replyIndex: -1
    });
  } catch(err) {
    console.log(err);
  }
}

export async function addReply(ticker, id, uid, comment) {
  try {
    const commentRef = db.collection('stocks').doc(ticker).collection('comments').doc(id);
    const children = (await commentRef.get()).data().children.splice();
    const timestamp = new Date();
    children.push({
      uid: uid,
      timestamp: timestamp,
      comment: comment,
      upvotes: [],
      downvotes: []
    });
    await commentRef.update({children: children});
    await db.collection('users').doc(uid).update({
      timestamp: timestamp,
      comment: comment,
      upvotes: [],
      downvotes: [],
      id: id,
      replyIndex: children.length - 1
    });
  } catch(err) {
    console.log(err);
  }
}

export async function getTickerComments(ticker) {
  try {
    const commentQuery = await db.collection('stocks').doc(ticker).collection('comments').get();
    const comments = [];
    commentQuery.forEach(comment => comments.push(comment.data()));
    return comments;
  } catch(err) {
    console.log(err);
  }
}

export async function getUserComments(uid) {
  try {
    const comments = (await db.collection('users').doc(uid).get()).data.comments;
    return comments;
  } catch(err) {
    console.log(err);
  }
}

export function userHasUpvoted(uid, comment) {
  if (comment.upvotes.indexOf(uid) === -1)
    return false;
  return true;
}

export function userHasDownvoted(uid, comment) {
  if (comment.downvotes.indexOf(uid) === -1)
    return false;
  return true;
}

function removeUpvote(uid, comment) {

}

function removeDownvote(uid, comment) {
  
}

export async function toggleUpvoteComment(uid, ticker, id, replyIndex) {
  try {
    const commentRef = db.collection('stocks').doc(ticker).collection('comments').doc(id);
    const comments = (await commentRef.get()).data();
    const comment = replyIndex === -1 ? comments : comments.children[0]
    if (userHasUpvoted(uid, comment)) {
      const uidIndex = comment.upvotes.indexOf(uid);
      comment.upvotes.splice(uidIndex, 1);
    } else {
      comment.upvotes.push(uid);
      if (userHasDownvoted(uid, comment)) {

      }
    }
    if (replyIndex === -1) {
      
    } else {
      comments
    }
  } catch(err) {
    console.log(err);
  }
}

export async function toggleDownvoteComment() {
  try
}
