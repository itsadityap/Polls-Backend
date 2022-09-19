const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pollSchema = new Schema({
    pollques: {type: String, required: true},
    options: {},
    createdDate:{type: Date, default: Date.now}
})

module.exports = mongoose.model("Polls",pollSchema);