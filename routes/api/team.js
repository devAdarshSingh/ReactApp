const { Router } = require("express")
const express = require("express")
const router = express.Router()
const { check, validationResult, body } = require('express-validator')
const Team = require("../../model/Team")
const gravatar = require('gravatar')
const jwt = require('jsonwebtoken')
const config = require('config')
const auth = require('../../middleware/auth')

// @route   GET api/team
// @desc    Fetch team members
// @access  Public
router.get('/', (req, res) => res.send('Teams Route'))

// @route   POST api/team/add
// @desc    Add team member
// @access  Private
router.post('/add', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('jobprofile', 'Job profile is required').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { name, email, jobprofile } = req.body

    try {
        let member = await Team.findOne({ email })
        if (member) {
            res.status(400).json({ errors: [{ msg: 'Team member already exists' }] })
        }
        const avatar = gravatar.url(email, {
            s: '200',
            r: 'x',
            d: 'mp'
        }, true)
        member = new Team({
            name,
            email,
            jobprofile,
            avatar
        })
        await member.save()

        const payload = {
            member: {
                email
            }
        }

        jwt.sign(
            payload,
            config.get('jwtSecretKey'),
            {
                expiresIn: 36000
            },
            (err, token) => {
                if (err) throw err
                res.json({ token })
            }
        )

    } catch (error) {
        return res.status(400).json("Server Error")
    }
})

// @route   DELETE api/team/
// @desc    Remove team member
// // @access  Private
// router.delete("/remove/:id", async (req, res) => res.send("Success"))

router.delete('/remove/:id', auth, async (req, res) => {
    try {
        await Team.findByIdAndDelete(req.params.id)
    } catch (error) {
        res.status(500).json({ msg: 'server error' })
    }
    res.send("user deleted")
})


module.exports = router;
