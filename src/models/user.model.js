const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
    },
})

const NewTempUserSchema = new mongoose.Schema({
    ...UserSchema.obj,
    otp: {
        type: Number,
        required: true,
    }
})

UserSchema.index({ phone: 1 })

const NewTempUserModel = mongoose.model('NewTempUsers', NewTempUserSchema)
const UserModel = mongoose.model('Users', UserSchema)

// UserModel.createIndexes((err) => {
//     if (err) {
//         console.log('Error in creating index on user Collection')
//     } else {
//         console.log('Indexing on UserModel')
//     }
// })
module.exports = {
    UserModel,
    NewTempUserModel
}