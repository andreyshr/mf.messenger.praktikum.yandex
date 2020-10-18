export const template = `
    <div class="container vh-100 overflow-hidden">
    <div class="messenger">
        <aside class="messenger__sidebar sidebar">
            <div class="sidebar__header">
                <a class="sidebar__profile-link" href="/profile.html">
                    Профиль
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9L5 5L1 1" stroke="#999999"/>
                    </svg>
                </a>
                <div class="sidebar__search">
                    <label>
                        <input type="text" placeholder="Поиск">
                    </label>
                </div>
            </div>
            <div class="sidebar__history-scrollable scrollable vh-100">
                <ul class="sidebar__list">
                    <li class="sidebar__list-item">
                        <a href="/messenger-chat.html" class="room" title="Андрей">
                            <div class="room__avatar avatar">
                                <div class="avatar__wrapper">
                                    <span class="avatar__stub">А</span>
                                </div>
                                <div class="room__new-messages">
                                    <span>2</span>
                                </div>
                            </div>
                            <div class="room__info">
                                <div class="room__info-row">
                                    <h3 class="room__title">Андрей</h3>
                                    <time class="room__last-message-time">10:49</time>
                                </div>
                                <div class="room__info-row">
                                    <p class="room__last-message">Изображение</p>
                                    <div class="room__new-messages">
                                        <span>2</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="sidebar__list-item">
                        <a href="/messenger-chat.html" class="room" title="Киноклуб">
                            <div class="room__avatar avatar">
                                <div class="avatar__wrapper">
                                    <img class="responsive-img" src="https://i.pinimg.com/736x/fb/45/ba/fb45baac1eed3c1b19d4aad23b054fa8.jpg" alt="#">
                                </div>
                            </div>
                            <div class="room__info">
                                <div class="room__info-row">
                                    <h3 class="room__title">Киноклуб</h3>
                                    <time class="room__last-message-time">12:00</time>
                                </div>
                                <div class="room__info-row">
                                    <p class="room__last-message">
                                        <span class="room__last-message-user">Вы:</span>
                                        стикер
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="sidebar__list-item">
                        <a href="/messenger-chat.html" class="room" title="Илья Смирнов">
                            <div class="room__avatar avatar">
                                <div class="avatar__wrapper">
                                    <span class="avatar__stub">ИС</span>
                                </div>
                                <div class="room__new-messages">
                                    <span>4</span>
                                </div>
                            </div>
                            <div class="room__info">
                                <div class="room__info-row">
                                    <h3 class="room__title">Илья Смирнов</h3>
                                    <time class="room__last-message-time">12:00</time>
                                </div>
                                <div class="room__info-row">
                                    <p class="room__last-message">
                                        Друзья, у меня для вас особенный выпуск новостей!...

                                    <div class="room__new-messages">
                                        <span>4</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="sidebar__list-item">
                        <a href="/messenger-chat.html" class="room" title="Вадим">
                            <div class="room__avatar avatar">
                                <div class="avatar__wrapper">
                                    <img class="responsive-img" src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="#">
                                </div>
                            </div>
                            <div class="room__info">
                                <div class="room__info-row">
                                    <h3 class="room__title">Вадим</h3>
                                    <time class="room__last-message-time">Пт</time>
                                </div>
                                <div class="room__info-row">
                                    <p class="room__last-message">
                                        <span class="room__last-message-user">Вы:</span>
                                        Шикарные камеры &#128514;
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="sidebar__list-item">
                        <a href="/messenger-chat.html" class="room" title="тет-а-теты">
                            <div class="room__avatar avatar">
                                <div class="avatar__wrapper">
                                    <span class="avatar__stub">Т</span>
                                </div>
                            </div>
                            <div class="room__info">
                                <div class="room__info-row">
                                    <h3 class="room__title">тет-а-теты</h3>
                                    <time class="room__last-message-time">Ср</time>
                                </div>
                                <div class="room__info-row">
                                    <p class="room__last-message">
                                        И Human Interface Guidelines и Material Design рекомендуют...
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="sidebar__list-item">
                        <a href="/messenger-chat.html" class="room" title="1, 2, 3">
                            <div class="room__avatar avatar">
                                <div class="avatar__wrapper">
                                    <span class="avatar__stub">12</span>
                                </div>
                            </div>
                            <div class="room__info">
                                <div class="room__info-row">
                                    <h3 class="room__title">1, 2, 3</h3>
                                    <time class="room__last-message-time">Пн</time>
                                </div>
                                <div class="room__info-row">
                                    <p class="room__last-message">
                                        Миллионы россиян ежедневно проводят десятки часов свое...
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="sidebar__list-item">
                        <a href="/messenger-chat.html" class="room" title="Design Destroyer">
                            <div class="room__avatar avatar">
                                <div class="avatar__wrapper">
                                    <span class="avatar__stub">DD</span>
                                </div>
                            </div>
                            <div class="room__info">
                                <div class="room__info-row">
                                    <h3 class="room__title">Design Destroyer</h3>
                                    <time class="room__last-message-time">Пн</time>
                                </div>
                                <div class="room__info-row">
                                    <p class="room__last-message">
                                        В 2008 году художник Jon Rafman начал собирать...
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="sidebar__list-item">
                        <a href="/messenger-chat.html" class="room" title="Day.">
                            <div class="room__avatar avatar">
                                <div class="avatar__wrapper">
                                    <span class="avatar__stub">D</span>
                                </div>
                            </div>
                            <div class="room__info">
                                <div class="room__info-row">
                                    <h3 class="room__title">Day.</h3>
                                    <time class="room__last-message-time">1 Мая 2020</time>
                                </div>
                                <div class="room__info-row">
                                    <p class="room__last-message">
                                        Так увлёкся работой по курсу, что совсем забыл его анонсир...
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="sidebar__list-item">
                        <a href="/messenger-chat.html" class="room" title="Day.">
                            <div class="room__avatar avatar">
                                <div class="avatar__wrapper">
                                    <span class="avatar__stub">D</span>
                                </div>
                            </div>
                            <div class="room__info">
                                <div class="room__info-row">
                                    <h3 class="room__title">Day.</h3>
                                    <time class="room__last-message-time">1 Мая 2020</time>
                                </div>
                                <div class="room__info-row">
                                    <p class="room__last-message">
                                        Так увлёкся работой по курсу, что совсем забыл его анонсир...
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="sidebar__list-item">
                        <a href="/messenger-chat.html" class="room" title="Day.">
                            <div class="room__avatar avatar">
                                <div class="avatar__wrapper">
                                    <span class="avatar__stub">D</span>
                                </div>
                            </div>
                            <div class="room__info">
                                <div class="room__info-row">
                                    <h3 class="room__title">Day.</h3>
                                    <time class="room__last-message-time">1 Мая 2020</time>
                                </div>
                                <div class="room__info-row">
                                    <p class="room__last-message">
                                        Так увлёкся работой по курсу, что совсем забыл его анонсир...
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="sidebar__list-item">
                        <a href="/messenger-chat.html" class="room" title="Day.">
                            <div class="room__avatar avatar">
                                <div class="avatar__wrapper">
                                    <span class="avatar__stub">D</span>
                                </div>
                            </div>
                            <div class="room__info">
                                <div class="room__info-row">
                                    <h3 class="room__title">Day.</h3>
                                    <time class="room__last-message-time">1 Мая 2020</time>
                                </div>
                                <div class="room__info-row">
                                    <p class="room__last-message">
                                        Так увлёкся работой по курсу, что совсем забыл его анонсир...
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="sidebar__list-item">
                        <a href="/messenger-chat.html" class="room" title="Day.">
                            <div class="room__avatar avatar">
                                <div class="avatar__wrapper">
                                    <span class="avatar__stub">D</span>
                                </div>
                            </div>
                            <div class="room__info">
                                <div class="room__info-row">
                                    <h3 class="room__title">Day.</h3>
                                    <time class="room__last-message-time">1 Мая 2020</time>
                                </div>
                                <div class="room__info-row">
                                    <p class="room__last-message">
                                        Так увлёкся работой по курсу, что совсем забыл его анонсир...
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="sidebar__list-item">
                        <a href="/messenger-chat.html" class="room" title="Day.">
                            <div class="room__avatar avatar">
                                <div class="avatar__wrapper">
                                    <span class="avatar__stub">D</span>
                                </div>
                            </div>
                            <div class="room__info">
                                <div class="room__info-row">
                                    <h3 class="room__title">Day.</h3>
                                    <time class="room__last-message-time">1 Мая 2020</time>
                                </div>
                                <div class="room__info-row">
                                    <p class="room__last-message">
                                        Так увлёкся работой по курсу, что совсем забыл его анонсир...
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        <main class="messenger__workspace workspace">
            <div class="workspace__empty w-100 h-100">
                <span>Выберите чат чтобы отправить сообщение</span>
            </div>
        </main>
    </div>
</div>
`;
