import { Button } from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CompleteTaskButton = ({
  id,
  taskList,
  setTaskList,
  completedTaskList,
  setCompletedTaskList,
}) => {
  const addToComplete = () => {
    const selectedItem = taskList.find((task) => task.id === id);
    setCompletedTaskList([...completedTaskList, selectedItem]);
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    <Button
      variant="contained"
      onClick={addToComplete}
      startIcon={<CheckCircleIcon />}
      buttonStyle={{
        backgroundColor: "#4e8fe4",
        color: "white",
        "&:hover": { backgroundColor: "#3b6cb7" },
      }}
    >
      Completed
    </Button>
  );
};

export default CompleteTaskButton;
