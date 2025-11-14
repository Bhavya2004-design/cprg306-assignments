"use client";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6t9JUtoH1Tk1WJRnr_eOt7uhBuoZ0d8w",
  authDomain: "cprg306-assignments-2c9df.firebaseapp.com",
  projectId: "cprg306-assignments-2c9df",
  storageBucket: "cprg306-assignments-2c9df.firebasestorage.app",
  messagingSenderId: "225223590962",
  appId: "1:225223590962:web:f59175e59da0d9b124282b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
