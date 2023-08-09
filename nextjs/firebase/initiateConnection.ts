import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Initialize Firebase with your Firebase configuration
const firebaseConfig = {
  apiKey: 'FIREBASE_API_KEY',
  projectId: 'FIREBASE_PROJECT_ID'
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


// Use the above functions as needed in your application
