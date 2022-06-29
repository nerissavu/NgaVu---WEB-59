const students = [

    {
        id: 1,
        name: 'Hai'
    },
    {
        id: 2,
        name: 'Tu'
    },
    {
        id: 3,
        name: 'Tung'
    }
]

function studentMiddleWare(req, res, next) {
    console.log('request body', req.body)
    const index = students.findIndex(
        (el) => JSON.stringify(el) === JSON.stringify(req.body)
    )
    const isUnauthorize = index < 0

    if (isUnauthorize) {
        res.status(401)
        res.send('Unauthorized')
        return
    }
    next()
}

module.exports = studentMiddleWare