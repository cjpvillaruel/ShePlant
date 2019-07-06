import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAAHEqTVtuwr_d_ErrNW0DM5aK-tIbouR4",
  authDomain: "charmingx-firebase.firebaseapp.com",
  databaseURL: "https://charmingx-firebase.firebaseio.com",
  projectId: "charmingx-firebase",
  storageBucket: "",
  messagingSenderId: "342328389144",
  appId: "1:342328389144:web:d03b892199f4e45d"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();
}

export default Firebase;
