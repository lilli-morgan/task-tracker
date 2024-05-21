import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteTaskButton = ({ id, taskList, setTaskList }) => {
  const deleteTask = () => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    <Button
      variant="contained"
      onClick={deleteTask}
      startIcon={<DeleteIcon />}
      buttonStyle={{
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
