
const router = require('express').Router()

require('../modules/signIn/route/signin.route')(router)
require('../modules/login/route/login.route')(router)

module.exports = router