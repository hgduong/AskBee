import express from "express";
import User from "../model/User";
import jwt from "jsonwebtoken";

const router = express.Router();

// Middleware xác thực
const authenticate = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not configured");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as { id: string };
    req._id = decoded.id; // Gán _id từ token
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

// Lấy thông tin profile của chính mình
router.get("/", authenticate, async (req, res) => {
  try {
    const user = await User.findById(req._id).select(
      "-password -__v -createdAt -updatedAt"
    );
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({
      _id: user._id,
      username: user.username,
      phone: user.phone,
      address: user.address,
      status: user.status,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Cập nhật thông tin profile của chính mình
router.put("/", authenticate, async (req, res) => {
  try {
    const { phone, address } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req._id,
      { phone, address },
      { new: true, runValidators: true }
    ).select("-password -__v -createdAt -updatedAt");

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({
      message: "Profile updated",
      user: {
        _id: updatedUser._id,
        username: updatedUser.username,
        phone: updatedUser.phone,
        address: updatedUser.address,
        status: updatedUser.status,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
