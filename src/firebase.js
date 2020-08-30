import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAhLAq72mQE0XSLTJi0JQ9W_4hPRnSq0Ms",
  authDomain: "whatsapp-web-app.firebaseapp.com",
  databaseURL: "https://whatsapp-web-app.firebaseio.com",
  projectId: "whatsapp-web-app",
  storageBucket: "whatsapp-web-app.appspot.com",
  messagingSenderId: "447625592535",
  appId: "1:447625592535:web:7b12f05af214069d62fa92",
  measurementId: "G-0WQ68D5888",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const authentication = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { database, authentication, provider };
