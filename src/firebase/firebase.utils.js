import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD5UoonXDniVs9CQ-6d0dpfM_wu-AgevVU",
    authDomain: "clothing-store-8c166.firebaseapp.com",
    databaseURL: "https://clothing-store-8c166.firebaseio.com",
    projectId: "clothing-store-8c166",
    storageBucket: "clothing-store-8c166.appspot.com",
    messagingSenderId: "480301169302",
    appId: "1:480301169302:web:099cf2f92f99c4a9a360b7",
    measurementId: "G-XQSJL25KH8"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_acount' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;