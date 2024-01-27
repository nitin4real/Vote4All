const axios = require('axios');
const {
    TWILIO_API_KEY: authToken,
    TWILIO_SID: accountSid
} = require('../../../Constants/config')

const twilioApiUrl = 'https://api.twilio.com/2010-04-01/Accounts/' + accountSid + '/Messages.json';
const sendOtpHelper = async (phoneNumber, otp) => {
    const postData = new URLSearchParams();
    postData.append('To', '+' + phoneNumber);
    postData.append('From', '+14452569089');
    postData.append('Body', otp);
    console.log('Twilio post data', postData)
    axios.post(twilioApiUrl, postData, {
        auth: {
            username: accountSid,
            password: authToken
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then(response => {
            console.log('Twilio API response:', response.data);
        })
        .catch(error => {
            console.error('Error making Twilio API request:', error.response.data);
        });
}
module.exports = sendOtpHelper