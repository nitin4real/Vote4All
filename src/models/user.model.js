const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
})

UserSchema.index({ phone: 1 })
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
}