import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  },[]);

  const handleAddUser = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user ={name, email};

    // Post data to server
    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        const newUser = [...users, data];
        setUsers(newUser);
        console.log(data);
      });
  }

  return (
    <div className="App">
      <h1>Total users number is {users.length}</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder='Name' required />
        <input type="text" name="email" placeholder='Email' required />
        <input type="submit" value="Add User" />
      </form>
      {
        users.map(user => <li key={user.id}>{user.name} : {user.email}</li>)
      }
    </div>
  );
}

export default App;
