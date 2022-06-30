// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB47NwT5Oz6xeLhuN_pJRa0wuKAPOurnuM",
  authDomain: "baishnodev-20b6c.firebaseapp.com",
  projectId: "baishnodev-20b6c",
  storageBucket: "baishnodev-20b6c.appspot.com",
  messagingSenderId: "330087386008",
  appId: "1:330087386008:web:b604b08ef6d688ef97f9ed",
  measurementId: "G-KQNKSCNPGB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);
// export const analytics = getAnalytics(app);