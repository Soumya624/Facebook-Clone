import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDs9qM1STdsSVHR09goO5o3S5wiXVkV-tc",
    authDomain: "facebook-clone-f2f34.firebaseapp.com",
    projectId: "facebook-clone-f2f34",
    storageBucket: "facebook-clone-f2f34.appspot.com",
    messagingSenderId: "481226739621",
    appId: "1:481226739621:web:eec84e5b1d164fba4f624c",
    measurementId: "G-1YVD0LXT6Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();


  export {auth, provider};
  export default db;

