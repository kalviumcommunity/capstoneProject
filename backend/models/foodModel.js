import mongoose from "mongoose";
// The Schema is connected to the foodController
const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    }
})

const foodModel = mongoose.models.food || mongoose.model('food', foodSchema);

export default foodModel