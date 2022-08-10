import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCc7Gc3zYoEC7hV_K7OQqQm-03dOKUiXS4",
  authDomain: "frontend-melhorado-petshop.firebaseapp.com",
  projectId: "frontend-melhorado-petshop",
  storageBucket: "frontend-melhorado-petshop.appspot.com",
  messagingSenderId: "299334636055",
  appId: "1:299334636055:web:d340861d7194882f0a4252",
  measurementId: "G-E0J02BZB2K",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
