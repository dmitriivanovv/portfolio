import React from 'react'
import gitHubBlack from "../../img/icons/gitHub-black.svg"
import "./gitHubBtn.css"

const GitHubBtn = ({ children, link }) => {
  return (
    <a
      href={link}
      target='_blank'
      rel="noreferrer"
      className="btn-outline">
      <img
        src={gitHubBlack}
        alt="" />
      {children}
    </a>
  )
}

export default GitHubBtn