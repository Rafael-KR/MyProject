import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyChqly9LCQrwYh_dlUf7y5qfKjWSRmKBBw',
  authDomain: 'aula-ulbra.firebaseapp.com',
  databaseURL: 'https://aula-ulbra.firebaseio.com',
  projectId: 'aula-ulbra',
  storageBucket: 'aula-ulbra.appspot.com',
  messagingSenderId: '281352714785',
  appId: '1:281352714785:web:5d2e528bef0e9660',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
