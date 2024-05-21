import { useState } from "react";
import CompleteTaskButton from "./CompleteTaskButton";
import DeleteTaskButton from "./DeleteTaskButton";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Paper,
  Card,
  CardContent,
} from "@mui/material";

const CurrentTasksList = ({
  taskList,
  setTaskList,
  completedTaskList,
  setCompletedTaskList,
}) => {
  const [dense, setDense] = useState(false);

  return (
    <Box
      sx={{
        mt: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 600,
        margin: "auto",
        p: 5,
        border: "1px solid #374e9e",
        borderRadius: 10,
        backgroundColor: "#f0f4f8",
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", mb: 3, color: "#374e9e" }}
      >
        Current tasks
      </Typography>
      <Paper
        elevation={3}
        sx={{ width: "100%", p: 2, backgroundColor: "#eaf2fb" }}
      >
        <List dense={dense}>
          {console.log(taskList)}
          {taskList.map((task) => (
            <Card key={task.id} sx={{ mb: 2, backgroundColor: "#ffffff" }}>
              <CardContent>
                <ListItem key={task.id}>
                  <ListItemText
                    primary={
                      task.taskInput.charAt(0).toUpperCase() +
                      task.taskInput.slice(1)
                    }
                    sx={{
                      color: "#374e9e",
                      fontSize: "5rem",
                      fontWeight: "bold",
                    }}
                  />
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <CompleteTaskButton
                      id={task.id}
                      taskList={taskList}
                      completedTaskList={completedTaskList}
                      setCompletedTaskList={setCompletedTaskList}
                      setTaskList={setTaskList}
                    />
                    <DeleteTaskButton
                      id={task.id}
                      taskList={taskList}
                      setTaskList={setTaskList}
                    />
                  </Box>
                </ListItem>
              </CardContent>
            </Card>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default CurrentTasksList;
