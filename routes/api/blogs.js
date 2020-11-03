const { Router } = require("express")
const express = require("express")
const router = express.Router()


// @route   GET api/blogs
// @desc    Fetch team members
// @access  Public

router.get('/', (req, res) => res.send('Blogs Route'))

module.exports = router;
