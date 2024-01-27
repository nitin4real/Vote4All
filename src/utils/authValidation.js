const { JWT_KEY } = require("../Constants/config");
const jwt = require('jsonwebtoken')

function validateToken(token) {
    try{
        return jwt.verify(token, JWT_KEY)
    } catch(err){
        return {
            authFail: 1, 
            message: 'Invalid Auth Token'
        }
    }
}

module.exports = validateToken