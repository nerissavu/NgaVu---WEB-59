const express = require('express')
const app = express()
const studentRouter = require('./router/students')
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.json({ extended: true }))
app.get('/homepage', (req, res) => {
    res.send('Hello Homepage!')
})

app.use('/student', studentRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})