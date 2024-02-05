import React from 'react'
import "./footer.css"

import telegram from "../../img/icons/telegram.svg"
import gitHub from "../../img/icons/gitHub.svg"
import hh from "../../img/icons/headHunter.svg"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://github.com/dmitriivanovv" target='_blank' rel="noreferrer">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://hh.ru/resume/89dfad30ff0c53889e0039ed1f68486b307941" target='_blank' rel="noreferrer">
                <img src={hh} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://t.me/dimitrihios" target='_blank' rel="noreferrer">
                <img src={telegram} alt="Link" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer