import { useState } from "react";
import CompleteTaskButton from "./CompleteTaskButton";
import DeleteTaskButton from "./DeleteTaskButton";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";

const CurrentTasksList = ({
  taskList,
  setTaskList,
  completedTaskList,
  setCompletedTaskList,
}) => {
  const [dense, setDense] = useState(false);

  return (
    <List dense={dense} sx={{ mt: 2 }}>
      {console.log(taskList)}
      {taskList.map((task) => (
        <ListItem>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary={task} />
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
        </ListItem>
      ))}
    </List>
  );
};

export default CurrentTasksList;
