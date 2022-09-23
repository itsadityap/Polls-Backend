require("dotenv").config()
const mongoose = require("mongoose")

const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(process.env.MONGO_URL, connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
    Polls: require("../models/pollDesign"),
};