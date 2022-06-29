const { MongoClient } = require('mongodb')

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = "Student_Management"
const db = {}

async function connectToDb() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const database = client.db(dbName);

    db.students = database.collection('Student');

    // the following code examples can be pasted here...

    return 'done.'
}

module.exports = { connectToDb, db }