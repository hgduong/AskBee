import express from "express";
import connectDB from "./db";
import userApi from "./apis/user.api";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import { errorHandler } from "./middleware/errorMidleware"; // Thêm middleware xử lý lỗi
import listEndpoints from "express-list-endpoints";

// Load biến môi trường
dotenv.config();

// Khởi tạo Express
const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000", // Cấu hình CORS chi tiết
    credentials: true, // Cho phép gửi cookie qua CORS
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Xử lý form data

// Kết nối Database
connectDB();

// Kiểm tra biến môi trường quan trọng
if (!process.env.JWT_SECRET) {
  console.error("❌ JWT_SECRET missing in .env file");
  process.exit(1); // Dừng ứng dụng nếu thiếu biến quan trọng
}

// Routes
app.use("/api", userApi);
app.use("/api/auth", authRoutes);

// Xử lý lỗi tập trung
app.use(errorHandler);

// Khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server đang chạy trên port ${PORT}`);
  console.log(`🔗 Endpoint: http://localhost:${PORT}/api/auth/register`);
});
console.log(listEndpoints(app));
