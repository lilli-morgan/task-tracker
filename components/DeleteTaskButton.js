import { Button } from "@mui/material";

const DeleteTaskButton = ({ id, taskList, setTaskList }) => {
  const deleteTask = () => {
    if (ifTaskList) {
      setTaskList(taskList.filter((task) => task.id !== id));
    } else {
      setCompleteList(completeList.filter((item) => item.id !== id));
    }
    return <Button onClick={deleteTask}>Delete task</Button>;
  };
};
export default DeleteTaskButton;
