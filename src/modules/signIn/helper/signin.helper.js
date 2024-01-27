const { UserModel } = require('../../../models')
const isValid_Mobile_Number = require('../../../utils/validatePhone')
const sendOtpHelper = require('./otp.helper')
const { getValue, setValueWithExp, remove: removeFromRedis } = require('../../../redis-utils')

const attemptSignIn = async (
    name,
    phone,
    email,
    password
) => {
    let response = {
        statusCode: 500
    }

    // if (!isValid_Mobile_Number(phone)) { //phone number validation removed for now 
    //     response.statusCode = 300
    //     response.message = 'Invalid Phone number'
    //     return response
    // }

    try {
        const exists = await UserModel.findOne({ phone })
        if (!exists) {
            console.log('user does not exist so proceding with creating a new user temp user')
            const otp = Math.floor(1000 + Math.random() * 9000);
            sendOtpHelper(phone, otp);
            await setValueWithExp(phone, JSON.stringify({ name, phone, email, otp, password }), 180)
            response.statusCode = 200;
            response.message = 'Register with otp'
            return response;
        }
        response.message = 'User Already Exists'
        response.statusCode = 409
        return response
    } catch (err) {
        return err
    }
}

const registerUser = async (
    phone,
    otp
) => {
    let response = {
        statusCode: 500,
        message: ''
    }
    try {
        const userInRedis = await getValue(phone)
        if (!userInRedis) {
            response.message = 'OTP Verification Failed'
            return response
        }
        const { name, email, otp: realOtp, password } = JSON.parse(userInRedis)
        if (realOtp != otp) {
            response.message = 'Wrong Otp'
            return response
        }
        await removeFromRedis(phone)
        const newUser = new UserModel({ name, phone, email, password })
        await newUser.save()
        response.message = 'Success in Sign Up'
        return response
    } catch (err) {
        return err
    }
}

module.exports = {
    attemptSignIn,
    registerUser
}