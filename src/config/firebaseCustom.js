// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDJGE2VTLvdgrRNn-ty0DUR_NxX3rANa9k',
  authDomain: 'web-auth-demo-net-core.firebaseapp.com',
  projectId: 'web-auth-demo-net-core',
  storageBucket: 'web-auth-demo-net-core.appspot.com',
  messagingSenderId: '988958886355',
  appId: '1:988958886355:web:669d2bfe1fe5a3370a0726',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
