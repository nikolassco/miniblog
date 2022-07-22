import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUa535u1GR2iQft-bps7MM__cg2Q_PKuc",
  authDomain: "miniblog-a1044.firebaseapp.com",
  projectId: "miniblog-a1044",
  storageBucket: "miniblog-a1044.appspot.com",
  messagingSenderId: "718359794449",
  appId: "1:718359794449:web:87a342f5dc17acd8daf2b0"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
