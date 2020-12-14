import * as firebase from 'firebase/app';
import 'firebase/auth';

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const googleSignIn = () => firebase.auth().signInWithPopup(googleAuthProvider);