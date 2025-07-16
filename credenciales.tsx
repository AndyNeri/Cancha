// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl2yOe0kUK3jxde2STlNNENTby4ISt2Zw",
  authDomain: "canchalogin.firebaseapp.com",
  projectId: "canchalogin",
  storageBucket: "canchalogin.firebasestorage.app",
  messagingSenderId: "836584532249",
  appId: "1:836584532249:web:c91ca33c9a46cf176d3d88",
  measurementId: "G-HXGB3KX953"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);

export default appFirebase