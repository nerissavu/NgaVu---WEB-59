const express = require('express')
const app = express()
const Users = require('./constants/user')
const Students = require('./constants/student')
const bodyParser = require('body-parser');
const studentRouter = require('./router/student')
const loginRouter = require('./router/login')
const authenMdw = require('./middleware/authen_middleware')
app.use(bodyParser.json({ extended: true }));

app.get('/', (req, res) => {
    res.json(Users)
})

app.use('/login', loginRouter)
app.use('/student', authenMdw, studentRouter)

app.listen(3000, () => {
    console.log('App is runnning')
})