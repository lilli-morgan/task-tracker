import { Button } from "@mui/material";

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
    return (
      <Button variant="contained" type="submit" onClick={addToComplete}>
        Task completed
      </Button>
    );
  };
};

export default CompleteTaskButton;
