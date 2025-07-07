import { Request, Response } from "express";
import User from "../model/User";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

export const updateUserStatus = async (req: Request, res: Response) => {
  try {
    const { id, status } = req.body; // Giả định body chứa id và trạng thái mới
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { status }, // Thêm trường status vào schema nếu cần
      { new: true, runValidators: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User status updated", user: updatedUser });
  } catch (error) {
    console.error("Error updating user status:", error);
    res.status(500).json({ error: "Failed to update user status" });
  }
};
