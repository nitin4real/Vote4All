const { attemptSignIn } = require('../helper/signin.helper')

const signInForm = async (req, res) => {
    const {
        name,
        email = 'NA',
        phone
    } = req.body
    const phoneNumber = Number(phone)
    const response = await attemptSignIn(name,phoneNumber,email)
    res.send(response)
}

const validateOtp = (req, res) => {
    console.log('in signin validate otpreqest')
    res.send('')
}

module.exports =  { signInForm, validateOtp }