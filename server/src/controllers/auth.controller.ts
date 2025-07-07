import { Request, Response } from "express";
import { LoginRequest, RegisterRequest } from "../types/auth";
import User from "../model/User";
import { message } from "antd";

export const register = async (req: Request, res: Response) => {
  const { username, password, confirmpassword } = req.body as RegisterRequest;
  if (!username || !password || !confirmpassword) {
    return res.status(400).json({ error: "Thiếu thông tin đăng kí" });
  }
  if (password != confirmpassword) {
    return res.status(400).json({ error: "Mật khẩu không khớp" });
  }
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ error: "Tên đăng nhập đã tồn tại" });
  }
  const newUser = new User({ username, password });
  await newUser.save();
  return res.status(201).json({ message: "Đăng kí thành công" });
};
//---------------------------------------------------------------------

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body as LoginRequest;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({ error: "Tải khoản không tồn tại" });
  }
  if (user.password != password) {
    return res.status(400).json({ error: "Sai mật khẩu" });
  }
  return res.status(200).json({ message: "Đăng nhập thành công" });
};
