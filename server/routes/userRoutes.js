import express from "express";

import {
  register,
  login,
  emailConfirm,
  Forgotpass,
  ChangePassword,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/emailconfirm", emailConfirm);
router.post("/forgotpass", Forgotpass);
router.post("/changepassword", ChangePassword);

export default router;
