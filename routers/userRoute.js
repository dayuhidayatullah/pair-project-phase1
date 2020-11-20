const route = require('express').Router()
const UserController = require('../controllers/userController')
const isLogin = require('../middlewares/checkLogin')


route.get('/', isLogin, UserController.show)
route.get('/register', UserController.registerForm)
route.post('/register', UserController.registerPost)
route.get('/login', UserController.loginForm)
route.post('/login', UserController.checkLogin)
route.get('/:id/complaint', isLogin, UserController.addComplaintUser)
route.post('/:id/complaint', isLogin,UserController.addPostComplaintUser)

route.get('/addUser', isLogin, UserController.addUser)
route.post('/addUser', isLogin ,UserController.addPost)

module.exports = route