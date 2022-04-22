import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id} = useParams();
    const [user, setUser] = useState({});
    const url = `http://localhost:5000/user/${id}`;

    useEffect(() => {
        fetch(url)
            .then( res => res.json())
            .then(data => setUser(data));
    },[url]);

    const handleUpdateUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const updateUser = {name, email};

        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log("Success",data)
            alert("User Update Successfully");
            event.target.reset();
        });
    }

    return (
        <div>
            <h1>Update user {user.name}</h1>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name='name' placeholder='Name' required />
                <input type="email" name='email' placeholder='Email' required />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default UpdateUser;