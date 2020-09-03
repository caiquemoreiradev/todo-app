// const firebaseConfig = {
   
//   };

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCoaBs2-xHW9M1S15xzhD96z6gy7iGaUrc",
    authDomain: "react-todo-app-a48fa.firebaseapp.com",
    databaseURL: "https://react-todo-app-a48fa.firebaseio.com",
    projectId: "react-todo-app-a48fa",
    storageBucket: "react-todo-app-a48fa.appspot.com",
    messagingSenderId: "469588794524",
    appId: "1:469588794524:web:bc57603589a74202cae159",
    measurementId: "G-VWT7SK003E"
});

const db = firebaseApp.firestore();

export default db;