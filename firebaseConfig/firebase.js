import firebase from 'firebase';

const firebaseConfig = {
	// apiKey: process.env.apiKey,
	// authDomain: process.env.authDomain,
	// projectId: process.env.projectId,
	// storageBucket: process.env.storageBucket,
	// messagingSenderId: process.env.messagingSenderId,
	// appId: process.env.appId,
	apiKey: 'AIzaSyB63HoupBlR5sVR14bSrN-dGuCC_xP_1ds',
	authDomain: 'mercer-386007.firebaseapp.com',
	projectId: 'mercer-386007',
	storageBucket: 'mercer-386007.appspot.com',
	messagingSenderId: '616615145035',
	appId: '1:616615145035:web:25b4cfaf89d0c76af5e7ce',
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
