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

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;
        
        const userRef =firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();

        if (!snapShot.exists) {
                const { displayName, email } = userAuth;
                const createdAt = new Date();
                try {
                        await userRef.set({
                                displayName,
                                email,
                                createdAt,
                                ...additionalData
                        });
                } catch (error) {
                        console.log('error creating user', error.message);
                }
        }

        return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
