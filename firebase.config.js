// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log("firebase config.");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCUyU-YqbM1yMA9ctqvsdP_kSlzBYNhy6k",
	authDomain: "cormparse-issue-tracker.firebaseapp.com",
	projectId: "cormparse-issue-tracker",
	storageBucket: "cormparse-issue-tracker.appspot.com",

	messagingSenderId: "404305808710",
	appId: "1:404305808710:web:6182dfc8ade4ff1b906947",
	measurementId: "G-LD41VQM9H6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
