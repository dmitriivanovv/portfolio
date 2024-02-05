import React from 'react';
import { useParams } from 'react-router-dom';
import GitHubBtn from '../components/GitHubBtn/GitHubBtn';
// import { projects } from '../helpers/projectsList'
import useProjects from '../helpers/useProjects';
import { Skeleton } from '../components/Skeleton/Skeleton';

const ProjectPage = () => {

  const {projects, isLoading} = useProjects()
  const { id } = useParams();
  const project = projects[id];
  

  if (!project) {
    return <p></p>;
  } else if (isLoading) {
    return (<Skeleton/>)
  }

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

            <ul className='project-details__skils wrapper-card'>
              {project.skils.map((skil, i) =>
                <li key={i}>
                  {skil}
                </li>
              )}
            </ul>

            <p className='project-details_text wrapper-card'>{project.description}</p>

          </div>

          <div className='project-details_btns'>
            {project.gitHubRepoLink
              &&
              <GitHubBtn
                link={project.gitHubRepoLink}
              >
                GitHub repo
              </GitHubBtn>}
            {project.gitHubPageLink
              &&
              <GitHubBtn
                link={project.gitHubPageLink}
              >
                GitHub pages
              </GitHubBtn>}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProjectPage