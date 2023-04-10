import React from "react";
import "./styles.css";
import Nav from "./Nav";
import Search from "./Search";
import Repositories from "./Repositories";
import { getRepositories } from "../../services/api";

const userId = "";

export default function MainPage() {
  const loadData = async (query = "") => {
    const response = await getRepositories(userId);
  };

  const handleLogout = () => {
    console.log("logout");
  };

  const handleSearch = (query) => {
    console.log("query:", query);
  };

  const handleDeleteRepo = (repository) => {
    console.log("delete repo ", repository);
  };

  const handleNewRepo = (url) => {
    console.log("new repo");
  };

  return (
    <div id="main">
      <Nav onLogout={handleLogout} />

      <Search onSearch={handleSearch} />

      <Repositories
        repositories={[]}
        onDeleteRepo={handleDeleteRepo}
        onNewRepo={handleNewRepo}
      />
    </div>
  );
}
