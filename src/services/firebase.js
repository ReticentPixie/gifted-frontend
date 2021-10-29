// ========== IMPORTS ==========
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// ========== Firebase configuration ==========
const firebaseConfig = {
  apiKey: "AIzaSyC8CZSRYcT7p0SmK8eW_siehYVCC625yeA",
  authDomain: "gifted-97cf7.firebaseapp.com",
  projectId: "gifted-97cf7",
  storageBucket: "gifted-97cf7.appspot.com",
  messagingSenderId: "276772525896",
  appId: "1:276772525896:web:27d0a385e0e1aa8bc2457d"
};

initializeApp(firebaseConfig);

// ========== Set Up Auth ==========
const auth = getAuth();
const provider = new GoogleAuthProvider();          // create instance of Google provider object

// Sign in the user using a pop up and google as the identity provider
async function signIn() {
    await signInWithPopup(auth, provider);
}

// Log the user out
function logOut() {
    return auth.signOut();
}

// ========== EXPORT ==========
export { 
    auth,
    signIn,
    logOut
}