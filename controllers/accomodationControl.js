const { Accomodation, Reviews, User} = require('../db/models');

module.exports = {
    index: (req, res) => {
        Accomodation.find({})
        .then((accomodations) => {
            res.json(accomodations)
          })
    },
    findById: (req, res) => {
        Accomodation.findOne({_id: req.params.accomodationId})
        .then((accomodation) => { 
            res.json(accomodation) 
        })
    },
    create: (req, res) => {
        Accomodation.create(req.body)
        .then((created) => {
            res.json(created)
        })
    },
    update: (req, res) => {
        Accomodation.updateOne({ _id: req.params.accomodationId}, req.body)
        .then((accomodation) => { 
            res.json(accomodation) 
        })
    },
    delete: (req, res) => {
        Accomodation.findOneAndDelete({_id: req.params.accomodationId})
        .then((deleted) => { 
            res.json(deleted)
        })
    }
}