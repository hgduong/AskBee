import { LoginRequest, RegisterRequest } from "../types/auth";
import User from "../model/User";
export const register = async (data: RegisterRequest) => {
  const { username, password, confirmpassword } = data;

  if (!username || !password || !confirmpassword) {
    throw new Error("Thiếu thông tin đăng kí");
  }
  if (password != confirmpassword) {
    throw new Error("Mật khẩu không khớp");
  }
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    throw new Error("Tên đăng nhập đã tồn tại");
  }
  const newUser = new User({ username, password });
  await newUser.save();
  return "Đăng kí thành công";
};

export const login = async (data: LoginRequest) => {
  const { username, password } = data;
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error("Tài khoản không tồn tại");
  }
  if (user.password !== password) {
    throw new Error("Sai mật khẩu");
  }
  return user;
};
