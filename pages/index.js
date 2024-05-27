import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import AddNewTask from "@/components/AddNewTask";
import CurrentTasksList from "@/components/CurrentTasksList";
import { useState } from "react";
import { Container, Grid } from "@mui/material";

export default function Home() {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDue, setTaskDue] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [completedTaskList, setCompletedTaskList] = useState([]);
  return (
    <>
      <ResponsiveAppBar />
      <Container disableGutters sx={{ mt: 5, mb: 5, ml: 10, px: 0 }}>
        <Grid container spacing={20} sx={{ justifyContent: "center", px: 5 }}>
          <Grid item xs={5}>
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
          </Grid>
          <Grid item xs={7} sx={{ mt: 10 }}>
            <CurrentTasksList
              taskList={taskList}
              setTaskList={setTaskList}
              completedTaskList={completedTaskList}
              setCompletedTaskList={setCompletedTaskList}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
