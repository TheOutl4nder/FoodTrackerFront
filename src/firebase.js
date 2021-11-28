import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "foodtrackerf.firebaseapp.com",
  projectId: "foodtrackerf",
  storageBucket: "foodtrackerf.appspot.com",
  messagingSenderId: "963988367673",
  appId: "1:963988367673:web:c55fc70df8e48b8dfce0e8",
};

firebase.initializeApp(config);
export default firebase;
