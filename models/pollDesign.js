const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const pollSchema = new Schema({
    pollId : {type: String},
    pollQues: {type: String},
    pollOptions:
        [
            {
                pollOptionAns: String,
                noOfVotes: Number
            },
        ],

    createdDate:{type: Date, default: Date.now},
    expiry:{type:Date}
})

pollSchema.set("toJSON", {
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});

module.exports = mongoose.model("Polls",pollSchema);