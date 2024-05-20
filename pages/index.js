import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import AddNewTask from "@/components/AddNewTask";
import CurrentTasksList from "@/components/CurrentTasksList";
import { useState } from "react";

export default function Home() {
  const [taskInput, setTaskInput] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [completedTaskList, setCompletedTaskList] = useState([]);
  return (
    <>
      <ResponsiveAppBar />
      <AddNewTask
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        taskList={taskList}
        setTaskList={setTaskList}
        completedTaskList={completedTaskList}
        setCompletedTaskList={setCompletedTaskList}
      />
      <CurrentTasksList
        taskList={taskList}
        completedTaskList={completedTaskList}
        setCompletedTaskList={setCompletedTaskList}
      />
    </>
  );
}
