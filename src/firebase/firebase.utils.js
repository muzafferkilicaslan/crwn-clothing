import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyC3h57nvWuifrpARC7pDHG3ElH87YhcjQY",
    authDomain: "crwn-db-c727c.firebaseapp.com",
    projectId: "crwn-db-c727c",
    storageBucket: "crwn-db-c727c.appspot.com",
    messagingSenderId: "441795872824",
    appId: "1:441795872824:web:85fe909866dbd4f372becd",
    measurementId: "G-XQRWBSFJ3Q"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    
    const fb = firebase.firestore();    
    const userRef = fb.doc(`users/${userAuth.uid}`);    
    const snapShot = await userRef.get();

    if(!snapShot.exits) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user',error.message);
      }
    }
    return userRef;
  }

  

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () =>auth.signInWithPopup(provider);

  export default firebase;