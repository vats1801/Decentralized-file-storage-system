import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhR_vUqnW9JhHRXrEQ4em3o9sCt1HkSqk",
  authDomain: "decentralized-file-stora-1159d.firebaseapp.com",
  projectId: "decentralized-file-stora-1159d",
  storageBucket: "decentralized-file-stora-1159d.appspot.com",
  messagingSenderId: "15449605993",
  appId: "1:15449605993:web:313c22857dbd7876e65ff8",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(app);
export default app;
