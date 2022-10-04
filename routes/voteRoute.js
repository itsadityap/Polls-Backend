const express = require("express");
const router = express.Router();
const voteControl = require('../controllers/voteController')

router.get("/vote/:pollID/:optionID", voteOptions);

function voteOptions(req, res) {
    voteControl.vote(req,res)
        .then((data) => {})
        .catch((err) => console.log(err))
}

module.exports = router;