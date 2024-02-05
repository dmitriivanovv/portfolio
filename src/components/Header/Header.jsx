import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>
              Привет, меня зовут <em>Дмитрий</em>
            </strong>
            <br /> я- frontend разработчик
          </h1>
          <div className="header__text">
            <p> воплощающий идеи в креативные и интуитивно понятные веб-интерфейсы.</p>
          </div>
          <a href="https://github.com/dmitriivanovv/" target="_blank" rel="noreferrer" className="btn">
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
