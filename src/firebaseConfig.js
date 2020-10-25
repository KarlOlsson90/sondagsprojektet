import * as firebase from "firebase/app"
import "firebase/database"
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBEWy3vDDpRzct8_U-XeB5bQkTF4Dz6rvA",
    authDomain: "karls-24be0.firebaseapp.com",
    databaseURL: "https://karls-24be0.firebaseio.com",
    projectId: "karls-24be0",
    storageBucket: "karls-24be0.appspot.com",
    messagingSenderId: "224416683445",
    appId: "1:224416683445:web:1d421e99afd687af90f5fc"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase;