import firebase from "firebase";
require("firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAzffJfAm_6dRVbrXvM_oXQUrR-KymEgqA",
  authDomain: "fireweb-8e059.firebaseapp.com",
  databaseURL: "https://fireweb-8e059.firebaseio.com",
  projectId: "fireweb-8e059",
  storageBucket: "fireweb-8e059.appspot.com",
  messagingSenderId: "558384508596",
  appId: "1:558384508596:web:657e7ed8c2f9b10aeb71e1",
};
// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
