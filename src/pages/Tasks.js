import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import TaskList from "../components/TaskList";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Tasks = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  return (
    <>
    <Header/>
    <div>
      <h2 style={{color:"rgb(226, 183, 103)"}}>Task Management</h2>
      <TaskList token={user?.token} tasks={tasks} setTasks={setTasks} />
    </div>
    <Footer/>
    </>
  );
};

export default Tasks;