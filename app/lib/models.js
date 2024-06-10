import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 150
    },
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String
    },
}, {timestamps: true});

const inventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 150
    },
    code: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 30
    },
    location: {
        type: String,
        required: true,
    },
}, {timestamps: true});

export const User = mongoose.models.User || mongoose.model("User", userSchema)
export const Inventory = mongoose.models.Inventory || mongoose.model("Inventory", inventorySchema)