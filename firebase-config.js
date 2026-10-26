/* Sapience Experience Playbook: database settings (Google Firebase, project "cxo-playbook").
   These values are not secret: Firebase's security rules (firebase/firestore.rules) decide who can read and write.
   If you change who can edit, change it here AND in firebase/firestore.rules, then publish the rules. */
window.SAPIENCE_FIREBASE = {
  apiKey: "AIzaSyCzOSgRjx1XDD-JxCo7Jzfn3-X6dcagUkw",
  authDomain: "cxo-playbook.firebaseapp.com",
  projectId: "cxo-playbook",
  storageBucket: "cxo-playbook.firebasestorage.app",
  messagingSenderId: "965214592060",
  appId: "1:965214592060:web:41a1c3bcf5417b873cb739",
  // Google accounts that can edit. Must match isEditor() in firebase/firestore.rules.
  editors: ["marketing@sapienceautomata.com"],
  // Everyone with a Google account on this domain can open the read-only team view. Must match isViewer() in the rules.
  viewerDomain: "sapienceautomata.com"
};
