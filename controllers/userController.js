const { Complaint, User, ComplaintUser } = require('../models')
const {comparePassword } = require('../helpers/password')

class UserController {
    static show(req, res) {
        User.findAll({
            include: [Complaint]
        })
            .then(data => {
                // res.render('users', {data})
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
            }).then(data => {
                res.render('add-complaint', {user, data})
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
        // res.render('add-user')
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
    static registerForm(req, res){
        res.render('register')
    }
    static registerPost(req, res){
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
                console.log(err )
                res.send(err)
            })
    }
    static loginForm(req, res){
        res.render('loginForm')        
    }
    static checkLogin(req, res){
        const userName = req.body.userName
        const password = req.body.password
        User.findOne({
            where: {
                userName: userName
            }
        })
            .then(user => {
                if(user && comparePassword(password, user.password)){
                    res.redirect('/')
                }
                else{
                    res.send('invalid username or password')
                }
            })
            .catch(err => {
                res.send(err.message)
            })
    }
}

module.exports = UserController