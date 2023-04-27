// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEIcQFkL5dBwl6wr5TlesfBBhNgmUA0us",
  authDomain: "auth-firebase-context-ta-b33fa.firebaseapp.com",
  projectId: "auth-firebase-context-ta-b33fa",
  storageBucket: "auth-firebase-context-ta-b33fa.appspot.com",
  messagingSenderId: "1058608674157",
  appId: "1:1058608674157:web:287b734cb1f77001bfd664"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app