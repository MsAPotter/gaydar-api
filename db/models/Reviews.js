const mongoose = require('../connection')
const Schema = mongoose.Schema

const Reviews = new Schema ({
    accomodation_name: [{
        ref: "Accomodation",
        type: Schema.Types.ObjectId
    }],
    accomodation_location: [{
        ref: "Accomodation",
        type: Schema.Types.ObjectId
    }],
    review: String,
    user_name: [{
        ref: "User",
        type: Schema.Types.ObjectId
    }],
    date: Date,
    rating: Number,
    nights_stayed: Number 
})

module.exports = mongoose.model('Reviews', Reviews)