const { Reviews, Accomodation, User} = require('../db/models');

module.exports = {
    index: (req, res) => {
        Reviews.find({}).then(reviews => {
            res.json(reviews)
          })
    },
    findById: (req, res) => {
        Reviews.findOne({_id: req.params.reviewId}).then((review) => 
        { res.json(review); })
    },
    create: (req, res) => {
        Reviews.create({}).then((created) => {
            res.json(created)
        })
    },
    update: (req, res) => {
        Reviews.updateOne({_id: req.params.reviewId}).then((review) => 
        { res.json(review); })
    },
    delete: (req, res) => {
        Reviews.findOne({_id: req.params.reviewId}).then((review) => 
        { Reviews.deleteOne ({_id: req.params.reviewId})})
    }
}