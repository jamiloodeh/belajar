import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBVXWh0gYTZbmMTF9GykZjD3tnIPgh2FnA",
  authDomain: "silver-proposal-8q7jp.firebaseapp.com",
  projectId: "silver-proposal-8q7jp",
  storageBucket: "silver-proposal-8q7jp.firebasestorage.app",
  messagingSenderId: "624303634050",
  appId: "1:624303634050:web:acd1eab02bd109035da69b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
