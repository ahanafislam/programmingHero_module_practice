const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;


// Use middleware
app.use(cors());
app.use(express.json());

// user : dbuser1
// password: rNPyDMLCnBjSacEQ;


const uri = "mongodb+srv://dbuser1:rNPyDMLCnBjSacEQ@cluster0.idrsu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const userCollection =client.db("foodExpress").collection("user");

        app.get('/user', async (req, res) => {
            const query = {};
            const cursor = userCollection.find(query);
            const users = await cursor.toArray();
            res.send(users);
        });

        app.get('/user/:id', async (req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await userCollection.findOne(query);
            res.send(result);
        });

        app.post('/user', async(req, res) => {
            const newUser = req.body;
            console.log('Adding new user', newUser);
            const result = await userCollection.insertOne(newUser);
            res.send(result);
        });

        app.put('/user/:id', async (req, res) => {
            const id = req.params.id;
            const updateUser = req.body;
            const filter = {_id: ObjectId(id)};
            const options = {upsert: true};
            const updateDoc ={
                $set: {
                    name: updateUser.name,
                    email: updateUser.email
                }
            };
            const result = await userCollection.updateOne(filter, updateDoc, options);
            res.send(result);
        });

        app.delete('/user/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};

            const result = await userCollection.deleteOne(query);

            res.send(result);
        });
    }
    finally {
        // await client.close()
    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('I love you allah');
});

app.listen(port, () => console.log(`Listening from port ${port}`));
