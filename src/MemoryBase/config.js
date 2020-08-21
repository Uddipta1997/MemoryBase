import  *as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';






  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA5gTjxW5tA5qPb8qUyoEub9CncCPOey_s",
    authDomain: "memory-base.firebaseapp.com",
    databaseURL: "https://memory-base.firebaseio.com",
    projectId: "memory-base",
    storageBucket: "memory-base.appspot.com",
    messagingSenderId: "614924501933",
    appId: "1:614924501933:web:8fd3e9cce44891c0955724",
    measurementId: "G-0SYQ2EKNZJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export{projectStorage, projectFirestore};

