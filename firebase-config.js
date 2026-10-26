/* Sapience Experience Playbook: free database settings (Google Firebase, Spark plan).
   Leave apiKey empty to keep using this browser or a Google Sheet instead.
   These values are not secret: Firebase's security rules (firebase/firestore.rules) decide who can read and write.
   Fill them in from Firebase console ▸ Project settings ▸ Your apps ▸ Web app ▸ SDK setup and configuration. */
window.SAPIENCE_FIREBASE = {
  apiKey: "",
  authDomain: "",          // e.g. "sapience-playbook.firebaseapp.com"
  projectId: "",           // e.g. "sapience-playbook"
  appId: "",
  // Google accounts that can edit (the CXO). Must match the list in firebase/firestore.rules.
  editors: ["cxo@example.com"],
  // Optional: everyone with this email domain can open the read-only team view. Must match the rules.
  viewerDomain: ""
};
