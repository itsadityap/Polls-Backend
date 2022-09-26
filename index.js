const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require('./utils/database')
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
    
app.use(express.json());

// Create Poll Route
const createPollRoute = require('./routes/createPollRoute')
app.use('/',createPollRoute)

// Voting Route
const voteRoute = require('./routes/voteRoute');
app.use('/',voteRoute)

// Get Message Route
const getMessageRoute = require('./routes/getMessageRoute');
app.use('/',getMessageRoute)

// Get Votes Route
const getVotes = require('./routes/getVotesRoute');
const { default: mongoose } = require("mongoose");
app.use('/', getVotes)

app.get('/',(req,res)=>{
    res.send("Lmaoooo");
})

app.listen(process.env.PORT || 4000)
{
    console.log("Server is running on the port 4000")
}