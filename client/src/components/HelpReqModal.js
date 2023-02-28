import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000 ",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("general");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = async () => {
    if (!description || !place || !date || !time) {
      return;
    }
    const response = await axios.post("/needAHelp/add", {
      description,
      date,
      time,
      category,
      place,
    });

    console.log(response);
    setDescription("");
    setDate("");
    setTime("");
    setCategory("General");
    setPlace("");
    if (response.success) {
      /* dispatch({
        type: "ADD_TODO",
        payload: json,
      }); */
      console.log(response);
    }
    handleClose();
  };

  return (
    <div>
      <button
        className="bg-blue-700 hover:bg-blue-800 text-white mr-2 font-bold py-2 px-4 rounded-lg flex justify-center w-32"
        onClick={handleOpen}
      >
        Add Task
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            id="modal-modal-title rounded"
            className="flex justify-between mb-6"
          >
            <div className="flex flex-col">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="category"
                    onChange={handleChange}
                  >
                    <MenuItem value={"general"}>General</MenuItem>
                    <MenuItem value={"sport"}>Sport</MenuItem>
                    <MenuItem value={"culture"}>Culture</MenuItem>
                    <MenuItem value={"phone"}>Phone Call</MenuItem>
                    <MenuItem value={"meal"}>Meal</MenuItem>
                    <MenuItem value={"visit the doctor"}>
                      Visit the doctor
                    </MenuItem>
                    <MenuItem value={"office"}>Office</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              {/*    <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              /> */}
              <div className="form-group mt-6">
                <label>Date:</label>
                <input
                  type="date"
                  required
                  onChange={(e) => setDate(e.target.value)}
                  className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="form-group mt-6">
                <label>Time:</label>
                <input
                  type="time"
                  required
                  onChange={(e) => setTime(e.target.value)}
                  className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="form-group mt-6">
                <label>Place</label>
                <input
                  type="text"
                  required
                  onChange={(e) => setPlace(e.target.value)}
                  className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="form-group mt-6">
                <label>Description</label>
                <input
                  required
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-6"
                type="button"
                onClick={() => handleSave()}
              >
                send
              </button>
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
