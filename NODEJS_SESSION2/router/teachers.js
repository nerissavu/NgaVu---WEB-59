// Step 1: Tao route cho teacher
const express = require('express')
const teacherRouter = express.Router()

// Step 2: Tao const dang array luu 3 phan tu
const teachers = [{
        id: 1,
        name: "Tuan",
        job: "teacher",
    },
    {
        id: 2,
        name: "Minh",
        job: "teacher",
    },
    {
        id: 3,
        name: "Vu",
        job: "teacher",
    },
];

//
// Step 3:
// Tao method GET ==> return ve mang teacher;
teacherRouter.get('', (req, res) => {
    console.log('this is request from client', req.query.id)
    res.json(teachers)
})

// Tao method POST ==> them phan tu vao mang teacher;
studentRouter.post('', (req, res) => {
    const { id, name } = req.body
    students.push({
        id,
        name,
    });
    res.status(201);
    res.json(teachers);
})

// PUT ==> update phan tu 2 ==> name: Khai, job: "supporter"
// DELETE ==> Xoa phan tu cuoi cung cua mang teacher