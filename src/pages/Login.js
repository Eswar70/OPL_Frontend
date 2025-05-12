import React, { useState, useContext, useEffect } from "react";
import { loginUser } from "../api/api";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import styles from "../styles/Auth.module.css";

const Login = () => {
  const { user, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await loginUser({ email, password });
      login(data);
      navigate("/dashboard");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Invalid credentials");
    }
  };

  return (
    <div className={styles.container}>
      <ThemeToggle />
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        {loading? <p>Checking User Details...</p>: <p style={{color:"red",fontWeight:"bold"}}>{error}</p>}
      </form>
      <p>New user? <Link to="/">Sign Up</Link></p>
    </div>
  );
};

export default Login;