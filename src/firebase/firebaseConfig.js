import firebase from 'firebase/compat/app'
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAl7a4ChlUXjNZCS6yGCKG7WMLB0fbT0jI",
  authDomain: "salud-y-bienestar-7efa0.firebaseapp.com",
  projectId: "salud-y-bienestar-7efa0",
  storageBucket: "salud-y-bienestar-7efa0.appspot.com",
  messagingSenderId: "312915567606",
  appId: "1:312915567606:web:e717fe2a8f830804fa1dd7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const google = new firebase.auth.GoogleAuthProvider();


export {
    db,
    google,
    firebase
}
