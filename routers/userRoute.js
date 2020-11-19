const route = require('express').Router()
const UserController = require('../controllers/userController')

route.get('/', UserController.show)
route.get('/:id/complaint', UserController.addComplaintUser)
route.post('/:id/complaint', UserController.addPostComplaintUser)

route.get('/addUser', UserController.addUser)
route.post('/addUser', UserController.addPost)

module.exports = route