import React from 'react'

const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Контакты</h1>

                <ul className="content-list wrapper-card">
                    <li className="content-list__item">
                        <h2 className="title-2">Местоположение:</h2>
                        <p>Алматы, Казахстан</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram</h2>
                        <p><a href="https://t.me/dimitrihios" target='_blank' rel="noreferrer">@dimitrihios</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:ivanoffdimo@yandex.ru">ivanoffdimo@yandex.ru</a></p>
                    </li>
                </ul>

            </div>
        </main>
    )
}

export default Contacts