import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpJKfw2Xu9z2qJaIiDZD9MMQjWsXQkYXI",
  authDomain: "auth-integration-private-286ea.firebaseapp.com",
  projectId: "auth-integration-private-286ea",
  storageBucket: "auth-integration-private-286ea.appspot.com",
  messagingSenderId: "689382431185",
  appId: "1:689382431185:web:3f98fa87dcd84e8d4068f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
