import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp ( {
  apiKey: "AIzaSyD1GgSYQblY8qI68CxkqMxsuM1agNuVyb4",
  authDomain: "unite-8902e.firebaseapp.com",
  projectId: "unite-8902e",
  storageBucket: "unite-8902e.appspot.com",
  messagingSenderId: "68792215225",
  appId: "1:68792215225:web:1a3b15d7d0ec5ba6b15d68",
  measurementId: "G-S02ETNDCXL"
});
  const auth= firebase.auth();
  const db=firebaseConfig.firestore();
  const storage=firebase.storage();

export { auth, db, storage};