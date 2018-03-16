import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCYX_sS49EX6M7BLKIW0uijhMqKmytwa_4",
    authDomain: "catch-of-the-day2-ccaper.firebaseapp.com",
    databaseURL: "https://catch-of-the-day2-ccaper.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
