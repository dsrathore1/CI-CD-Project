import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const { connection } = mongoose.connect(process.env.MONGO_URI, {
      dbName: "Poducts",
    });

    console.log(`Your database is established ${connection.name}`);
  } catch (error) {
    if (error) throw error;
  }
};

export default connectDB;
