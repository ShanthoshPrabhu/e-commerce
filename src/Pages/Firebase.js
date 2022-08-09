// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyD7A4NHDxt3lzPxkGyIC17EA9R-tnnWOUg",
    authDomain: "e-commerce-13170.firebaseapp.com",
    projectId: "e-commerce-13170",
    storageBucket: "e-commerce-13170.appspot.com",
    messagingSenderId: "811279769815",
    appId: "1:811279769815:web:ee644a1a59f4e99bb95092",
    measurementId: "G-BZG54H98JL"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  export {db , auth};