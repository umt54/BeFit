// Hier ist ein Beispiel, wie du die Firestore-Datenbank einrichten und einige Übungen hinzufügen kannst
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0bx26NxmskL-o3QiSF64bpS1ERu5CK0s",
  authDomain: "vue-fire-7c265.firebaseapp.com",
  projectId: "vue-fire-7c265",
  storageBucket: "vue-fire-7c265.appspot.com",
  messagingSenderId: "355374809987",
  appId: "1:355374809987:web:939825a454cf944ff7ecb6",
  measurementId: "G-Z5V6LZMH1Z"
};

// Initialisiere Firebase-App
const app = initializeApp(firebaseConfig);

// Firestore-Instanz abrufen
const db = getFirestore(app);

// Beispielübungen
const exercises = [
  { category: 'Arme', name: 'Bizeps Curls', description: 'Beschreibung der Übung Bizeps Curls', image: 'URL zum Bild' },
  { category: 'Arme', name: 'Trizeps Dips', description: 'Beschreibung der Übung Trizeps Dips', image: 'URL zum Bild' },
  // Weitere Übungen für andere Kategorien hier hinzufügen...
];

// Funktion zum Hinzufügen von Übungen zur Datenbank
const addExercisesToFirestore = async () => {
  try {
    for (const exercise of exercises) {
      await addDoc(collection(db, 'exercises'), exercise);
    }
    console.log('Übungen wurden erfolgreich zur Datenbank hinzugefügt.');
  } catch (error) {
    console.error('Fehler beim Hinzufügen von Übungen zur Datenbank:', error);
  }
};

// Übungen zur Datenbank hinzufügen
addExercisesToFirestore();
