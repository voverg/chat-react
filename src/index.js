import React from 'react';
import ReactDOM from 'react-dom';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';

import {FirebaseContext} from 'context';
import App from 'App';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnKe95fzDiqbokcLS88FmGtBERjapSC2I",
  authDomain: "chat-react-prog.firebaseapp.com",
  projectId: "chat-react-prog",
  storageBucket: "chat-react-prog.appspot.com",
  messagingSenderId: "400703762312",
  appId: "1:400703762312:web:06fe4045bde9ec7dc4143d",
  measurementId: "G-18ZCHKGMEW"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

ReactDOM.render(
  <FirebaseContext.Provider value={{
    firebase,
    db,
    collection,
    getDocs,
    addDoc,
  }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
