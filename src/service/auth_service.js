import { firebaseAuth, githubProvider, googleProvider } from "./firebase";

import firebase from "firebase";

class AuthService {
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  logout() {
    firebase.auth().signOut();
  }

  getProvider(providerName) {
    switch(providerName){
      case 'Google':
        return googleProvider
        case 'Github':
          return githubProvider;
          default:
            throw new Error();
    }
  }
}

export default AuthService;
