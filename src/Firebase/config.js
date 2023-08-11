// import { initializeApp } from 'firebase/app';
// import 'firebase/firestore';
// import firebase from 'firebase/app';
// const firebaseConfig = {
//     apiKey: "AIzaSyAAzUOOwWd5cFa00MlUIo-hvXfyi0bDcdg",
//     authDomain: "hackspon-8cda5.firebaseapp.com",
//     projectId: "hackspon-8cda5",
//     storageBucket: "hackspon-8cda5.appspot.com",
//     messagingSenderId: "699118258307",
//     appId: "1:699118258307:web:87499ad398472cc48bb3b6"
//   };
  
//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const firestore=firebase.firestore();

//   export {firebase, firestore, app};

import app from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAAzUOOwWd5cFa00MlUIo-hvXfyi0bDcdg",
  authDomain: "hackspon-8cda5.firebaseapp.com",
  projectId: "hackspon-8cda5",
  storageBucket: "hackspon-8cda5.appspot.com",
  messagingSenderId: "699118258307",
  appId: "1:699118258307:web:87499ad398472cc48bb3b6"
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
const firestore=firebase.firestore();

export {firebase, firestore, app};