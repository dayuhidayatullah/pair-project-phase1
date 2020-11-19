const route = require('express').Router()
const adminController = require('../controllers/adminController')

route.get('/', adminController.show)
route.get('/addUniversity', adminController.addAdministration)
route.post('/addUniversity', adminController.addPost)
route.get('/:id/listTour', adminController.listcomplaint)

module.exports = route