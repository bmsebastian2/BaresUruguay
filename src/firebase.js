
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALhoetcC-lqOVrxwWwAYXuWf3n4ZdsUgA",
  authDomain: "baresuruguay.firebaseapp.com",
  projectId: "baresuruguay",
  storageBucket: "baresuruguay.appspot.com",
  messagingSenderId: "951550220138",
  appId: "1:951550220138:web:4fd852a78a26925b73f713"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default(auth)