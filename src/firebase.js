import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB0gQWeNchoKtlub12_-EbFUblhjTPZx7A",
  authDomain: "linkedin-b1f35.firebaseapp.com",
  projectId: "linkedin-b1f35",
  storageBucket: "linkedin-b1f35.appspot.com",
  messagingSenderId: "211316084804",
  appId: "1:211316084804:web:5cde0324d3de8c7887ec11",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
