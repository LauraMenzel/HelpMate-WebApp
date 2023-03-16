import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import needAHelpRoutes from "./routes/needAHelpRoutes.js";
import db from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
db();
app.use(cookieParser());
app.use(cors());
app.use(express.json()); // to definied req.body
app.use("/users", userRoutes);
app.use("/needAHelp", needAHelpRoutes);
// syntax app.use('path', express.static('storedpathofthefile'))
app.use("/images", express.static("./server/uploads"));

const port = process.env.PORT || 4002;
app.listen(port, () => console.log("server is up and running at port", port));
