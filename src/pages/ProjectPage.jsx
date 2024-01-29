import React from 'react'
import { useParams } from 'react-router-dom'
import GitHubBtn from '../components/GitHubBtn/GitHubBtn'
import { projects } from '../helpers/projectsList'

const ProjectPage = () => {

  const { id } = useParams()
  const project = projects[id]

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.bgImg}
            alt=""
            className="project-details__cover" />

          <div className="project-details__desc">
            <p>{project.skils}</p>
          </div>

          {
          project.gitHubLink 
          && <GitHubBtn
            link={project.gitHubLink}
          >
            GitHub repo
          </GitHubBtn>
          }
        </div>
      </div>
    </main>
  )
}

export default ProjectPage