const express = require('express')
const pollModel = require("../models/pollDesign")
const router = express.Router()
const mongoose = require('mongoose')

async function getVotes (req, res) {

    const pollI = req.params.pid;
    let poll = await pollModel.findOne({pollId: pollI})

    //console.log(poll)

    let totalVotes = 0;
    const voteArray = [];

    for(let i=0;i<poll.pollOptions.length;i++)
    {
        totalVotes+=poll.pollOptions[i].noOfVotes;
        voteArray.push(poll.pollOptions[i].noOfVotes);
    }

    // console.log(voteArray);
    // console.log(totalVotes);

    let votes = {
        votesIndividual: [],
        totalV: Number,
    }

    for(let i=0;i<voteArray.length;i++)
    {
        votes.votesIndividual.push({
            'vote':voteArray[i]
        })
    }

    votes.totalV = totalVotes;

    // console.log(votes);

    res.status(200).send(votes);
}

module.exports = {
    getVotes
};