const mongoose = require('mongoose')

const newsletterSchema = mongoose.Schema({
    name: String,
    email: String
})

const newsletters = mongoose.model('newsletters', newsletterSchema)

module.exports = newsletters