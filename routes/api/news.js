const { Router } = require("express")
const express = require("express")
const router = express.Router()


// @route   GET api/news
// @desc    Fetch team members
// @access  Public

router.get('/', (req, res) => res.send('News Route'))

module.exports = router;
