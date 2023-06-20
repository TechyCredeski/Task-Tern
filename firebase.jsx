// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "task-tern.firebaseapp.com",
    projectId: "task-tern",
    storageBucket: "task-tern.appspot.com",
    messagingSenderId: "941748397611",
    appId: "1:941748397611:web:fed877a4e591ef521d6c6e",
    measurementId: "G-30ZV9M9M2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

export {auth, googleProvider}