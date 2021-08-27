import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAVPrZsQwc6ku2y7ltPxRxs8oX8cLXDg7U",
    authDomain: "linkedin-clone-6c369.firebaseapp.com",
    projectId: "linkedin-clone-6c369",
    storageBucket: "linkedin-clone-6c369.appspot.com",
    messagingSenderId: "318071493852",
    appId: "1:318071493852:web:5c3fef477ede16c8985019"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig) //It connects us to the database and sets everything up
  const db = firebaseApp.firestore(); //We are getting the database inside db
  const auth = firebase.auth();

  export {db, auth};