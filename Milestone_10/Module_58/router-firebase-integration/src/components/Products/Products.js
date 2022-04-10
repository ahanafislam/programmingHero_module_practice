import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';

const auth = getAuth(app);

const Products = () => {
    // const {user} = useFirebase();
    const [user] = useAuthState(auth);

    return (
        <div>
            <h1>Who are you?</h1>
            <h5>I am {user ? user.displayName : "Mr, Nobody"}</h5>
        </div>
    );
};

export default Products;