const mongoose = require('mongoose')

const newsletterSchema = mongoose.Schema({
    name: String,
    email: String
})

const Newsletters = mongoose.model('Newsletters', newsletterSchema)

module.exports = Newsletters
