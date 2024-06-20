import mongoose from "mongoose";

export const ConnectionToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Sukses menghubungkan ke Mongo DB!");
  } catch {
    console.error("Ada kesalahan, gagal untuk menghubungkan ke Mongo DB!");
    process.exit(1);
  }
};