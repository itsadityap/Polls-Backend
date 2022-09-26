const express = require('express')
const pollModel = require('../models/pollDesign')
const router = express.Router()
const mongoose = require('mongoose')

generateRandomId = () => {

    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
        "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    const randomNo = Math.floor(Math.random()*100000);

    const randomStrNo1 = Math.floor(Math.random()*26);

    const randomStr1 = alphabet[randomStrNo1];

    const randomStrNo2 = Math.floor(Math.random()*26);

    const randomStr2 = alphabet[randomStrNo2];

    return randomStr1 + randomNo + randomStr2;
}

async function createPoll (req, res) {

    const pollQues = req.query.ques;
    const pollOptionAnsIndividual = [];
    const pollId = generateRandomId();
    
    for(let i=0;i<req.query.pollOp.length;i++)
    {
        pollOptionAnsIndividual.push(req.query.pollOp[i])
    }

    const pollOptions = [];        
        
    for(let i=0;i<req.query.pollOp.length;i++)
    {
        let votes = {
            pollOptionAns: pollOptionAnsIndividual[i],
            noOfVotes: 0
        }
        pollOptions.push(votes);
    }
    console.log(pollOptions);

    const today = new Date();

    let options = {
        day:"numeric" ,year : 'numeric', month : 'long'
    };
    const day = today.toLocaleDateString("en-IN", options);

    const defaultItems = {
        "pollId":pollId,
        "pollQues":pollQues,
        "pollOptions":pollOptions,
        "createdDate":day,
        "expiry":day
    }
    
    // Mongoose Insert In Schema
    try {
        await pollModel.insertMany(defaultItems, function (err){
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log("Saved the default values to mongo server");
            }
        });
    }
    catch (err)
    {
        console.log(err);
    }

    res.status(200).send({message:"Successful"})
}

module.exports = {
    createPoll
};