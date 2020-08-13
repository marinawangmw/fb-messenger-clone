import firebase from 'firebase';

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyDwJAgjO0k1lJB3Wbh7qvAomp2fZJFuhvs",
    authDomain: "fb-messenger-marina.firebaseapp.com",
    databaseURL: "https://fb-messenger-marina.firebaseio.com",
    projectId: "fb-messenger-marina",
    storageBucket: "fb-messenger-marina.appspot.com",
    messagingSenderId: "399930386390",
    appId: "1:399930386390:web:f332f8c2270a71aee9e677",
    measurementId: "G-KPM3LERJGV"
  });

  const db = firebaseApp.firestore();

  export default db;