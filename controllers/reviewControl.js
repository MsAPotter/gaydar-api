const { Reviews, Accomodation, User} = require('../db/models');

module.exports = {
    index: (req, res) => {
        Reviews.find({})
        .then(reviews => {
            res.json(reviews)
          })
    },
    findById: (req, res) => {
        Reviews.findOne({_id: req.params.reviewId})
        .then((review) => { 
            res.json(review)
        })
    },
    create: (req, res) => {
        Reviews.create(req.body)
        .then((created) => {
            res.json(created)
        })
    },
    update: (req, res) => {
        Reviews.updateOne({ _id: req.params.reviewId}, req.body)
        .then((review) => {
            res.json(review) 
        })
    },
    delete: (req, res) => {
        Reviews.findOneAndDelete({_id: req.params.reviewId})
        .then((deleted) => { 
            res.json(deleted)
    })
    }

}