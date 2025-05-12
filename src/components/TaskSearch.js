import React, { useState } from "react";
import { searchTasks } from "../api/api";
import styles from "../styles/TaskSearch.module.css";

const TaskSearch = ({ token, setTasks }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const { data } = await searchTasks(query, token);
    setTasks(data);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" id="searchTitle" name="searchTitle" placeholder="Search by Title" value={query} onChange={(e) => setQuery(e.target.value )} />
        <button type="submit" onClick={handleSearch}>Search</button>
      </form>
    </div> 
  );
};

export default TaskSearch;