const express = require("express");
const router = express.Router();
const getMessageController = require('../controllers/getMessageController')

router.get("/getMessage/:id", getMessageRoute)

async function getMessageRoute(req,res) {
    getMessageController
        .getMessage(req,res)
        .then((data) => {})
        .catch((err) => console.log(err));
}

module.exports = router;