import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCknKJxnoaX-XsG2sg1abmppabq59YDBuU",
  authDomain: "app-vue-firebase-68309.firebaseapp.com",
  projectId: "app-vue-firebase-68309",
  storageBucket: "app-vue-firebase-68309.appspot.com",
  messagingSenderId: "95481356141",
  appId: "1:95481356141:web:6d3ae34c0ac7b7f4220464",
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
