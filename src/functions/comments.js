import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const db = firebase.firestore();

/**
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

export async function upvoteComment(uid, ticker, id, replyIndex) {
  try {
    const commentRef = db.collection('stocks').doc(ticker).collection('comments').doc(id);
    const comments = await commentRef.get();
    if (replyIndex === -1) {
      
    } else {

    }
  } catch(err) {
    console.log(err);
  }
}

export async function downvoteComment() {
  try
}

export async function userHasUpvoted() {

}

export async function userHasDownvoted() {
  
}
*/