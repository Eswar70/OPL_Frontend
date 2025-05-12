import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import TaskFormPage from "./pages/TaskFormPage";
import TaskEditPage from "./pages/TaskEditPage";
import "./styles/global.css";

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/tasks" element={<PrivateRoute><Tasks /></PrivateRoute>} />
        <Route path="/task-form" element={<PrivateRoute><TaskFormPage /></PrivateRoute>} />
        <Route path="/task-edit/:id" element={<PrivateRoute><TaskEditPage /></PrivateRoute>} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;