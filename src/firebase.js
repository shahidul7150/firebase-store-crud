import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeXepAvOR57V5hPInsx6SPq360jdf5TUk",
  authDomain: "react-firebase-crud-9d368.firebaseapp.com",
  databaseURL: "https://react-firebase-crud-9d368-default-rtdb.firebaseio.com",
  projectId: "react-firebase-crud-9d368",
  storageBucket: "react-firebase-crud-9d368.appspot.com",
  messagingSenderId: "1089120341471",
  appId: "1:1089120341471:web:c240bb4995a95631ddc86a"
};

// Initialize Firebase
const fireDb = initializeApp(firebaseConfig);
