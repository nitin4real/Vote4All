
const router = require('express').Router()

require('../modules/signIn/route/signin.route')(router)

module.exports = router