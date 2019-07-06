import axios from "axios";
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
    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  doCreateUserWithEmailAndPassword = async (
    email,
    password,
    firstName,
    lastName
  ) => {
    await this.auth.createUserWithEmailAndPassword(email, password);
    // creates a user in app db
    const response = await axios.post(`users`, {
      first_name: firstName,
      last_name: lastName,
      email: email,
      firebase_id: this.auth.currentUser.uid
    });

    if (response.data) {
      this.state = {
        firstName: response.data.first_name,
        lastName: response.data.last_name
      };
      console.log(response.data);
      console.log(this.state);
    } else {
      console.log("Error adding user");
    }
  };

  doSignInWithEmailAndPassword = async (email, password) => {
    await this.auth.signInWithEmailAndPassword(email, password);
    // work around to retrieve user based on firebase id
    const response = await axios.get(`users/1`, {
      params: {
        firebase_id: this.auth.currentUser.uid
      }
    });

    if (response.data) {
      this.state = {
        firstName: response.data.first_name,
        lastName: response.data.last_name
      };
      console.log(response.data);
      console.log(this.state);
    } else {
      console.log("Error signing in");
    }
  };

  doSignOut = () => this.auth.signOut();
}

export default Firebase;
