const express = require('express')
const pollModel = require("../models/pollDesign")
const router = express.Router()
const mongoose = require('mongoose')

async function getVotes (req, res) {

    const pollI = req.params.pid;
    let poll = await pollModel.findOne({pollId: pollI})
    console.log(poll)


    res.status(200).send({message:"Successful"})
}

module.exports = {
    getVotes
};