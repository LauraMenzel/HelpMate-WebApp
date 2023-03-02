import { useEffect, useState, useContext } from "react";
import { ToDoListContext } from "../../context/NeedAHelpContext";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { TiEdit } from "react-icons/ti";
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

export default function EditMyTask(props) {
  const { dispatchHelp } = useContext(ToDoListContext);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState(props.item.category);
  const [place, setPlace] = useState(props.item.place);
  const [description, setDescription] = useState(props.item.description);
  const [date, setDate] = useState(props.item.date);
  const [time, setTime] = useState(props.item.time);

  useEffect(() => {
    setCategory(props.item.category);
    setPlace(props.item.place);
    setDescription(props.item.description);
    setDate(props.item.date);
    setTime(props.item.time);
  }, [props]);
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
    const editedTask = {
      ...props.item,
      description,
      date,
      time,
      category,
      place,
    };
    const response = await axios.post("/needAHelp/edit", editedTask);
    if (response.success) {
      dispatchHelp({
        type: "editTask",
        payload: editedTask,
      });
      console.log(response);
    }
    handleClose();
  };

  return (
    <div>
      <span
        onClick={handleOpen}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#3B8A80] rounded-lg hover:bg-[#3B8FFF] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        edit
        <TiEdit className="ml-2" />
      </span>
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
              <div className="form-group mt-6">
                <label>Date:</label>
                <input
                  type="date"
                  value={date}
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
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="form-group mt-6">
                <label>Localization</label>
                <input
                  type="text"
                  required
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="form-group mt-6">
                <label>Description</label>
                <input
                  required
                  type="text"
                  value={description}
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
