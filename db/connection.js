const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/gaydar', { useNewUrlParser: true })

mongoose.Promise = Promise

module.exports = mongoose