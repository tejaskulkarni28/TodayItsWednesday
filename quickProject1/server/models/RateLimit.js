const mongoose = require('mongoose')

const rateLimitSchema = new mongoose.Schema({
    userId:{type:String, required:true},
    requestCount:{type: Number, default: 0},
    firstRequest:{type:Date, default: Date.now}
})

module.exports = mongoose.model('RateLimit', rateLimitSchema)