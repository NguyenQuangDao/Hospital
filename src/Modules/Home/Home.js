import { initializeApp } from 'firebase/app';
import { getFirebaseConfig } from '../../firebase/config';
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { getPerformance } from 'firebase/performance';
const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);
function Home() {
    return ( <div>
        <h1>Home page</h1>
        <input type="" />
        <button>submit</button>
    </div> );
}

export default Home;