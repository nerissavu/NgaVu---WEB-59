const express = require('express')
const app = express()
const studentRouter = require('./router/students')
const studentMiddleWare = require('./middleware/student_middleware')
const LoggingMiddleWare = require('./middleware/logging_middleware')
const bodyParser = require('body-parser');
app.use(bodyParser.json({ extended: true }));



app.use("/student", LoggingMiddleWare, studentMiddleWare, studentRouter)

app.get("/teacher", LoggingMiddleWare, (req, res) => {
    res.json('Success')

})

app.get("/class", LoggingMiddleWare, (req, res) => {
    res.json('Success')


})
app.use(express.static('assests'))
app.listen(3000, (err) => {
    if (err) {
        return;
    }
    console.log("Apllication is running")
})