const mongoose = require('./connection')

// const Accomodation = require('./models/Accomodation');
// const User = require('./models/User');
// const Reviews = require('./models/Reviews');
const { Accomodation, Review, User } = require('./models')

const accomodationData = require('./data/accomodation')
const userData = require('./data/users')
const reviewData = require('./data/reviews')

Accomodation.deleteMany({}).then(() => {
    console.log('deleted all accomodations')
    User.deleteMany({}).then(() => {
      console.log('deleted all users')
      Reviews.deleteMany({}).then(() => {
        console.log('deleted all reviews')

            Accomodation.create({accomodationData})
 
      })
    })
})