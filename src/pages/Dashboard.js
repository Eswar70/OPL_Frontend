import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Styles from "../styles/Header.module.css";

const Dashboard = () => {

  return (
    <>
    <Header />
    <div className={Styles.dashboard}>
      <h1>Welcome</h1>
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