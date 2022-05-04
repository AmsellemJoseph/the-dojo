import React from "react";
import {useHistory} from 'react-router-dom'
import Avatar from "../../components/Avatar/Avatar";
import {useFirestore} from '../../hooks/useFirestore'
import {useAuthContext} from '../../hooks/useAuthContext'

import "./Project.css";

export default function ProjectSummary({ project }) {

  const {deleteDocument,response} = useFirestore("projects")
  const {user} = useAuthContext()
  const history = useHistory()

  const handleDelete = async(id)=>{
    console.log(id);
    await deleteDocument(id)
    if(!response.error) {
      history.push("/")
    }

  }

  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p>By {project.createdBy.displayName}</p>
        <p className="due-date">
          Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">{project.details}</p>
        <h4>Project assigned to:</h4>
        <div className="assigned-users">
          {project.assignedUsersList.map((user) => (
            <div key={user.photoURL}>
              <Avatar src={user.photoURL} />
            </div>
          ))}
        </div>
      </div>
        {user.uid===project.createdBy.id && <button onClick={()=>handleDelete(project.id)} className="btn">Mark as Complete</button>}
    </div>
  );
}
