const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/gaydar', { useNewUrlParser: true })
// if (process.env.NODE_ENV == 'production') {
// 	mongoose.connect(process.env.DB_URL);
// } else {
// 	mongoose.connect('mongodb://localhost/gaydar');
// }

mongoose.Promise = Promise

module.exports = mongoose