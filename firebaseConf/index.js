import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyC_qQ3LRgwRZe3FXYwUVQYZqjKUQRvFnDA",
  authDomain: "tlaxdev-692d9.firebaseapp.com",
  projectId: "tlaxdev-692d9",
  storageBucket: "tlaxdev-692d9.appspot.com",
  messagingSenderId: "227217679205",
  appId: "1:227217679205:web:cdfb9cbb38d3a0bfb5778c",
  measurementId: "G-MW323RSPTT"
};

// firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const db = firebase.firestore();
console.log({ db });

export { firebase };

// const firebaseConfig = {
//   apiKey: "AIzaSyC_qQ3LRgwRZe3FXYwUVQYZqjKUQRvFnDA",
//   authDomain: "tlaxdev-692d9.firebaseapp.com",
//   projectId: "tlaxdev-692d9",
//   storageBucket: "tlaxdev-692d9.appspot.com",
//   messagingSenderId: "227217679205",
//   appId: "1:227217679205:web:cdfb9cbb38d3a0bfb5778c",
//   measurementId: "G-MW323RSPTT"
// };


// const firebaseConfig = {
//   apiKey: "AIzaSyBBrq8jNLJ__9JRlg4GFPVTalDZh1qYqVU",
//   authDomain: "mini-viajes.firebaseapp.com",
//   databaseURL: "https://mini-viajes.firebaseio.com",
//   projectId: "mini-viajes",
//   storageBucket: "mini-viajes.appspot.com",
//   messagingSenderId: "608074712071",
//   appId: "1:608074712071:web:be6e6291c32ecd4c1d96a2",
//   measurementId: "G-EX5T442QJJ"
// };