const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
})

const users = [
    {id: 1, name: "Ahanaf", email:"something@email.com",phone: "01700000000"},
    {id: 2, name: "Alnabil", email:"something@email.com",phone: "01700000000"},
    {id: 3, name: "Nishrat", email:"something@email.com",phone: "01700000000"},
    {id: 4, name: "Nipun", email:"something@email.com",phone: "01700000000"},
]

app.get('/users', (req, res) => {
    console.log('query', req.query);
    if(req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }
})

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.filter(user => user.id === id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log(`Lestening on port ${port}`);
})
