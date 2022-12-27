import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDSS9A8wG4Ep72tiH3AP9voZ0mvMnP6pAE",
  authDomain: "rider-app-230b4.firebaseapp.com",
  projectId: "rider-app-230b4",
  storageBucket: "rider-app-230b4.appspot.com",
  messagingSenderId: "129047422164",
  appId: "1:129047422164:web:3f9ec43a14d252ff654741",
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
