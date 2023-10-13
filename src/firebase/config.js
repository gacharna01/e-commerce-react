
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMQduE8Jz8VakOtRoTFRXcekthILb-DVM",
  authDomain: "streetwearshop-9ee8e.firebaseapp.com",
  projectId: "streetwearshop-9ee8e",
  storageBucket: "streetwearshop-9ee8e.appspot.com",
  messagingSenderId: "944220413868",
  appId: "1:944220413868:web:6eec5fc0643a16e483e409"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);