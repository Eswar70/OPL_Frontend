import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import TaskForm from "../components/TaskForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/TaskForm.module.css";

const TaskFormPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Header />
      <div className={styles.TaskFormPage}>
        <TaskForm token={user?.token} />
      </div>
      <Footer />
    </>  
  );
};

export default TaskFormPage;