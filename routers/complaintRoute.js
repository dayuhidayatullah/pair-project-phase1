const route = require('express').Router()
const ComplaintController = require('../controllers/complaintController')
const isLogin = require('../middlewares/checkLogin')

route.get('/', ComplaintController.show)
route.use(isLogin)
route.get('/addTour', ComplaintController.addComplaint)
route.post('/addTour', ComplaintController.addPost)

module.exports = route