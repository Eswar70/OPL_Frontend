import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Styles from "../styles/Header.module.css";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
    <Header />
    <div className={Styles.dashboard}>
      <h1>Welcome, {user?.name}!</h1>
      <p>This is your dashboard. Add Your Task By clicking the below Button</p>
      <Link to="/task-form">
        <button>Go to Task Form</button>
      </Link>
    </div>
    <Footer />
    </>
  );
};

export default Dashboard;