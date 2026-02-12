import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI1);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log('some eror')
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Add this function to check if database is connected
const isDbConnected = () => {
  return mongoose.connection.readyState === 1;
};

export { isDbConnected };
export default connectDB;