// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkeaDsorH2oOnivA35p0cg5n4ytOFYCQg",
    authDomain: "mango-pulp-8a058.firebaseapp.com",
    projectId: "mango-pulp-8a058",
    storageBucket: "mango-pulp-8a058.appspot.com",
    messagingSenderId: "816634369809",
    appId: "1:816634369809:web:f66344d685521622bc5eb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app