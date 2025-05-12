import React, { useEffect, useState } from "react";
import { fetchTasks, deleteTask } from "../api/api";
import { useNavigate } from "react-router-dom";
import TaskSearch from "./TaskSearch";
import styles from "../styles/TaskForm.module.css";

const TaskList = ({ token }) => {
  const [tasks, setTasks] = useState([]);
  const [loading , setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadTasks = async () => {
      const { data } = await fetchTasks(token);
      setTasks(data);
      setLoading(false);
    };
    loadTasks();
  }, [token]);

  const handleDelete = async (id) => {
    await deleteTask(id, token);
    setTasks(tasks.filter(task => task._id !== id));
    alert("Task deleted successfully!");
  };

  return (
    <div className={styles.taskListContainer}>
      <TaskSearch token={token} setTasks={setTasks} />
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <div className={styles.noTasks}>
          {loading ? <p>Getting Tasks, Please wait...</p> : <p>No tasks available</p>}
          <div className={styles.addTaskButton}>
            <button onClick={() => navigate("/task-form")}>Add Task</button>
          </div>
        </div>
      ) : (
        <div className={styles.tableWrapper}>
          <table className={styles.taskTable}>
            <thead>
              <tr>
                <th>S.No</th><th>Title</th><th>Description</th><th>Due Date</th><th>Status</th>
                <th>Remarks</th><th>Created Date</th><th>Updated Date</th><th>Created By</th><th>Last Updated By</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={task._id}>
                  <td>{index + 1}</td>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{new Date(task.dueDate).toLocaleDateString("en-GB")}</td>
                  <td>{task.status}</td>
                  <td>{task.remarks}</td>
                  <td>{new Date(task.createdOn).toLocaleDateString("en-GB")}</td>
                  <td>{new Date(task.lastUpdatedOn).toLocaleDateString("en-GB")}</td>
                  <td>{task.createdBy?.name}</td>
                  <td>{task.lastUpdatedBy?.name}</td>
                  <td>
                    <div>
                      <button onClick={() => navigate(`/task-edit/${task._id}`)}>Edit</button>
                      <button onClick={() => handleDelete(task._id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.addTaskButton}>
            <button onClick={() => navigate("/task-form")}>Add More</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;