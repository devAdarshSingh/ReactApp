const jwt = require('jsonwebtoken')
const config = require('config');

module.exports = function (req, res, next) {
    // get authorization token from header
    const token = req.header('auth-token')

    // check if there's a token or not
    if (!token) {
        return res.status(401).json({msg: "No token, Autorization denied"})
    }
    try {
        const decode = jwt.verify(token, config.get('jwtSecretKey'))
        req.email = decode.email
        next()
    } catch (err) {
        res.status(401).json({msg: 'Token is not valid'})
    }
}