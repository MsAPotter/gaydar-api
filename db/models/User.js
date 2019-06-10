const mongoose = require('../connection')
const Schema = mongoose.Schema

const User = new Schema ({
    name: String,
    image: String,
    user_review: [{
        ref: "Review",
        // type: mongoose.Schema.Types.ObjectId
        type: Schema.Types.ObjectId
    }],
    accomodation_visited: [{
        ref: "Accomodation",
        type: Schema.Types.ObjectId
    }]
})


module.exports = mongoose.model('User', User)