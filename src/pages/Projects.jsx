import React from "react";
import Project from "../components/Project/Project";
import { projects } from "../helpers/projectsList";

const Projects = () => {

  return (
    <main className="section">
      <div className="container">

        <h2 className="title-1">Projects</h2>
        <ul className="projects">

          {projects.map((project, index) => (
            <Project
              index={index}
              img={project.img}
              title={project.title}
              key={project.id}
            />
          ))}
        </ul>

      </div>
    </main>
  );
};

export default Projects;
