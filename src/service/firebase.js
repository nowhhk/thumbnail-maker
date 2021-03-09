import firebase from "firebase";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

  apiKey: "AIzaSyBtq6KlzPzse3NK8-iU9XeOtvxmEYnRK2o",
  authDomain: "thumbnail-maker-1fbea.firebaseapp.com",
  projectId: "thumbnail-maker-1fbea",
  storageBucket: "thumbnail-maker-1fbea.appspot.com",
  messagingSenderId: "186583501018",
  appId: "1:186583501018:web:147f5e3e70391a33133de3",
  measurementId: "G-YBMV4SDMB9",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
