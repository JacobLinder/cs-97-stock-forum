import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

/**
 * Signs in the user.
 * @async
 * @param {string} email - the user's email
 * @param {string} password - the user's password
 * @returns true if success, false if failure
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
 * @returns true if success, false if failure
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
    return true;
  } catch(error) {
    console.log(error);
    return false;
  }
}
