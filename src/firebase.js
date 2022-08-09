import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDeXepAvOR57V5hPInsx6SPq360jdf5TUk",
  authDomain: "react-firebase-crud-9d368.firebaseapp.com",
  databaseURL: "https://react-firebase-crud-9d368-default-rtdb.firebaseio.com",
  projectId: "react-firebase-crud-9d368",
  storageBucket: "react-firebase-crud-9d368.appspot.com",
  messagingSenderId: "1089120341471",
  appId: "1:1089120341471:web:c240bb4995a95631ddc86a"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


