import mongoose from 'mongoose'
// The schema is connected to userController and cartController
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cartData: {
        type: Object,
        default: {}
    }
}, {minimize: false})

const userModel = mongoose.models.user || mongoose.model('user', userSchema)

export default userModel