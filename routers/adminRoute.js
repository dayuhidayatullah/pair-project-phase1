const route = require('express').Router()
const adminController = require('../controllers/adminController')
const isLogin = require('../middlewares/checkLogin')

route.use(isLogin)
route.get('/', adminController.show)
route.get('/addAdministration', adminController.addAdministration)
route.post('/addAdministration', adminController.addPost)
route.get('/:id/listComplaint', adminController.listcomplaint)

module.exports = route