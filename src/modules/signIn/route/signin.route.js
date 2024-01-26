const {
    signInForm,
    validateOtp
} = require('../controller/singin.controller');


module.exports = (router) => {
    router.post('/signin/form', signInForm);
    router.post('/signin/otp', validateOtp);
}