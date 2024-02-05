import React from 'react'
import Header from '../components/Header/Header'

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">

          <ul className="content-list">
            <li className="content-list__item">
              <div className='wrapper-card'>
                <h2 className="title-2">Навыки:</h2>
                <p>Языки программирования: HTML, CSS, JavaScript, React JS, PHP (основы для "натяжки" макетов на CMS WordPress).<br />
                  Препроцессоры CSS: Sass, Less.<br />
                  Методологии: БЭМ.<br />
                  Верстка и дизайн: Опыт работы с макетами в Figma и Photoshop.<br />
                  Системы контроля версий: Git.<br />
                  Инструменты автоматизации задач: Gulp.</p>
  
              </div>
            </li>
            <li className="content-list__item">
              <div className='wrapper-card'>
                <h2 className="title-2">О себе:</h2>
                <p>
                  Я - Иванов Дмитрий, фронтенд-разработчик, влюбленный в создание удивительных и интуитивных пользовательских интерфейсов. В мире кода я нахожу радость творчества и разработки веб-приложений, которые делают жизнь людей проще и интереснее.
                </p>
                <p
                >Моя цель - постоянно учиться и совершенствоваться в мире веб-разработки, создавая проекты, которые не только отражают мои умения, но и приносят пользу обществу. Я готов внести свой вклад в инновационные проекты и присоединиться к команде, где могу расти и развиваться.
                </p>
              </div>
            </li>
          </ul>

        </div>
      </main>
    </>
  )
}

export default Home