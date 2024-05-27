import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import "dayjs/locale/en-gb";

const AddNewTask = ({
  taskName,
  setTaskName,
  taskDescription,
  setTaskDescription,
  taskDue,
  setTaskDue,
  taskList,
  setTaskList,
}) => {
  const [counter, setCounter] = useState(0);
  console.log(taskList);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== "") {
      const newTask = {
        id: counter,
        taskName: taskName,
        taskDescription: taskDescription,
        taskDue: taskDue ? taskDue.format("DD/MM/YYYY") : "",
      };
      const updatedTaskList = [...taskList, newTask];
      setTaskList(updatedTaskList);
      setCounter(counter + 1);
      setTaskName("");
      setTaskDescription("");
      setTaskDue("");
    } else {
      console.log("Please enter a task name.");
    }
  };
  return (
    <Box sx={{ mb: 10 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // maxWidth: 800,
          mx: "0",
          border: "1px solid #374e9e",
          borderRadius: 10,
          backgroundColor: "#f0f4f8",
          p: 5,
          mt: 10,
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "bold", mb: 3, color: "#374e9e" }}
        >
          Add a New Task
        </Typography>
        <Paper
          elevation={3}
          sx={{ width: "100%", p: 3, backgroundColor: "#eaf2fb" }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: 600,
              mx: "auto",
              mt: 10,
            }}
          >
            <TextField
              id="outlined-basic"
              label="Name the task"
              variant="outlined"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              sx={{ mb: 4, width: "100%", backgroundColor: "#ffffff" }}
            />
            <TextField
              id="outlined-basic"
              label="Additonal task details"
              variant="outlined"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              sx={{ mb: 4, width: "100%", backgroundColor: "#ffffff" }}
            />
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              adapterLocale="en-gb"
            >
              <DatePicker
                label="When is the task due?"
                value={taskDue}
                onChange={(newValue) => setTaskDue(newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    sx={{ mb: 4, width: "100%", backgroundColor: "#ffffff" }}
                  />
                )}
              />
            </LocalizationProvider>
            <Button
              variant="contained"
              type="submit"
              sx={{
                mt: 4,
                backgroundColor: "#4e8fe4",
                color: "white",
                "&:hover": { backgroundColor: "#3b6cb7" },
              }}
            >
              Add to task list
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};
export default AddNewTask;
