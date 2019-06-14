const mongoose = require('./connection')
const Schema = mongoose.Schema

const Accomodation = new Schema ({
    name: String,
    location: String,
    url: String,
    image: String,
    breakfast: Boolean,
    pets: Boolean,
    user_review: [{
        ref: "Reviews",
        type: Schema.Types.ObjectId
    }]
});

const Reviews = new Schema ({
    accomodation_name: String,
    review: String,
    user_name: String,
    date: String,
    rating: Number,
    nights_stayed: Number 
});

const User = new Schema ({
    name: String,
    // image: String,
    user_review: String,
    accomodation_visited: String
});

const AccomodationModel = mongoose.model('Accomodation', Accomodation);
const ReviewModel = mongoose.model('Reviews', Reviews);
const UserModel = mongoose.model('User', User);

module.exports = { Accomodation: AccomodationModel, Reviews: ReviewModel, User: UserModel };



