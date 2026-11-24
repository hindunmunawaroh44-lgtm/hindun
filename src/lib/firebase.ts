import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, child } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ8UK0Xy7zmUtaMRxuQjXULwQjkzwi-h0",
  authDomain: "hindun-444.firebaseapp.com",
  databaseURL: "https://hindun-444-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hindun-444",
  storageBucket: "hindun-444.firebasestorage.app",
  messagingSenderId: "31079676013",
  appId: "1:31079676013:web:efc8499cb2aff151ee6764",
  measurementId: "G-7LVX1JMQH6"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, get, set, child };
