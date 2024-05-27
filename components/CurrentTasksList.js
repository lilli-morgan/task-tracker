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
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const CurrentTasksList = ({
  taskList,
  setTaskList,
  completedTaskList,
  setCompletedTaskList,
}) => {
  const [dense, setDense] = useState(false);
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);

  const handleToggle = (event, newShowCompletedTasks) => {
    setShowCompletedTasks(newShowCompletedTasks);
  };

  return (
    <Box
      sx={{
        mt: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 8000,
        margin: "auto",
        p: 5,
        border: "1px solid #374e9e",
        borderRadius: 10,
        backgroundColor: "#f0f4f8",
      }}
    >
      <ToggleButtonGroup
        value={showCompletedTasks}
        exclusive
        onChange={handleToggle}
        aria-label="task status"
      >
        <ToggleButton value={false} aria-label="current tasks">
          Show current Tasks
        </ToggleButton>
        <ToggleButton value={true} aria-label="completed tasks">
          Show completed Tasks
        </ToggleButton>
      </ToggleButtonGroup>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", mb: 3, color: "#374e9e" }}
      >
        {showCompletedTasks ? "Completed Tasks" : "Current Tasks"}
      </Typography>
      <Paper
        elevation={3}
        sx={{ width: "100%", p: 2, backgroundColor: "#eaf2fb" }}
      >
        {showCompletedTasks ? (
          <List dense={dense}>
            {completedTaskList.map((task) => (
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
                    <Box>
                      <DeleteTaskButton
                        id={task.id}
                        taskList={taskList}
                        setTaskList={setTaskList}
                        completedTaskList={completedTaskList}
                        setCompletedTaskList={setCompletedTaskList}
                        isCompletedTask={true}
                      />
                    </Box>
                  </ListItem>
                </CardContent>
              </Card>
            ))}
          </List>
        ) : taskList.length === 0 ? (
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#374e9e", textAlign: "center" }}
          >
            You have no current tasks!
          </Typography>
        ) : (
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
                        isCompletedTask={false}
                        completedTaskList={completedTaskList}
                        setCompletedTaskList={setCompletedTaskList}
                      />
                    </Box>
                  </ListItem>
                </CardContent>
              </Card>
            ))}
          </List>
        )}
      </Paper>
    </Box>
  );
};

export default CurrentTasksList;
