const { attemptSignIn, registerUser } = require('../helper/signin.helper')

const signInForm = async (req, res) => {
    const {
        name,
        email = 'NA',
        phone,
        password
    } = req.body
    const response = await attemptSignIn(name, phone, email, password)
    res.send(response)
}

const validateOtp = async (req, res) => {
    console.log('in signin validate otpreqest')
    const {
        phone,
        otp
    } = req.body
    const response = await registerUser(phone, otp)
    res.send(response)
}

module.exports = { signInForm, validateOtp }