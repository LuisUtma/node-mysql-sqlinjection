import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcrypt';
import './env.js';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use

const app = express();

// config firebase
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6DnGiS6i-gfZCnJc8JP6jxpoHtDaCwbc",
  authDomain: "kike-sda.firebaseapp.com",
  projectId: "kike-sda",
  storageBucket: "kike-sda.appspot.com",
  messagingSenderId: "433916921724",
  appId: "1:433916921724:web:47bfdb67fef2fa30dc46f9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// config bcrypt
const saltRounds = 15;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});