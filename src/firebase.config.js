import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBlzA51NzKz-sL61GzLtNDQrmVsbUTde3U",
  authDomain: "rentme-91202.firebaseapp.com",
  projectId: "rentme-91202",
  storageBucket: "rentme-91202.appspot.com",
  messagingSenderId: "743985992095",
  appId: "1:743985992095:web:d7ec9bfe0fefba7b95adaa"
};


const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db = getFirestore(app)
export const storage =getStorage(app)

export default app;