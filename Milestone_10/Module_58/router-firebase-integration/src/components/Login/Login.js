import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
// import useFirebase from '../../hooks/useFirebase';

const auth = getAuth(app);

const Login = () => {
    // const {signInWithGoogle} = useFirebase();
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, {replace: true});
            });
    }

    return (
        <div>
            <h3>Please Login</h3>
            <div style={{marginBottom: "7px"}}>
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
            <form>
                <input type="email" placeholder='Your email' />
                <br/>
                <input type="password" placeholder='Your password' />
                <br/>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;