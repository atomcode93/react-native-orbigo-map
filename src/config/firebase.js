import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyClxc3F3UrW4on3Wncl-PvTanCFdhpiy7M",
    authDomain: "orbigo-d8096.firebaseapp.com",
    databaseURL: "https://orbigo-d8096.firebaseio.com",
    projectId: "orbigo-d8096",
    storageBucket: "orbigo-d8096.appspot.com",
    messagingSenderId: "495464680275"
}

export default firebase

export const firebaseApp = firebase.initializeApp(firebaseConfig)

export const firebaseDB = firebaseApp.database().ref()

export const firebaseStorage = firebaseApp.storage()