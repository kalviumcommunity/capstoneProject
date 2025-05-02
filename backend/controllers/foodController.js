import foodModel from "../models/foodModel.js";
import fs from "fs";
//add food items
// The post method.

// File upload
const addFood = async (req, res) => {
    const image_filename = `${req.file.filename}`;
    console.log(image_filename);
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category
    })
    try {
        await food.save();
        res.json({success: true, message: "Food added"});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Food not added"});
    }
}
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success: true, data: foods});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Food not found"});
    }
}

//remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => {});
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Food removed"});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Food not removed"});
    }
}

export { addFood, listFood, removeFood };