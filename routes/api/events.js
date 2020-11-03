const { Router } = require("express")
const express = require("express")
const router = express.Router()


// @route   GET api/events
// @desc    Fetch team members
// @access  Public

router.get('/', (req, res) => res.send('Events Route'))

module.exports = router;
