const route = require('express').Router()
const ComplaintController = require('../controllers/complaintController')
const isLogin = require('../middlewares/checkLogin')

route.get('/', ComplaintController.show)
route.use(isLogin)
route.get('/addComplaint', ComplaintController.addComplaint)
route.post('/addComplaint', ComplaintController.addPost)
module.exports = route