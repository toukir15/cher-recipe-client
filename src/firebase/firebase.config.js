// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwlYwFeOsPQ1prG4VRJGVHTPlCm0Q6wPg",
    authDomain: "chef-recipe-client-ee0e8.firebaseapp.com",
    projectId: "chef-recipe-client-ee0e8",
    storageBucket: "chef-recipe-client-ee0e8.appspot.com",
    messagingSenderId: "97563958265",
    appId: "1:97563958265:web:915f55e753bad2e9c6fb28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;