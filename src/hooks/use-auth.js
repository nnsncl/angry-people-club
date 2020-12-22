// From https://usehooks.com/useAuth
import React, { useState, useEffect, useContext, createContext } from "react";

import * as firebase from 'firebase/app';
import firebaseConfig from '../services/firebaseConfig'
import "firebase/firestore";
import 'firebase/auth';

firebase.initializeApp(firebaseConfig)
export const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();

  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const googleSignIn = () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider);
  }
  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };

  // useEffect(() => {
  //   const unsubscribe = firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser(false);
  //     }
  //   });
  //   return () => unsubscribe();
  // }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

  return {
    user,
    googleSignIn,
    signout,
  };
}