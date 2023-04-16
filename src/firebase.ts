import { initializeApp } from "firebase/app";
import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAb6rGwsIRAUd4_R5r8NGj7atPix1dKnGY",
  authDomain: "sfal-journal.firebaseapp.com",
  projectId: "sfal-journal",
  storageBucket: "sfal-journal.appspot.com",
  messagingSenderId: "733182402462",
  appId: "1:733182402462:web:eace2e5de5df107e9d408f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
