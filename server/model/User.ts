import mongoose, { Document, Schema } from "mongoose";
export interface IUser extends Document {
  username: string;
  password: String;
  role: "user" | "admin";
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});
export default mongoose.model<IUser>("User", UserSchema);
