const { Administration, Complaint } = require('../models')
const getDate = require('../helpers/getDate')

class AdminController {
    static show(req, res) {
        Administration.findAll()
            .then(data => {
                res.render('administration', {data})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static addAdministration(req, res) {
        res.render('add-administration')
    }

    static addPost(req, res) {
        let obj = {
            complaintLocation: req.body.complaintLocation,
            address: req.body.address
        }
        Administration.create(obj)
            .then(data => {
                res.redirect('/administrations')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static listcomplaint(req,res) {
        Complaint.findAll({
            include: [Administration],
            where: {
                AdministrationId: +req.params.id
            }
        })
            .then(data => {
                res.render('complaints', {data, getDate})
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = AdminController