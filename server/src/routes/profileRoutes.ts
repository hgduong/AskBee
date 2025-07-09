// import express from "express";
// import User from "../model/User";
// import jwt from "jsonwebtoken";

// const router = express.Router();

// const authenticate = (
//   req: express.Request,
//   res: express.Response,
//   next: express.NextFunction
// ) => {
//   try {
//     const token = req.headers.authorization?.split(" ")[1];
//     if (!token) {
//       return res.status(401).json({ error: "Unauthorized" });
//     }
//     if (!process.env.JWT_SECRET) {
//       throw new Error("JWT_SECRET is not configured");
//     }
//     const decoded = jwt.verify(token, process.env.JWT_SECRET) as { id: number };
//     req.user = { id: decoded.id };
//     next();
//   } catch (error) {
//     res.status(401).json({ error: "Invalid token" });
//   }
// };

// router.get("/", authenticate, async (req, res) => {
//   try {
//     const user = await User.findOne({ id: req.user?.id }).select(
//       "-password -__v -createdAt -updatedAt"
//     );
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     res.json({
//       id: user.id,
//       username: user.username,
//       phone: user.phone,
//       address: user.address,
//       status: user.status,
//     });
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// router.put("/", authenticate, async (req, res) => {
//   try {
//     const { phone, address } = req.body;

//     const updatedUser = await User.findOneAndUpdate(
//       { id: req.user?.id },
//       { phone, address },
//       { new: true, runValidators: true }
//     ).select("-password -__v -createdAt -updatedAt");

//     if (!updatedUser) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     res.json({
//       message: "Profile updated",
//       user: {
//         id: updatedUser.id,
//         username: updatedUser.username,
//         phone: updatedUser.phone,
//         address: updatedUser.address,
//         status: updatedUser.status,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// export default router;
