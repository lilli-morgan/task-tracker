import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteTaskButton = ({
  id,
  taskList,
  setTaskList,
  isCompletedTask,
  completedTaskList,
  setCompletedTaskList,
}) => {
  const deleteTask = () => {
    if (isCompletedTask) {
      setCompletedTaskList(completedTaskList.filter((task) => task.id !== id));
    } else {
      setTaskList(taskList.filter((task) => task.id !== id));
    }
  };
  return (
    <Button
      variant="contained"
      onClick={deleteTask}
      startIcon={<DeleteIcon />}
      sx={{
        backgroundColor: "#f2a854",
        color: "white",
        "&:hover": { backgroundColor: "#d18a42" },
      }}
    >
      Delete
    </Button>
  );
};

export default DeleteTaskButton;
