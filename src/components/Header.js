import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import styles from "../styles/Header.module.css";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>Dashboard</Link>
      {user ? <button onClick={logout} className={styles.logout}>Logout</button> : <Link to="/login">Login</Link>}
    </header>
  );
};

export default Header;