import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBCOGB1wMGuC4viJ3BpQBa9fSqOQfMQfgc",
  authDomain: "thedojosite-ca978.firebaseapp.com",
  projectId: "thedojosite-ca978",
  storageBucket: "thedojosite-ca978.appspot.com",
  messagingSenderId: "11485297116",
  appId: "1:11485297116:web:c43159e718577ab6067719",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
