import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyCa-5GH9kVz8vJd98Xd9SxHzFUCHKL8KMM",
    authDomain: "listado-persona-8db64.firebaseapp.com",
    databaseURL: "https://listado-persona-8db64-default-rtdb.firebaseio.com",
    projectId: "listado-persona-8db64",
    storageBucket: "listado-persona-8db64.appspot.com",
    messagingSenderId: "206815563168",
    appId: "1:206815563168:web:bfe6276c17fd463d9128c5",
    measurementId: "G-5FTTX691WM"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
