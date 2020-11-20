const { Complaint, Administration } = require('../models')
const getDate = require('../helpers/getDate')

class ComplaintController {
    static show(req, res) {
        Complaint.findAll({
            include: [Administration]
        })
            .then(data => {
                res.render('complaints', {data, getDate})
                // res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static addComplaint(req, res) {
        Administration.findAll()
            .then(data => {
                res.render('add-listcomplaint', {data})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static addPost(req,res) {
        let obj = {
            complaint_description: req.body.complaint_description,
            AdministrationId: req.body.administration,
            date: req.body.date
        }
        Complaint.create(obj)
            .then(data => {
                res.redirect('/complaints')
            })
            .catch(err => {
                console.log(err);

                res.send(err)
            })
    }
}

module.exports = ComplaintController