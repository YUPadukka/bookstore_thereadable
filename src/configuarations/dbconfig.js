// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_YUfnDDD1Erlt1tYwtlFFrh7CDiUgvvQ",
    authDomain: "readable-bookstore.firebaseapp.com",
    databaseURL: "https://readable-bookstore.firebaseio.com",
    projectId: "readable-bookstore",
    storageBucket: "readable-bookstore.appspot.com",
    messagingSenderId: "104864858994",
    appId: "1:104864858994:web:71f6e222330984a2c953eb",
    measurementId: "G-R2M0SZS873"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;