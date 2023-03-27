import React, { useState, useContext } from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import Badge from "@mui/material/Badge";
import { PickersDay } from "@mui/x-date-pickers";
import { ToDoListContext } from "../context/NeedAHelpContext";

import "./DataTimePicker.css";

const DataTimePicker = () => {
  const { stateHelp } = useContext(ToDoListContext);
  console.log(stateHelp);
  const [value, setValue] = useState(dayjs("2022-04-07"));
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 5, 12]);
  return (
    <div className="calender">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <h1 className='header-text'>Calender</h1> */}
        <StaticDatePicker
          orientation="portrait"
          openTo="day"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
          renderDay={(day, _value, DayComponentProps) => {
            const isSelected =
              !DayComponentProps.outsideCurrentMonth &&
              highlightedDays.indexOf(day.date()) >= 0;
            return (
              <Badge key={day.toString()} overlap="circular">
                <PickersDay {...DayComponentProps} />
              </Badge>
            );
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default DataTimePicker;
