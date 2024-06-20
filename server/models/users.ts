import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  id_user: number;
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

const UserSchema: Schema = new mongoose.Schema({
  id_user: { type: Number, unique: true },
  username: { type: String, require: true, unique: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true, unique: true },
  confirm_password: { type: String, require: true },
});

export default mongoose.model<IUser>("Users", UserSchema);