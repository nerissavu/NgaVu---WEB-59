const express = require("express")
const studentRouter = express.Router();
const Students = require('../constants/student');
const Users = require("../constants/user");

studentRouter.get('/', (req, res) => {
    res.json(Students)
})
studentRouter.put('/', (req, res) => {
    if (req.userRole !== "teacher") {
        res.json('Unauthorized')
        res.status(401)
        return
    }

    const messageBody = req.body
    console.log(messageBody)
    const index = Students.findIndex((el) => {
        return messageBody.id === el.id
    })
    Students[index].grade = req.body.grade
    res.json(Students)
    console.log('Hello')
})
module.exports = studentRouter