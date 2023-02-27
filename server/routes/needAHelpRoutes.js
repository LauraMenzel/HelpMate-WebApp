import express from "express";
import {
  add,
  getAllHelpReq,
  deleteItem,
  getUserHelpReq,
  updateTask,
} from "../controllers/needHelpController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();
router.get("/getAllHelpReq", auth, getAllHelpReq);
router.get("/getUserHelpReq", auth, getUserHelpReq);
router.post("/add", auth, add);
router.delete("/delete", deleteItem);
router.post("/edit", updateTask);

export default router;
