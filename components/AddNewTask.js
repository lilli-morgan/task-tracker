import CurrentTasksList from "./CurrentTasksList";
import { Box, Button, TextField, Typography } from "@mui/material";
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
      // const newTask = { id: counter, taskInput: taskInput };
      const updatedTaskList = [...taskList, taskInput];
      setTaskList(updatedTaskList);
      setCounter(counter + 1);
      setTaskInput("");
    }
  };
  return (
    <Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 400,
          margin: "auto",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Task name"
          variant="outlined"
          value={taskInput}
          sx={{ mb: 2, width: "100%" }}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        {/* <TextField id="outlined-basic" label="Details of task" variant="outlined" />
        <TextField id="outlined-basic" label="When due" variant="outlined" /> */}
        <Button variant="contained" type="submit">
          Add to task list
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 400,
          margin: "auto",
        }}
      >
        <Typography>Current tasks</Typography>
      </Box>
    </Box>
  );
};
export default AddNewTask;
