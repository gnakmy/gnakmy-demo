// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5gCVYbVjoiqgA5LCYtFpwK5NTS7ApoDw",
  authDomain: "swapi-ymkang.firebaseapp.com",
  projectId: "swapi-ymkang",
  storageBucket: "swapi-ymkang.appspot.com",
  messagingSenderId: "299222783194",
  appId: "1:299222783194:web:69c75899fe6e36442981e3",
  measurementId: "G-13CP9ZT4LR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}


