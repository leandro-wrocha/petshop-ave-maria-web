import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAm4js2QzGl-1nHg-m-MUCLr3eG4RIDEM8",
  authDomain: "web-petshop-ave-maria-vite.firebaseapp.com",
  projectId: "web-petshop-ave-maria-vite",
  storageBucket: "web-petshop-ave-maria-vite.appspot.com",
  messagingSenderId: "375305997720",
  appId: "1:375305997720:web:08f7f5fbf7c98bb71befed",
  measurementId: "G-C30KEK1756"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
