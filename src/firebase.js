import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCTNMbNs1VFzXPNfTfu7MjROoGexALrUrY",
  authDomain: "tinder-clone-93cff.firebaseapp.com",
  projectId: "tinder-clone-93cff",
  storageBucket: "tinder-clone-93cff.appspot.com",
  messagingSenderId: "374623598860",
  appId: "1:374623598860:web:4d14f5b71330ec6230f129",
  measurementId: "G-GL3Y3417MZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
