const express = require("express");
const router = express.Router();
const getVotesController = require('../controllers/getVotesController')

router.get("/getVotes/:pid", getVotesRoute);

async function getVotesRoute (req,res) {
    getVotesController
        .getVotes(req,res)
        .then((data) => {})
        .catch((err) => console.log(err));
}

module.exports = router;