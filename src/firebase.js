import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyD797QXNS08YIcy3lQsaGSCzjih4lg67fI",
    authDomain: "auth-inventory.firebaseapp.com",
    projectId: "auth-inventory",
    storageBucket: "auth-inventory.appspot.com",
    messagingSenderId: "544371017617",
    appId: "1:544371017617:web:85965fa011b4acac4b3c30"
});

export const auth = app.auth();
export default app;
