// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtRL7GDq8ZTg0ynh8OLc3pYQrFC4FFNR0",
  authDomain: "the-chef-master.firebaseapp.com",
  projectId: "the-chef-master",
  storageBucket: "the-chef-master.appspot.com",
  messagingSenderId: "1056019348102",
  appId: "1:1056019348102:web:7bddb0feb06d1fd8fdaf07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;