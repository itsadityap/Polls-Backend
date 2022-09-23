const express = require('express')
const router = express.Router()
const pollController = require('../controllers/createPollsController');

router.post("/createPoll",createPollRoute);

function createPollRoute (req, res) {
    pollController
        .createPoll(req, res)
        .then((data) => {})
        .catch((err) => console.log(err))
}

module.exports = router;