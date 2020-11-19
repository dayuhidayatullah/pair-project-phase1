const route = require('express').Router()
const ComplaintController = require('../controllers/complaintController')

route.get('/', ComplaintController.show)
route.get('/addTour', ComplaintController.addComplaint)
route.post('/addTour', ComplaintController.addPost)

module.exports = route