import NeedAHelp from "../models/NeedAHelp.js";

export const add = async (req, res) => {
  try {
    console.log("add item", req.body);
    req.body.owner = req.user;
    console.log(req);
    req.body.author = JSON.stringify(req.user);

    const addTask = await (
      await NeedAHelp.create(req.body)
    ).populate({ path: "owner", select: "username email" });
    res.send({ success: true, addTask });
  } catch (error) {
    console.log("🚀 ~ add ~ error", error.message);

    res.send({ success: false, error: error.message });
  }
};

export const getAllHelpReq = async (req, res) => {
  try {
    console.log("🚀 ~ hello list ", req.user);
    const tasks = await NeedAHelp.find().select("-__v");
    res.send({ success: true, tasks });
  } catch (error) {
    console.log("🚀 ~ list ~ error", error.message);

    res.send({ success: false, error: error.message });
  }
};
export const getUserHelpReq = async (req, res) => {
  try {
    console.log("🚀 ~ hello getUserHelpReq ", req.user);
    const getUserHelpReq = await NeedAHelp.find({ owner: req.user });
    res.send({ success: true, getUserHelpReq });
  } catch (error) {
    console.log("🚀 ~ list ~ error", error.message);

    res.send({ success: false, error: error.message });
  }
};
export const deleteItem = async (req, res) => {
  try {
    console.log("🚀 ~ hello deleteItem ", req.body);

    const deletedItem = await NeedAHelp.findByIdAndDelete({
      _id: req.body.id,
    });

    if (!deletedItem) return res.send({ success: false, errorId: 1 }); // not found

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ deleteItem ~ error", error.message);

    res.send({ success: false, error: error.message });
  }
};
export const updateTask = async (req, res) => {
  try {
    console.log(req.body);
    const task = await NeedAHelp.findByIdAndUpdate(req.body._id, req.body, {
      new: true,
    }).select("-password -__v");

    if (!task) return res.send({ success: false, errorId: 1 });

    res.send({ success: true, task });
  } catch (error) {
    console.log("🚀 ~ updateTask ~ error", error.message);

    res.send({ success: false, error: error.message });
  }
};
