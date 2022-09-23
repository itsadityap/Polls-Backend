const express = require('express')
const pollModel = require("../models/pollDesign")
const router = express.Router()
const mongoose = require('mongoose')

async function vote(req, res) {

    const id = req.params.pollID;
    const optionId = req.params.optionID;
        //console.log(found)
        try {
            let poll = await pollModel.findOne({pollId: id})
            if(poll) {
                poll.pollOptions[optionId].noOfVotes = poll.pollOptions[optionId].noOfVotes + 1;
                await poll.save();
                res.status(200).send({message:"Successful"})
            } else {
                res.status(500).send({message:"fail"})
            }

        } catch (err) {
            console.log(err);
            res.status(400).send({message:"Record cannot be found in the database"})
        }
}

module.exports = {
    vote
};