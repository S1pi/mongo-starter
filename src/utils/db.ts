import mongoose from 'mongoose';
import dotenv from 'dotenv';
import CustomError from '../classes/CustomError';
dotenv.config();

const mongoConnect = async () => {
  // Connect to MongoDB
  if (!process.env.DB_URL) {
    throw new CustomError('DB_URL is not defined', 500);
  }

  try {
    const connection = await mongoose.connect(process.env.DB_URL);
    console.log('MongoDB connected');
    return connection;
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

export default mongoConnect;
