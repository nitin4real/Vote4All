const axios = require('axios');

const accountSid = 'ACb8fcc4dab9a25ca3520e2b74d2529489';
const authToken = 'f1962f55995d5701f8cb294a44e3a2b2';

const twilioApiUrl = 'https://api.twilio.com/2010-04-01/Accounts/' + accountSid + '/Messages.json';
const sendOtpHelper = async (phoneNumber, otp) => {
    const postData = new URLSearchParams();
    postData.append('To', '+'+phoneNumber);
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