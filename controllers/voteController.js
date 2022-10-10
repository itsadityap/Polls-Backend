const express = require('express')
const pollModel = require("../models/pollDesign")
const router = express.Router()
const mongoose = require('mongoose')

async function vote(req, res) 
{
    const id = req.params.pollID;
    const optionId = req.params.optionID;
        try {
            let poll = await pollModel.findOne({pollId: id})
            if(poll) 
            {
                poll.pollOptions[optionId].noOfVotes = poll.pollOptions[optionId].noOfVotes + 1;
                await poll.save();
                
                // if (typeof localStorage === "undefined" || localStorage === null) 
                // {
                //     var LocalStorage = require('node-localstorage').LocalStorage;
                //     localStorage = new LocalStorage('./scratch');
                // }
                // localStorage.setItem('myFirstKey', 'myFirstValue');
                // console.log(localStorage.getItem('myFirstKey'));
                
                // let Voted = localStorage.setItem('isVoted')
                // if(Voted === null)
                // {
                //     Voted = [];
                // }
                // else
                // {
                //     localStorage.setItem('isVoted',JSON.stringify(Voted.concat(id)))
                // }
                res.status(200).sendFile(__dirname + "/public/success.html");

            } 
            
            else 
            {
                res.status(500).sendFile(__dirname + "/public/failure.html");
            }

        } catch (err) {
            console.log(err);
            res.status(400).send({message:"Unsuccessful, Unexpected Error"})
        }
}

module.exports = {
    vote
};