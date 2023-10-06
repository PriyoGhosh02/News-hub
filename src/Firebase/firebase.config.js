// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID,
};

// const firebaseConfig = {
//     apiKey: "AIzaSyBqmQ62--VBSPozut_Cm0TFb10F1h6xdVM",
//     authDomain: "dragon-news-3af6c.firebaseapp.com",
//     projectId: "dragon-news-3af6c",
//     storageBucket: "dragon-news-3af6c.appspot.com",
//     messagingSenderId: "587137689322",
//     appId: "1:587137689322:web:5439a2f5bccb95e3b81993"
//   };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;