
import { initializeApp } from "firebase/app";

import { getAuth} from "firebase/auth";
import{getFirestore} from 'firebase/firestore';
import{getStorage} from 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyAI8LQSdhvslYD0JNInFyu5GWCOoT2slEo",
    authDomain: "quantumtourandtravels.firebaseapp.com",
    databaseURL: "https://quantumtourandtravels-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "quantumtourandtravels",
    storageBucket: "quantumtourandtravels.appspot.com",
    messagingSenderId: "617147655857",
    appId: "1:617147655857:web:df73b897a1964393a42490",
    measurementId: "G-13PYD2SBLL"
  };

  export const app = initializeApp(firebaseConfig);
  

  export const auth = getAuth(app);
  export const db = getFirestore(app)
 export const storage = getStorage(app)

 
