
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCD5-MDDk1X1IpGAfyTubueqPBWgTqJ3Ws",
  authDomain: "beerproyect2022.firebaseapp.com",
  projectId: "beerproyect2022",
  storageBucket: "beerproyect2022.appspot.com",
  messagingSenderId: "930753099247",
  appId: "1:930753099247:web:d1bd143700dbe06052f21a"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default(auth)