import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrxLpxGpKOGt6Wb9hbkdzhuoMqbMFe534",
  authDomain: "chat-4571b.firebaseapp.com",
  projectId: "chat-4571b",
  storageBucket: "chat-4571b.appspot.com",
  messagingSenderId: "188648557138",
  appId: "1:188648557138:web:3e03335052c9060b416d8b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
