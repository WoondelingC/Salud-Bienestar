import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyB8rCnj-wOnUGrU0v8AIAhLLkREKvwoRAI",
  authDomain: "salud-bienestar-8820b.firebaseapp.com",
  projectId: "salud-bienestar-8820b",
  storageBucket: "salud-bienestar-8820b.appspot.com",
  messagingSenderId: "615531528768",
  appId: "1:615531528768:web:c28260813af3e7f66295a5"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const google = new firebase.auth.GoogleAuthProvider();



export {
    db,
    google,
    firebase
}
