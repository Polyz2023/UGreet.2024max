const { initializeApp } = require("firebase/app");
const { getDatabase } = require('firebase/database'); 
const { getFirestore } = require('firebase/firestore'); 
const { getAuth } = require('firebase/auth'); 
const { getStorage } = require('firebase/storage');

const firebaseConfig = {
    apiKey: "AIzaSyAQYK8hF_JxDcvpj-i9ZfW8ha-eoQCAQWw",
    authDomain: "ugreet-2024max.firebaseapp.com",
    projectId: "ugreet-2024max",
    storageBucket: "ugreet-2024max.appspot.com",
    messagingSenderId: "914982786158",
    appId: "1:914982786158:web:53581f7c82caa42e4b027f"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app); 
const firestore = getFirestore(app); 
const auth = getAuth(app);
const storage = getStorage(app); 

module.exports = { database, firestore, auth, storage };
