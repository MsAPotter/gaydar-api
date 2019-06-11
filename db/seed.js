const mongoose = require('./connection')

// const Accomodation = require('./models/Accomodation');
// const User = require('./models/User');
// const Reviews = require('./models/Reviews');
const { Accomodation, Reviews, User } = require('./models.js')

const accomodationData = require('./data/accomodation.json')
const userData = require('./data/users.json')
const reviewData = require('./data/reviews.json')

Accomodation.find({}).deleteMany({}).then(() => {
    console.log('deleted all accomodations')
    User.deleteMany({}).then(() => {
      console.log('deleted all users')
      Reviews.deleteMany({}).then(() => {
        console.log('deleted all reviews')

            Accomodation.create(accomodationData)
            .then((data) => {
                console.log(data);
              })
            .catch(error => console.log('Uh oh!', error))

            
 
      })
    })
})