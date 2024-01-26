const { UserModel } = require('../../../models')
const { NewTempUserModel } = require('../../../models/user.model')
const isValid_Mobile_Number = require('../../../utils/validatePhone')
const sendOtpHelper = require('./otp.helper')

const attemptSignIn = async (
    name,
    phone,
    email
) => {
    let response = {
        statusCode: 500
    }
    
    if (!isValid_Mobile_Number(phone)) {
        response.statusCode = 300
        response.message = 'Invalid Phone number'
        return response
    }

    try {
        const exists = await UserModel.findOne({ phone })
        if (!exists) {
            console.log('user does not exist so proceding with creating a new user temp user')
            const otp = Math.floor(1000 + Math.random() * 9000);
            sendOtpHelper(phone, otp);
            const newUser = await NewTempUserModel.create({
                name,
                phone,
                email,
                otp
            });
            response.statusCode = 200;
            response.message = 'User Created With ' + JSON.stringify(newUser);
            return response;
        }
        response.message = 'User Already Exists'
        response.statusCode = 409
        return response
    } catch (err) {
        return err
    }
}

const sendOtp = async (phone) => {
    //here in the temp table also add the temp otp created
    //write the api call for twilio
}

const registerUser = async (
    name,
    phone,
    email
) => {
    try {
        const newUser = new UserModel({ name, phone, email })
        const saved = await newUser.save()
        console.log('New User added to the data set', saved)
        return saved
    } catch (err) {
        return false
    }
}

module.exports = {
    attemptSignIn
}