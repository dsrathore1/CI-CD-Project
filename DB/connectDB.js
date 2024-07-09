import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "Products",
    });
    console.log(`Your database is established ${connection.name}`);
  } catch (error) {
    if (error) throw error;
  }
};

export default connectDB;
