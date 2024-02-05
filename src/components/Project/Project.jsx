import React from "react";
import { NavLink } from "react-router-dom";
import "./project.css";



const Project = ({ img, title, index, }) => {
  return (
    <li className="project">

      <NavLink to={`/projects/project/${index}`}>
        <img
          src={img}
          alt="Project img"
          className="project__img"
        />
        <h3 className="project__title">
          {title}
        </h3>
      </NavLink>

    </li>
  );
};

export default Project;
