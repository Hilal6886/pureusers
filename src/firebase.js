 
import { initializeApp } from "firebase/app";

import { getAuth} from "firebase/auth";
import{getFirestore} from 'firebase/firestore';
import{getStorage} from 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAHdR7Ki8fbygMOI_KBD15xPDMtXYDeUI",
  authDomain: "pureusers-85663.firebaseapp.com",
  projectId: "pureusers-85663",
  storageBucket: "pureusers-85663.appspot.com",
  messagingSenderId: "1043585132302",
  appId: "1:1043585132302:web:af6681389a2337a377595f",
  measurementId: "G-73TH21WW2Z"
};

  export const app = initializeApp(firebaseConfig);
  
 
  export const auth = getAuth(app);
  export const db = getFirestore(app)
 export const storage = getStorage(app)


 
