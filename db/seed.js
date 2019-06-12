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
            .then((lodging) => {
                // console.log(lodging);

                Reviews.create(reviewData)
                .then((review) => {
                    // console.log(review)
                    // console.log(lodging[0].user_review)

                    lodging[0].user_review.push(review[0]._id)
                    lodging[0].save()
                    console.log(lodging)
                    console.log(review)

                    User.create(userData)
                    .then((user) => {
                        console.log(user)
                    })
                })
              })
            .catch(error => console.log('Uh oh!', error))

            
 
      })
    })
})