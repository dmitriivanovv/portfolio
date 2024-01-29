import React from "react";
import { NavLink, useLocation } from "react-router-dom";


import DarkModeBtn from "../DarkModeBtn/DarkModeBtn";
import "./navbar.css";

const Navbar = () => {

  const { pathname } = useLocation();

  const activeLink = 'nav-list__link nav-list__link--active'
  const regularLink = 'nav-list__link'

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <a href="./index.html" className="logo">
            <strong>Freelancer</strong> portfolio
          </a>

          <DarkModeBtn/>

          <ul className="nav-list">

            <li className="nav-list__item">
              <NavLink
                to='/portfolio'
                className={(pathname === '/portfolio') ? activeLink : regularLink}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink
                to='/portfolio/projects'
                className={(pathname === '/portfolio/projects') ? activeLink : regularLink}
              >
                Projects
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink
                to='/portfolio/contacts'
                className={(pathname === '/portfolio/contacts') ? activeLink : regularLink}
              >
                Contacts
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
