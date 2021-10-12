import firebase from 'firebase'


const firebaseApp = firebase.initalizeApp({
    apiKey: "AIzaSyDmyHANa29s4RP-TI-cWY_fNaliN66XJao",
    authDomain: "reacttodo-11f04.firebaseapp.com",
    projectId: "reacttodo-11f04",
    storageBucket: "reacttodo-11f04.appspot.com",
    messagingSenderId: "1042101517941",
    appId: "1:1042101517941:web:08f82b97bee13e86e1423c"
})

export const authResult = firebaseApp.auth();
export default firebase;