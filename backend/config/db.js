import mongoose from "mongoose";
// database read and write perform
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mahanandhanmanish:1234@cluster0.qvibwye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log("DB Connected"))
}