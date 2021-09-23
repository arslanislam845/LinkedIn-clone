import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA1pc6UAWpCokAq_QDiGswKzQYOqjD0_9g",
  authDomain: "linkedin-clone2-349dc.firebaseapp.com",
  projectId: "linkedin-clone2-349dc",
  storageBucket: "linkedin-clone2-349dc.appspot.com",
  messagingSenderId: "613163085221",
  appId: "1:613163085221:web:25105d9527115b7aa4cc4c"
};
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebase.firestore();
const auth=firebaseApp.auth()
export {db,auth}

