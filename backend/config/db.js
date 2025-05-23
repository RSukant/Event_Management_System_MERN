import mangoose from 'mongoose';

export const connectDB = async () => {
    try {
        const conn = await mangoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};