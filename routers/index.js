const route = require('express').Router()
const adminRoute = require('./adminRoute')
const complaintRoute = require('./complaintRoute')
const userRoute = require('./userRoute')

route.get('/', (req, res) => {
    console.log(req.session)
    res.render('home')
})


route.use('/administrations', adminRoute)

route.use('/complaints', complaintRoute)
route.use('/users', userRoute)

module.exports = route
