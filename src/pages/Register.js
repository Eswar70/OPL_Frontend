import React, { useState, useContext, useEffect } from "react";
import { registerUser } from "../api/api";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import Styles from "../styles/Auth.module.css";

const Register = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user, navigate]);

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!name || !email || !password) {
    setError("All fields are mandatory");
    return;
  }
  setLoading(true);
  try {
    await registerUser({ name, email, password });
    alert("Registration successful! Please login.");
    navigate("/login");
  } catch (error) {
    console.error("Registration failed:", error);
    setError("Registration failed. Try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className={Styles.register}>
      <ThemeToggle />
      <h2 style={{color:"rgb(226, 183, 103)"}}>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
        {loading && <p>Uploading User Details...</p>}
      </form>
      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Register;