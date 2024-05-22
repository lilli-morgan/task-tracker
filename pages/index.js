import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import AddNewTask from "@/components/AddNewTask";
import CurrentTasksList from "@/components/CurrentTasksList";
import { useState } from "react";

export default function Home() {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDue, setTaskDue] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [completedTaskList, setCompletedTaskList] = useState([]);
  return (
    <>
      <ResponsiveAppBar />
      <AddNewTask
        taskName={taskName}
        setTaskName={setTaskName}
        taskDescription={taskDescription}
        setTaskDescription={setTaskDescription}
        taskDue={taskDue}
        setTaskDue={setTaskDue}
        taskList={taskList}
        setTaskList={setTaskList}
        completedTaskList={completedTaskList}
        setCompletedTaskList={setCompletedTaskList}
      />
      <CurrentTasksList
        taskList={taskList}
        setTaskList={setTaskList}
        completedTaskList={completedTaskList}
        setCompletedTaskList={setCompletedTaskList}
      />
    </>
  );
}
