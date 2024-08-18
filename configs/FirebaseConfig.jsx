// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJcnfCeuHc0boa-vqnCrSsu-opXd6yPj4",
  authDomain: "react-native-app-8573a.firebaseapp.com",
  projectId: "react-native-app-8573a",
  storageBucket: "react-native-app-8573a.appspot.com",
  messagingSenderId: "741168859250",
  appId: "1:741168859250:web:37bba65c56c74fb3be5aeb",
  measurementId: "G-NJ90QCWR3M",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);
