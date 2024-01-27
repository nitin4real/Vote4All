const axios = require('axios');
const {
    TWILIO_API_KEY: authToken,
    TWILIO_SID: accountSid
} = require('../../../Constants/config')
const client = require('twilio')(accountSid, authToken);

const sendOtpHelper = async (phoneNumber, otp) => {
    try{
        await client.messages.create({ from: '+14452569089', body: 'Your Vote4All Otp is - ' + otp, to: '+' + phoneNumber })
        console.log( 'messege sent to ', phoneNumber, otp)
    } catch (err){
        console.log('Error In Sending Otp')
    }
}
module.exports = sendOtpHelper