const mongoose = require('../connection')
const Schema = mongoose.Schema

const Accomodation = new Schema ({
    name: String,
    location: String,
    url: String,
    image: String,
    breakfast: Boolean,
    pets: Boolean,
    user_review: [{
        ref: "Review",
        type: Schema.Types.ObjectId
    }],
    guest: [{
        ref: "User",
        type: Schema.Types.ObjectId
    }]
});

const Reviews = new Schema ({
    accomodation_name: [{
        ref: "Accomodation",
        type: Schema.Types.ObjectId
    }],
    // accomodation_location: [{
    //     ref: "Accomodation",
    //     type: Schema.Types.ObjectId
    // }],
    review: String,
    user_name: [{
        ref: "User",
        type: Schema.Types.ObjectId
    }],
    // date: Date,
    date: String,
    rating: Number,
    nights_stayed: Number 
});

const User = new Schema ({
    name: String,
    // image: String,
    user_review: [{
        ref: "Review",
        type: Schema.Types.ObjectId
    }],
    accomodation_visited: [{
        ref: "Accomodation",
        type: Schema.Types.ObjectId
    }]
});

const AccomodationModel = mongoose.model('Accomodation', Accomodation);
const ReviewModel = mongoose.model('Reviews', Reviews);
const UserModel = mongoose.model('User', User);

modeuls.exports = { Accomodation: AccomodationModel, Review = ReviewModel, User = UserModel };



