import mongoose from "mongoose";

export const connectToDH = async () => {
    const connection = {};

    try {
        if (connection.isConnected) return;
        const db = await mongoose.connect(process.env.MONGO)
        connection.isConnected = db.connection[0].readyState;
    } catch (error) {
        throw new Error(error);
    }
};