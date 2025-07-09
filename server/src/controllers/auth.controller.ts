// xử lí request từ route
import { Request, Response } from "express";
import { LoginRequest, RegisterRequest } from "../types/auth";
import User from "../model/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  const { username, password, confirmpassword } = req.body as RegisterRequest;
  if (!username || !password || !confirmpassword || password.length < 6)
    return res.status(400).json({ error: "Invalid input" });
  if (password !== confirmpassword)
    return res.status(400).json({ error: "Passwords mismatch" });
  const existingUser = await User.findOne({ username });
  if (existingUser) return res.status(400).json({ error: "Username exists" });
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ username, password: hashedPassword });
  res.status(201).json({ message: "Registered" });
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body as LoginRequest;
  const user = await User.findOne({ username });
  if (!username || !password)
    return res.status(400).json({ error: "Vui lòng nhập đầy đủ thông tin" });
  if (!user || !(await bcrypt.hash(password, user.password)))
    return res.status(400).json({ error: "Invalid credentials" });
  res.status(200).json({ message: "Logged in" });
};
