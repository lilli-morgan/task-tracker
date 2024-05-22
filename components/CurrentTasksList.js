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
        maxWidth: 800,
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
                      <Typography variant="h6" color="textPrimary">
                        {task.taskName.charAt(0).toUpperCase() +
                          task.taskName.slice(1)}
                      </Typography>
                    }
                    secondary={
                      <Box>
                        <Typography
                          variant="body1"
                          color="textSecondary"
                          sx={{ mb: 1 }}
                        >
                          Description:{" "}
                          {task.taskDescription.charAt(0).toUpperCase() +
                            task.taskDescription.slice(1)}
                        </Typography>
                        <Typography variant="body1" color="black">
                          Due:{" "}
                          {task.taskDue.charAt(0).toUpperCase() +
                            task.taskDue.slice(1)}
                        </Typography>
                      </Box>
                    }
                  />
                  <Box sx={{ ml: "auto", display: "flex", gap: 2 }}>
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
