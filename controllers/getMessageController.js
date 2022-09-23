const express = require('express')
const pollModel = require("../models/pollDesign")
const router = express.Router()
const mongoose = require('mongoose')

async function getMessage (req,res) {

    const pollId = req.params.id;
    let poll = await pollModel.findOne({pollId: pollId})

    //console.log(poll);

    const message = [];
    const urls = [];

    for(let i=0;i<poll.pollOptions.length;i++)
    {
        urls.push("localhost:4000/vote/"+poll.pollId+"/"+i);
    }
    //console.log(urls)

    for(let i=0;i<poll.pollOptions.length;i++)
    {
        message.push(poll.pollOptions[i].pollOptionAns);
    }
    //console.log(message);

    let response = {
        pollQ: String,
        responses: []
    }

    response.pollQuestion = poll.pollQues;

    for(let i=0;i<message.length;i++)
    {
        response.responses.push({
            "message":message[i],
            "url":urls[i]
        })
    }
    //console.log(response)
    res.status(200).send(response);
}

module.exports = {
    getMessage
};