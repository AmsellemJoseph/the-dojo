import React, { useState, useEffect } from "react";
import ProjectList from "../../components/ProjectList/ProjectList";
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";

import "./Dashboard.css";
import ProjectFilter from "./ProjectFilter";

export default function Dashboard() {
  const [currentFilter, setCurrentFilter] = useState("all");
  const { documents, error } = useCollection("projects");
  const { user } = useAuthContext();

  const changeFilter = (filter) => {
    setCurrentFilter(filter);
  };

  const projects =
    documents &&
    documents.filter((document) => {
      switch (currentFilter) {
        case "all": {
          return true;
        }
        case "mine": {
          let assignedToMe = false;
          document.assignedUsersList.forEach((u) => {
            if (u.id === user.uid) {
              assignedToMe = true;
            }
          });
          return assignedToMe;
        }
        case "development":
        case "design":
        case "sales":
        case "marketing":
          return document.category === currentFilter;
        default: {
          return true;
        }
      }
    });

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {documents && (
        <ProjectFilter
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
      )}
      {documents && <ProjectList projects={projects} />}
    </div>
  );
}
