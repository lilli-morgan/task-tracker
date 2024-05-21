import CurrentTasksList from "./CurrentTasksList";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { useState } from "react";

const AddNewTask = ({
  taskInput,
  setTaskInput,
  taskList,
  setTaskList,
  completedTaskList,
  setCompletedTaskList,
}) => {
  const [counter, setCounter] = useState(1);
  console.log(taskList);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput !== "") {
      const newTask = { id: counter, taskInput: taskInput };
      const updatedTaskList = [...taskList, newTask];
      setTaskList(updatedTaskList);
      setCounter(counter + 1);
      setTaskInput("");
    }
  };
  return (
    <Box sx={{ mb: 10 }}>
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
            }}
          >
            <TextField
              id="outlined-basic"
              label="Task name"
              variant="outlined"
              value={taskInput}
              sx={{ mb: 4, width: "100%", backgroundColor: "#ffffff" }}
              onChange={(e) => setTaskInput(e.target.value)}
            />
            {/* <TextField id="outlined-basic" label="Details of task" variant="outlined" />
        <TextField id="outlined-basic" label="When due" variant="outlined" /> */}
            <Button
              variant="contained"
              type="submit"
              sx={{
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
