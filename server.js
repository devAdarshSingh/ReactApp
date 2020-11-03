const express = require('express')
const app = express()
const dbConnect = require('./config/db')
const PORT = process.env.PORT || 5050

// database connection #mongodb
dbConnect()
app.get('/', (req, res) => {
    res.send("All set we are ready to go!!")
})

// initializing middleware
//for parsing body
app.use(express.json({extended: true}))

// Defining routes
app.use('/api/team', require('./routes/api/team'))
app.use('/api/events', require('./routes/api/events'))
app.use('/api/news', require('./routes/api/news'))
app.use('/api/blogs', require('./routes/api/blogs'))
app.use('/api/auth', require('./routes/api/auth'))


app.listen(PORT, () => {console.log("Server is running on port : "+PORT)})
