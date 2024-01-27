const { attemptLogin } = require('../helper/login.helper')

const loginAttempt =  async (req, res) => {
    const { phone, password } = req.body
    const response = await attemptLogin(phone, password)
    return res.send(response)
}

module.exports = { loginAttempt }