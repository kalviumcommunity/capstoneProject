import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import foodModel from "../models/foodModel.js";

// Create a new order
export const createOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        // Optionally validate user and food existence
        const userExists = await userModel.findById(userId);
        if (!userExists) return res.status(404).json({ message: "User not found" });

        const foodExists = await foodModel.findById(items);
        if (!foodExists) return res.status(404).json({ message: "Food item not found" });

        const newOrder = new orderModel({
            userId,
            items,
            amount,
            address,
        });

        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all orders
export const getAllOrders = async (req, res) => {
    try {
        const orders = await orderModel.find()
            .populate("userId", "name email")     // Populate user name & email
            .populate("items", "name price");     // Populate food name & price
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a single order by ID
export const getOrderById = async (req, res) => {
    try {
        const order = await orderModel.findById(req.params.id)
            .populate("userId", "name email")
            .populate("items", "name price");

        if (!order) return res.status(404).json({ message: "Order not found" });

        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update order status or payment
export const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await orderModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedOrder) return res.status(404).json({ message: "Order not found" });

        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete an order
export const deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await orderModel.findByIdAndDelete(req.params.id);

        if (!deletedOrder) return res.status(404).json({ message: "Order not found" });

        res.status(200).json({ message: "Order deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
