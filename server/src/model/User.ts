import mongoose, { Schema, Model, Document } from "mongoose";

// Định nghĩa interface cho tài liệu User
interface IUser extends Document {
  username: string;
  password: string;
}

// Định nghĩa schema
const userSchema: Schema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Định nghĩa model
const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default User;
