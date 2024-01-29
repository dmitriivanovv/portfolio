import React, { useEffect } from 'react';
import detectDarkMode from '../../utils/detectDarkMode';
import { useLocalStorage } from '../../utils/useLocalStorage';
import "./darkModeBtn.css";
import moon from "./moon.svg";
import sun from "./sun.svg";

const DarkModeBtn = () => {

  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())

  useEffect(() => {

    if (darkMode === 'dark') {
      document.body.classList.add('dark');

    } else {
      document.body.classList.remove('dark');

    }

  }, [darkMode])

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        const newColorSheme = event.matches ? 'dark' : 'light';
        setDarkMode(newColorSheme)
      })
  }, [setDarkMode])

  const toggleDatkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light'
    })
  }

  const darkBtnClass = darkMode === 'dark'
    ?
    'dark-mode-btn dark-mode-btn--active'
    :
    "dark-mode-btn";

  return (
    <button
      className={darkBtnClass}
      onClick={() => toggleDatkMode()}
    >
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  )
}

export default DarkModeBtn