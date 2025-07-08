import { Request, Response } from "express";
import User from "../model/User";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Fetch failed" });
  }
};

export const updateUserStatus = async (req: Request, res: Response) => {
  try {
    const { id, status } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!updatedUser) return res.status(404).json({ error: "User not found" });
    res.json({ message: "Updated", user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: "Update failed" });
  }
};
