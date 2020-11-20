const route = require('express').Router()
const adminController = require('../controllers/adminController')
const isLogin = require('../middlewares/checkLogin')

route.use(isLogin)
route.get('/', adminController.show)
route.get('/addUniversity', adminController.addAdministration)
route.post('/addUniversity', adminController.addPost)
route.get('/:id/listTour', adminController.listcomplaint)

module.exports = route