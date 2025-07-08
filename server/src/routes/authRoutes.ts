import express from "express";
import User from "../model/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Kiểm tra input cơ bản
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Vui lòng nhập đủ username và password" });
  }

  try {
    // Thêm .select('+password') để chắc chắn lấy field password
    const user = await User.findOne({ username }).select("+password");

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        error: "Tên đăng nhập hoặc mật khẩu không đúng",
        code: "AUTH_INVALID_CREDENTIALS", // Thêm mã lỗi cụ thể
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    res.json({
      token,
      user: {
        // Trả về thông tin user cơ bản
        id: user._id,
        username: user.username,
      },
    });
  } catch (error) {
    console.error("Login error:", error); // Log lỗi ra console
    res.status(500).json({
      error: "Đã xảy ra lỗi khi đăng nhập",
      code: "SERVER_ERROR",
    });
  }
});

router.post("/register", async (req, res) => {
  const { username, password, confirmpassword } = req.body;

  // Kiểm tra input cơ bản
  if (!username || !password || !confirmpassword) {
    return res.status(400).json({ error: "Vui lòng nhập đủ thông tin" });
  }
  if (password !== confirmpassword) {
    return res.status(400).json({
      error: "Mật khẩu không khớp",
      code: "PASSWORD_MISMATCH",
    });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: "Mật khẩu phải có ít nhất 6 ký tự" });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({
        error: "Tên đăng nhập đã tồn tại",
        code: "USER_EXISTS",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Đăng ký thành công!",
      user: {
        id: newUser._id,
        username: newUser.username,
      },
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({
      error: "Đã xảy ra lỗi khi đăng ký",
      code: "SERVER_ERROR",
    });
  }
});

export default router;
