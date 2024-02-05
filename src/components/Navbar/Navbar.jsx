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
          {/* <a href="./index.html" className="logo">
            <strong>Freelancer</strong> portfolio
          </a> */}

          <DarkModeBtn />

          <ul className="nav-list">

            <li className="nav-list__item">
              <NavLink
                to='/'
                className={(pathname === '/') ? activeLink : regularLink}
              >
                Главная
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink
                to='/projects'
                className={(pathname === '/projects') ? activeLink : regularLink}
              >
                Проекты
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink
                to='/contacts'
                className={(pathname === '/contacts') ? activeLink : regularLink}
              >
                Контакты
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
