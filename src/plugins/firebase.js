import Vue from 'vue'
import { initializeApp } from 'firebase/app';
// import store from "../store"

const firebaseConfig = {
    apiKey: "AIzaSyC2yL-Yz-PKdMPSwpcI_80FKpcQq57HQtc",
    authDomain: "netflix-vuejs-aa012.firebaseapp.com",
    projectId: "netflix-vuejs-aa012",
    storageBucket: "netflix-vuejs-aa012.appspot.com",
    messagingSenderId: "619331364517",
    appId: "1:619331364517:web:e6c135f94b5324de588f4c",
    measurementId: "G-NP6R17KVFG"
  };
  
  // Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// firebase.auth().onAuthStateChanged(user => {
//     store.dispatch("addUser", { name: user.displayName, email: user.email });
// });

Vue.prototype.$firebase = firebase;

export default firebase;