import express from "express";
import auth from "../middlewares/auth.js";

import {
  register,
  login,
  emailConfirm,
  Forgotpass,
  ChangePassword,
  logout,
  updateProfile,
} from "../controllers/userController.js";
import multerMiddleware from "../config/multer-cloudinary.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/emailconfirm", emailConfirm);
router.post("/forgotpass", Forgotpass);
router.post("/changepassword", ChangePassword);
router.get("/logout", logout);
router.post("/profile", auth, multerMiddleware.single("image"), updateProfile);

export default router;
