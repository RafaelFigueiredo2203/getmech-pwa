import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt17RCAzzGe7PqVVo0C42QLgU1QaLS47I",
  authDomain: "getmechpwa.firebaseapp.com",
  projectId: "getmechpwa",
  storageBucket: "getmechpwa.appspot.com",
  messagingSenderId: "443158431309",
  appId: "1:443158431309:web:cb694154464f2f0c8b3e04",
  measurementId: "G-8M2WRM8751"
};

// Initialize Firebase
if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);  
}

export default firebase;
