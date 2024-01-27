const dotenv = require('dotenv');
dotenv.config();
const JWT_KEY = process.env.JWT_UNIQUE
const TWILIO_SID = process.env.TWILIO_SID
const TWILIO_API_KEY = process.env.TWILLIO_API_KEY
module.exports = {
    JWT_KEY,
    TWILIO_SID,
    TWILIO_API_KEY,
}