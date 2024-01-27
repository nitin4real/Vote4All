const { UserModel } = require('../../../models')
const jwt  = require('jsonwebtoken')
const { JWT_KEY } = require('../../../Constants/config')

const attemptLogin = async (
    phone,
    password
) => {
    let response = {
        statusCode: 500
    }
    try {
        const user = await UserModel.findOne({ phone })
        console.log('password matched', user)
        if (user) {
            const userPassword = user.password
            if (userPassword == password) {
                const { name, phone } = user
                const token = jwt.sign({ name, phone }, JWT_KEY)
                response.statusCode = 200
                response.authToken = token
                return response
            } else {
                response.statusCode = 401;
                response.message = 'Wrong Password'
                return response
            }
        }
        response.message = "User Does'nt Exists"
        response.statusCode = 409
        return response
    } catch (err) {
        return err
    }
}

module.exports = {
    attemptLogin
}