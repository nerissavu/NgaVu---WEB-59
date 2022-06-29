const express = require('express')
const { GridFSBucket } = require('mongodb')
const studentRouter = express.Router()
const { db } = require('../db')

studentRouter.post("/", async(req, res) => {
    // console.log(req.body)
    const { name, rank } = req.body
        //const name = req.body.name
        //const rank = req.body.rank

    const respond = await db.students.insertOne({
        // name: name,
        // rank: rank
        name,
        rank
    })
    res.status(201)
    res.json(respond)

})

studentRouter.post("/add-many", async(req, res) => {
    try {
        const respond = await db.students.insertMany(req.body.data)
        res.status(201)
        res.json(respond)
    } catch (error) {
        res.status(500)
        res.json("Some thing went wrong")
    }

})

studentRouter.get("/", async(req, res) => {
    try {
        const id = req.headers.id
        const student = await db.students.findOne({
            _id: new ObjectId(id)
        })
        res.status(201)
        res.json(student)
    } catch (err) {
        res.status(500)
        res.json("Something went wrong")
    }

})

module.exports = studentRouter