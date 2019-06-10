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
})

module.exports = mongoose.model('Accomodation', Accomodation)