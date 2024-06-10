// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGnll5uTRzqD0FxT4zKwErz8p2-nNmGFk",
  authDomain: "l-mew9af.firebaseapp.com",
  projectId: "l-mew9af",
  storageBucket: "l-mew9af.appspot.com",
  messagingSenderId: "1231882458",
  appId: "1:1231882458:web:1e8834175b89f66e6e4b64",
  measurementId: "G-01PPY5FJ3K"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
