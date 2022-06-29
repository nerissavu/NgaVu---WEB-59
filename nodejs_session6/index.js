const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const studentRouter = require('./router/student')

const { connectToDb, db } = require('./db')
app.use(bodyParser.json({ extended: true }));

app.use('/student', studentRouter)
app.get('/', (req, res) => {
    res.json('Hello World')
    console.log('database', db)
})



app.listen(3000, () => {
    console.log('App is runnning')
    connectToDb()
})