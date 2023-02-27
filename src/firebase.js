import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBPJOfKZK7-Dri4L5mz1ZNdbRJm-Ogc7LY",
  authDomain: "facebook-clone-d53b7.firebaseapp.com",
  projectId: "facebook-clone-d53b7",
  storageBucket: "facebook-clone-d53b7.appspot.com",
  messagingSenderId: "391742143411",
  appId: "1:391742143411:web:6e6bab1e7158f4c37ee9c6",
  measurementId: "G-SYZXC6VQRH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
