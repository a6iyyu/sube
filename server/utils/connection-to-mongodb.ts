import mongoose from "mongoose";

export const ConnectionToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Sukses menghubungkan ke Mongo DB!");
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};