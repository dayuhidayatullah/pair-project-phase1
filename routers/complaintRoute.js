const route = require('express').Router()
const ComplaintController = require('../controllers/complaintController')

route.get('/', ComplaintController.show)
route.get('/addComplaint', ComplaintController.addComplaint)
route.post('/addComplaint', ComplaintController.addPost)

module.exports = route