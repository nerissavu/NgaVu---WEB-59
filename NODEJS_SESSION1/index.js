// function HelloWorld() {
//     function timeout() {
//         setTimeout()
//     }

//     console.log('1');
//     console.log('2');
//     console.log('3');
//     console.log('4');
// }

// HelloWorld();

// nodejs => xử lý bất đồng bộ

const fs = require('fs')

// fs.readFile('./mindx.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log('Error', err)
//     }
//     console.log('data:', data)
// })


// // READ
const data = fs.readFileSync('./students.json')
    // console.log('data: ', JSON.parse(data))

// // WRITE
const student = JSON.parse(data)
    // const newStudent = {
    //     id: 2,
    //     name: 'Nga',
    //     gender: 'F'
    // }

// student['data'].push(newStudent);
// fs.writeFileSync('./students.json', JSON.stringify(student))


// DELETE
// student['data'].splice(1, 1) //splice là gì
// fs.writeFileSync('./students.json', JSON.stringify(student))

//UPDATE
const newStudent = {
    data: [{
        id: 1,
        name: 'Nga',
        gender: 'F'
    }]
}
const { sum, sub } = require('./custom_module/math')

console.log(sum(1, 2))