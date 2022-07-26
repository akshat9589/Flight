import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import  "doc/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyB8qDuYMwf94SxfdZtXTxx7KqOEonjwOzI",
  authDomain: "book-my-ticket-b041d.firebaseapp.com",
  databaseURL: "https://book-my-ticket-b041d-default-rtdb.firebaseio.com",
  projectId: "book-my-ticket-b041d",
  storageBucket: "book-my-ticket-b041d.appspot.com",
  messagingSenderId: "317470270683",
  appId: "1:317470270683:web:dcae100a5a6720211b58fe",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const createUserDocument = async (user, uname,uaddress,ucity,ustate,uzip) =>
 {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email } = user;
    const { username } = uname;
    const { address } = uaddress;
    const { city } = ucity;
    const { state } = ustate;
    const { zip } = uzip;

    try {
      await userRef.set({
        email,
        username,
        address,
        city,
        state,
        zip,
        createdAt: new Date(),
      });
    } catch (error) {
      console.log("Error in creating user", error);
    }
  }
};
