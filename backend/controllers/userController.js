import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";


//login user

const loginUser = async (req, res) => {
    // Implementing the authentication
    const {email, password} = req.body;
    try {
        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success: false, message: "User not found"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return  res.json({success: false, message: "Invalid password"})
        }
        const token = createToken(user._id);
        res.json({success: true, token});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error in login user"});
    }
}

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}

//register user
const registerUser = async (req, res) => {
    // Implementing the authentication
    const { name, email, password } = req.body;
    try {
        const exists = await userModel.findOne({email});
        //checking the user exist or not
        if(exists){
            return res.json({success: false, message: "Email already exists"});
        }
        //validating email formate and strong password
        if(!validator.isEmail(email)){
            return res.json({success: false, message: "Please enter correct email id"})
        }
        if(password.length<8){
            return res.json({success: false, message: "please enter strong password"});
        }

        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPasswore = await bcrypt.hash(password, salt)

        //creating new user
        const newUser = new userModel({
            name: name,
            password: hashedPasswore,
            email: email
        })

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success: true, token})


    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error in registering user"});
    }
}


export { loginUser, registerUser };