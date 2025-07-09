import mongoose, { Schema, Model, Document } from "mongoose";

// Định nghĩa interface cho tài liệu User
interface IUser extends Document {
  username: string;
  password: string;
  phone: string;
  address: string;
  status: string;
  role: "admin" | "user";
  points: number;
}

// Định nghĩa schema
const userSchema: Schema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, default: "" },
    address: { type: String, default: "" },
    status: { type: String, default: "active" },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    points: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Định nghĩa model
const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default User;
