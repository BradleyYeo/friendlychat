/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */


const firebaseConfig = {
  apiKey: "AIzaSyCuZNxBF2J2UEGVzum-8lIYRbz6_6Xggxo",
  authDomain: "friendlychat-59f14.firebaseapp.com",
  projectId: "friendlychat-59f14",
  storageBucket: "friendlychat-59f14.appspot.com",
  messagingSenderId: "165390548850",
  appId: "1:165390548850:web:022a8f6dc1d190e0f527eb",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}