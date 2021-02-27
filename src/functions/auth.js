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
if (firebase.app.length === 0)
  firebase.initializeApp(firebaseConfig);

/**
 * Signs in the user.
 * @async
 * @param {string} email - the user's email
 * @param {string} password - the user's password
 * @returns 1 if success, 2 if wrong email, 3 if wrong password, 4 if other error
 */
export async function signIn(email, password) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return 1;
  } catch(error) {
    console.log(error);
    const errorCode = error.code;
    if (errorCode === 'auth/user-not-found' || errorCode === 'auth/invalid-email')
      return 2;
    else if (errorCode === 'auth/wrong-password')
      return 3;
    else
      return 4;
  }
}

/**
 * Creates the user's account.
 * @async
 * @param {string} username - the user's username
 * @param {string} email - the user's email
 * @param {string} password - the user's password
 * @returns 1 if success, 2 if failure
 */
export async function createAccount(username, email, password) {
  try {
    const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const uid = user.user.uid;
    await firebase.firestore().collection('users').doc(uid).set({
      username: username,
      email: email,
      uid: uid,
      comments: []
    });
    return 1;
  } catch(error) {
    console.log(error);
    return 2;
  }
}
