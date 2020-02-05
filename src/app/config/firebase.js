import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDD-2A2mlfnMS6Kq36lW-FSTVShBFlF064",
  authDomain: "event-app-263017.firebaseapp.com",
  databaseURL: "https://event-app-263017.firebaseio.com",
  projectId: "event-app-263017",
  storageBucket: "event-app-263017.appspot.com",
  messagingSenderId: "392287028802",
  appId: "1:392287028802:web:2836983d22c301feec0fdb",
  measurementId: "G-PBYKV35QHT"
};

// firebase instance, we'll use it in index.js to create the ReactReduxFirebaseProvider
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
