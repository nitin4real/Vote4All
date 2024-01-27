const {
    loginAttempt,
} = require('../controller/login.controller');


module.exports = (router) => {
    router.post('/login', loginAttempt);
}