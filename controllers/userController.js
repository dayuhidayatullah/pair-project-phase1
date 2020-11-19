const { Complaint, User, ComplaintUser } = require('../models')

class UserController {
    static show(req, res) {
        User.findAll({
            include: [Complaint]
        })
            .then(data => {
                res.render('users', {data})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static addComplaintUser(req, res) {
        let user = null
        User.findByPk(req.params.id)
            .then(data => {
                user = data
                return Complaint.findAll()
            }).then(Complaint => {
                res.render('add-complaint', {User, Complaint})
            })
    }

    static addPostComplaintUser(req,res) {
        ComplaintUser.create({
            UserId: req.params.id,
            ComplaintId: req.body.ComplaintId
        })
            .then(data => {
                res.redirect('/users')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static addUser(req,res) {
        res.render('add-user')
    }

    static addPost(req, res) {
        let obj = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            userName: req.body.userName,
            gmail: req.body.gmail,
        }
        User.create(obj)
            .then(data => {
                res.redirect('/users')
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = UserController