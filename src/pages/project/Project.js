import React from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";

import "./Project.css";
import ProjectComments from "./ProjectComments";
import ProjectSummary from "./ProjectSummary";

export default function Project() {
  const { id } = useParams();
  console.log(id);
  const { document, error } = useDocument("projects", id);
  console.log(document);

  if (error) {
    return <div className="error">{error}</div>;
  }
  if (!document) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="project-details">
      <ProjectSummary project={document} />
      <ProjectComments project={document} />
    </div>
  );
}
