import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateTask, fetchTasks } from "../api/api";
import styles from "../styles/TaskEdit.module.css";

const TaskEdit = ({ token }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({ title: "", description: "", dueDate: "", status: "", remarks: "" });

  useEffect(() => {
    const loadTask = async () => {
      const { data } = await fetchTasks(token);
      const selectedTask = data.find(task => task._id === id);
      if (selectedTask) setTask(selectedTask);
    };
    loadTask();
  }, [id, token]);

  const handleChange = (e) => setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTask(id, task, token);
    alert("Task updated successfully!");
    navigate("/tasks");
  };

  return (
    <div className={styles.container}>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" name="title" value={task.title} onChange={handleChange} required />
        <textarea name="description" value={task.description} onChange={handleChange} />
        <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
        <select name="status" value={task.status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <input type="text" name="remarks" value={task.remarks} onChange={handleChange} />
        <button type="submit">Update Task</button>
      </form>
      <button onClick={() => navigate("/tasks")} className={styles.backButton}>Go to Task List</button>
    </div>
  );
};

export default TaskEdit;