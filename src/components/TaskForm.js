import React, { useState } from "react";
import { createTask } from "../api/api";
import { useNavigate } from "react-router-dom";
import styles from "../styles/TaskForm.module.css";

const TaskForm = ({ token }) => {
  const [task, setTask] = useState({ title: "", description: "", dueDate: "", remarks: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask(task, token);
    navigate("/tasks");
  };

  return (
    <div className={styles.container}>
      <h2>Create a New Task</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" name="title" placeholder="Title" value={task.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={task.description} onChange={handleChange} />
        <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
        <input type="text" name="remarks" placeholder="Remarks" value={task.remarks} onChange={handleChange} />
        <button type="submit">Add Task</button>
      </form>
      <button onClick={() => navigate("/tasks")} className={styles.backButton}>Go to Task List</button>
    </div>
  );
};

export default TaskForm;