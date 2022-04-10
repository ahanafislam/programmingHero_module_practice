import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Register Now</h3>
            <form>
                <input type="text" placeholder='Your name' />
                <br/>
                <input type="email" placeholder='Your email' />
                <br/>
                <input type="password" placeholder='Your password' />
                <br/>
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;