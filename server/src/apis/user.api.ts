/// call api từ fe tới be///
////////////////////////////
import express from "express";
import { getUsers, updateUserStatus } from "../controllers/user.controller";

const router = express.Router();

router.get("/users", getUsers); // Lấy danh sách người dùng
router.put("/user/status", updateUserStatus); // Cập nhật trạng thái

export default router;
