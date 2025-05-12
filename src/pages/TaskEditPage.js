import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import TaskEdit from "../components/TaskEdit";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TaskEditPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
    <Header />
    <div>
      <TaskEdit token={user?.token} />
    </div>
    <Footer />
    </>
  );
};

export default TaskEditPage;