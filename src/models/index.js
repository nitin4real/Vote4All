const mongoose = require('mongoose')
const { UserModel } = require('./user.model')


mongoose.connect('mongodb://127.0.0.1:27017/firstConnect').then(() => {
    console.log('Connected to db')
}).catch(() => {
    console.log('Some Error Occured Connecting to the db`')
})

module.exports = {
    UserModel
}