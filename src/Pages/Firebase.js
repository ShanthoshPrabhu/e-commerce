// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDcv4cNFjNVqgID6CKklfX0bprMdyf-iLc",
  authDomain: "e-commerce-852b8.firebaseapp.com",
  projectId: "e-commerce-852b8",
  storageBucket: "e-commerce-852b8.appspot.com",
  messagingSenderId: "1038082044856",
  appId: "1:1038082044856:web:5f68f7e6c76f0c5710154d",
  measurementId: "G-DLBLC3B73G"
};

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  export {db , auth};