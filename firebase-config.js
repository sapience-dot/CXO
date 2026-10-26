/* Sapience Experience Playbook: free database settings (Google Firebase, Spark plan).
   Leave apiKey empty to keep using this browser or a Google Sheet instead.
   These values are not secret: Firebase's security rules (firebase/firestore.rules) decide who can read and write.
   Fill them in from Firebase console ▸ Project settings ▸ Your apps ▸ Web app ▸ SDK setup and configuration. */
window.SAPIENCE_FIREBASE = {
  apiKey: "AIzaSyCzOSgRjx1XDD-JxCo7Jzfn3-X6dcagUkw",
  authDomain: "cxo-playbook.firebaseapp.com",          // e.g. "sapience-playbook.firebaseapp.com"
  projectId: "cxo-playbook",           // e.g. "sapience-playbook"
  appId: "1:965214592060:web:41a1c3bcf5417b873cb739",
  // Google accounts that can edit (the CXO). Must match the list in firebase/firestore.rules.
  editors: ["animesh@sapienceautomata.com"],
  // Optional: everyone with this email domain can open the read-only team view. Must match the rules.
  viewerDomain: "https://sapience-dot.github.io/CXO/#team=&s=https%3A%2F%2Fscript.google.com%2Fa%2Fmacros%2Fsapienceautomata.com%2Fs%2FAKfycbyIDr4vHVFZa8yOdAQmPa6falkDD9tze9K98UZLAKDV3r-j7i86FzXSpcR28Iv9YTHV%2Fexec&k=Sapience%20Team"
};

