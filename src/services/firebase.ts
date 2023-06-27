import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAhYMp5y8Pn-TiklrJCPsvx2TCRCVjPDjM',
  authDomain: 'auth-test-3f181.firebaseapp.com',
  projectId: 'auth-test-3f181',
  storageBucket: 'auth-test-3f181.appspot.com',
  messagingSenderId: '585729879471',
  appId: '1:585729879471:web:36f16265ebcea5c8ced35a'
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)