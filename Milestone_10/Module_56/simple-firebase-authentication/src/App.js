import './App.css';
import app from './firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user);
    }).catch((error) => {
      console.error("error", error);
  });
  }

  const handleFacebookLogIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error("error", error);
      })
  }

  const handleGitHubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error("Error Github Login: ", error);
      });
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => console.error("Sign Out Error: ",error));
  }

  return (
    <div className="App">
      {
        user.uid ? <button onClick={handleSignOut}>Sign Out</button>
        : <>
            <button onClick={handleGoogleSignIn}>Google sign in</button>
            <button onClick={handleFacebookLogIn}>Facebook log in</button> 
            <button onClick={handleGitHubSignIn}>GitHub Sign In</button>
          </>
      }
      
      <h1>Name: {user.displayName}</h1>
      <p>Email: {user.email}</p>
      {user.photoURL && <img src={user.photoURL} alt="User_pic" />}
    </div>
  );
}

export default App;
