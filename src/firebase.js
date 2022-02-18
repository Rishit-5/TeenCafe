import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYHgF6ZWUNLQgq1kZHh5k_7T9p6E5MNf0",
  authDomain: "a-dev-auth.firebaseapp.com",
  projectId: "a-dev-auth",
  storageBucket: "a-dev-auth.appspot.com",
  messagingSenderId: "389257160182",
  appId: "1:389257160182:web:a2eabb212d76b596ff13d7",
  measurementId: "G-BMT4JTXZYZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.database();

export default { db };
