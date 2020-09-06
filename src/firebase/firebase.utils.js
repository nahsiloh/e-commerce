import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
};

// const config = {
//   apiKey: "AIzaSyBi4GnqUJDbdHNI1SgVY66ASCkTsUIjpiI",
//   projectId: "crown-db-94493",
//   databaseURL: "https://crown-db-94493.firebaseio.com",
//   authDomain: "crown-db-94493.firebaseapp.com",
//   storageBucket: "crown-db-94493.appspot.com",
//   messagingSenderId: "911642619382",
// };

console.log(config);

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
