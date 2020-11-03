const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        type: String
    },
    jobprofile: {
        type: String,
        required: true,
    }
})

module.exports = Team = mongoose.model('Team', teamSchema);