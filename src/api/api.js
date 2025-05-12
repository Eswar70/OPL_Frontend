import axios from "axios";

const API = axios.create({
  baseURL: "https://opl-backend-ea1m.onrender.com/api",
});

export const registerUser = (data) => API.post("/auth/register", data);
export const loginUser = (data) => API.post("/auth/login", data);
export const fetchTasks = (token) => API.get("/tasks", { headers: { Authorization: `Bearer ${token}` } });
export const searchTasks = (title, token) => API.get(`/tasks/search?title=${encodeURIComponent(title)}`, { headers: { Authorization: `Bearer ${token}` } });
export const createTask = (task, token) => API.post("/tasks", task, { headers: { Authorization: `Bearer ${token}` } });
export const updateTask = (id, task, token) => API.put(`/tasks/${id}`, task, { headers: { Authorization: `Bearer ${token}` } });
export const deleteTask = (id, token) => API.delete(`/tasks/${id}`, { headers: { Authorization: `Bearer ${token}` } });