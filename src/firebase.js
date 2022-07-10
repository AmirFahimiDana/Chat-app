import firebase from "firebase/app";
import "firebase/auth" ;

export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyCZFZxubH1aT0r_SXYL4vzPYqsdB4WrBA0",
    authDomain: "botostartgram.firebaseapp.com",
    projectId: "botostartgram",
    storageBucket: "botostartgram.appspot.com",
    messagingSenderId: "127504929154",
    appId: "1:127504929154:web:d3f15250368b811d733f9b"
  }).auth();