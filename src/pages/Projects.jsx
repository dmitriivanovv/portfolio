import React from "react";
import Project from "../components/Project/Project";
import useProjects from "../helpers/useProjects";
import { Skeleton } from "../components/Skeleton/Skeleton";

const Projects = () => {

  const {projects, isLoading} = useProjects()

  return (
    <main className="section">
      <div className="container">

        <h1 className="title-1">Проекты</h1>
        <ul className="projects">

          {isLoading 
          ? 
          new Array(6).fill('').map((_,i)=>{
            return <li key={i}><Skeleton/></li>
          })
          // <li> <Skeleton/> </li>
            
            
          :
          projects.map((project, index) => (
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
