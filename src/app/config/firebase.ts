import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBqt7DvkTTGYZrTjTmLloSpvYXNdwT4nc4',
  authDomain: 'iconic-appz.firebaseapp.com',
  projectId: 'iconic-appz',
  storageBucket: 'iconic-appz.appspot.com',
  messagingSenderId: '116733111686',
  appId: '1:116733111686:web:2e896ee5a5e57438cdd007',
  measurementId: 'G-8V36NFDP16',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore();

export default firebase;
