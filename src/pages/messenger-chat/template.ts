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
                        <a href="#" class="room" title="Андрей">
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
                        <a href="#" class="room" title="Киноклуб">
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
                        <a href="#" class="room" title="Илья Смирнов">
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
                        <a href="#" class="room room--active" title="Вадим">
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
                        <a href="#" class="room" title="тет-а-теты">
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
                        <a href="#" class="room" title="1, 2, 3">
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
                        <a href="#" class="room" title="Design Destroyer">
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
                        <a href="#" class="room" title="Day.">
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
                        <a href="#" class="room" title="Day.">
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
                        <a href="#" class="room" title="Day.">
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
                        <a href="#" class="room" title="Day.">
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
                        <a href="#" class="room" title="Day.">
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
                        <a href="#" class="room" title="Day.">
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
            <header class="workspace__header">
                <div class="room room--header">
                    <div class="room__avatar avatar avatar--sm">
                        <div class="avatar__wrapper">
                            <img class="responsive-img" src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="#">
                        </div>
                    </div>
                    <div class="room__info">
                        <div class="room__info-row">
                            <h1 class="room__title">Вадим</h1>
                        </div>
                        <div class="room__info-row">
                            <p class="room__last-message">
                                Был 5 минут назад
                            </p>
                        </div>
                    </div>
                    <div class="p-relative ml-auto">
                        <button class="button button--round button--transparent button--opener">
                            <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="1.5" cy="2" r="1.5" fill="#3369F3"/>
                                <circle cx="1.5" cy="8" r="1.5" fill="#3369F3"/>
                                <circle cx="1.5" cy="14" r="1.5" fill="#3369F3"/>
                            </svg>
                        </button>
                        <div class="menu menu--bottom menu--right">
                            <ul class="menu__list">
                                <li class="menu__item">
                                    <button type="button" class="menu__button">
                                        <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="22" height="1.5" transform="matrix(1 0 0 -1 0 19)" fill="#3369F3"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2602 0L19.0001 2.73982L16.9452 4.79468L14.2054 2.05487L16.2602 0ZM13.5202 2.73976L16.26 5.47958L6.7394 15.0002H4V12.26L13.5202 2.73976Z" fill="#3369F3"/>
                                        </svg>
                                        <span>Редактировать</span>
                                    </button>
                                </li>
                                <li class="menu__item">
                                    <button type="button" class="menu__button js-open-dialog-button" data-dialog-id="remove-chat">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="11" cy="11" r="10.25" stroke="#3369F3" stroke-width="1.5"/>
                                            <line x1="7.1109" y1="7.11103" x2="14.8891" y2="14.8892" stroke="#3369F3" stroke-width="1.5"/>
                                            <line x1="7.11078" y1="14.8891" x2="14.889" y2="7.11093" stroke="#3369F3" stroke-width="1.5"/>
                                        </svg>
                                        <span>Удалить</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="workspace__date">19 июня</div>
            </header>
            <div class="workspace__history-scrollable scrollable vh-100">
                <div class="workspace__history">
                    <div class="message message--inbox">
                        <div class="message__body">
                            <p class="message__text">
                                Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад
                                адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову
                                говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с
                                пленкой.
                            </p>
                            <p class="message__text">
                                Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их
                                было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.
                            </p>
                            <div class="message__time">
                                <span>11:56</span>
                            </div>
                        </div>
                    </div>
                    <div class="message message--image message--inbox">
                        <div class="message__body">
                            <img class="responsive-img" src="https://images.unsplash.com/photo-1496680154270-b79e35576fe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1310&q=80" alt="#">
                            <div class="message__time">
                                <span>11:56</span>
                            </div>
                        </div>
                    </div>
                    <div class="message message--image message--inbox">
                        <div class="message__body">
                            <img class="responsive-img" src="https://images.unsplash.com/photo-1495707902641-75cac588d2e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="#">
                            <div class="message__time">
                                <span>11:56</span>
                            </div>
                        </div>
                    </div>
                    <div class="message message--image message--inbox">
                        <div class="message__body">
                            <img class="responsive-img"
                                 src="https://images.unsplash.com/photo-1536627217140-899b0bc9d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80" alt="#">
                            <div class="message__time">
                                <span>11:56</span>
                            </div>
                        </div>
                    </div>
                    <div class="message message--read message--emoji message--outbox">
                        <div class="message__body">
                            <p class="message__text">
                                &#128513;
                            </p>
                            <div class="message__time">
                                <span>11:56</span>
                            </div>
                        </div>
                    </div>
                    <div class="message message--read message--outbox">
                        <div class="message__body">
                            <p class="message__text">
                                Круто
                            </p>
                            <div class="message__time">
                                <span>11:56</span>
                            </div>
                        </div>
                    </div>
                    <div class="message message--delivered message--outbox">
                        <div class="message__body">
                            <p class="message__text">
                                Шикарные камеры &#128514;
                            </p>
                            <div class="message__time">
                                <span>11:56</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="workspace__user-panel">
                <div class="p-relative">
                    <button type="button" class="button button--icon button--round button--transparent button--opener">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#3369F3" viewBox="0 0 1000 1000">
                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                                <path d="M4530.1,5007.9C3375.4,4889,2341.7,4400,1530.4,3588.6C751.6,2809.9,287.5,1860.5,124.4,723.1c-32.6-226.3-32.6-982,0-1208.3c163-1137.4,629.1-2086.8,1405.9-2865.5c778.7-776.8,1728.1-1242.9,2865.5-1405.9c226.3-32.6,982-32.6,1208.3,0c1147,163,2100.2,634.9,2880.8,1425.1C9259.9-2549,9714.4-1616.8,9875.5-485.2c32.6,226.3,32.6,982,0,1208.3c-163,1137.4-629.1,2086.8-1405.9,2865.5c-759.5,759.5-1687.8,1223.7-2779.2,1392.5C5448.8,5017.5,4775.6,5034.8,4530.1,5007.9z M5613.7,4538c974.3-141.9,1854.7-581.1,2539.4-1265.9c686.6-686.6,1114.4-1545.9,1269.7-2549c21.1-145.8,30.7-331.8,30.7-604.2c0-725-141.9-1340.7-456.5-1973.6c-228.3-458.4-466.1-794-828.6-1160.4c-694.3-703.9-1545.9-1131.6-2564.4-1288.9c-289.6-44.1-918.7-44.1-1208.3,0c-1003.1,155.4-1862.4,583.1-2549,1269.7c-688.6,686.6-1114.4,1545.9-1269.7,2549C538.7-226.3,533,393.3,567.5,656c203.3,1517.1,1106.7,2790.7,2453.1,3458.1c533.2,264.7,1097.1,416.2,1720.4,462.2C4915.6,4589.8,5408.5,4566.8,5613.7,4538z"/>
                                <path d="M3241.2,1875.9c-456.5-149.6-619.5-728.8-303-1079.8c270.4-303,726.9-303,997.4,0c122.8,136.2,168.8,270.4,159.2,473.7c-7.7,126.6-19.2,184.1-57.5,258.9c-67.1,128.5-186,245.5-316.5,308.8C3594.1,1900.8,3369.7,1918.1,3241.2,1875.9z"/>
                                <path d="M6371.4,1877.8c-182.2-61.4-320.3-178.4-404.7-343.3c-74.8-143.9-86.3-381.7-26.9-537c55.6-149.6,184.1-287.7,339.5-364.4c111.2-53.7,143.9-61.4,282-61.4c126.6,0,174.5,9.6,264.7,49.9c143.8,67.1,270.4,186,335.7,318.4c72.9,151.5,84.4,372.1,23,531.3c-53.7,143.9-195.6,297.3-339.5,368.3C6720.4,1900.8,6496,1918.1,6371.4,1877.8z"/>
                                <path d="M1965.7-820.8c-65.2-49.9-99.7-138.1-84.4-216.7c32.6-170.7,454.6-680.9,788.3-953.2c535.1-435.4,1154.6-694.3,1852.8-774.9c1053-122.7,2050.3,153.4,2807.9,774.9c374,308.8,796,832.4,796,991.6c0,61.4-47.9,149.6-99.7,186c-55.6,38.4-186.1,40.3-239.8,1.9c-24.9-17.3-97.8-109.3-163-207.1c-67.1-95.9-207.1-264.7-312.6-374C6695.5-2033,5941.7-2343.7,5000-2343.7c-780.6,0-1423.2,211-1985.1,650.2c-212.9,166.9-494.8,466.1-638.7,675.1c-65.2,97.8-138.1,189.9-163,207.1C2153.7-769,2023.3-774.8,1965.7-820.8z"/>
                            </g>
                        </svg>
                    </button>
                    <div class="menu menu--emoji menu--top menu--left">
                        <ul class="menu__list menu__list--emoji">
                            <li class="menu__item">
                                <button type="button" class="menu__button">
                                    &#128513;
                                </button>
                            </li>
                            <li class="menu__item">
                                <button type="button" class="menu__button">
                                    &#128514;
                                </button>
                            </li>
                            <li class="menu__item">
                                <button type="button" class="menu__button">
                                    &#128515;
                                </button>
                            </li>
                            <li class="menu__item">
                                <button type="button" class="menu__button">
                                    &#128516;
                                </button>
                            </li>
                            <li class="menu__item">
                                <button type="button" class="menu__button">
                                    &#128517;
                                </button>
                            </li>
                            <li class="menu__item">
                                <button type="button" class="menu__button">
                                    &#128518;
                                </button>
                            </li>
                            <li class="menu__item">
                                <button type="button" class="menu__button">
                                    &#128518;
                                </button>
                            </li>
                            <li class="menu__item">
                                <button type="button" class="menu__button">
                                    &#128518;
                                </button>
                            </li>
                            <li class="menu__item">
                                <button type="button" class="menu__button">
                                    &#128518;
                                </button>
                            </li>
                            <li class="menu__item">
                                <button type="button" class="menu__button">
                                    &#128518;
                                </button>
                            </li>
                            <li class="menu__item">
                                <button type="button" class="menu__button">
                                    &#128518;
                                </button>
                            </li>
                            <li class="menu__item">
                                <button type="button" class="menu__button">
                                    &#128518;
                                </button>
                            </li>
                            <li class="menu__item">
                                <button type="button" class="menu__button">
                                    &#128518;
                                </button>
                            </li>
                            <li class="menu__item">
                                <button type="button" class="menu__button">
                                    &#128518;
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="p-relative">
                    <button type="button" class="button button--icon button--round button--transparent button--opener">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M7.18661 13.5L14.7628 5.92389L15.7056 6.8667L8.12942 14.4428L7.18661 13.5Z"
                                  fill="#3369F3"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M9.70077 16.0142L17.2769 8.43805L18.2197 9.38086L10.6436 16.957L9.70077 16.0142Z" fill="#3369F3"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M15.0435 21.3565L22.6197 13.7803L23.5625 14.7231L15.9864 22.2993L15.0435 21.3565Z" fill="#3369F3"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M17.5572 23.8706L25.1334 16.2945L26.0762 17.2373L18.5 24.8134L17.5572 23.8706Z" fill="#3369F3"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M17.5574 23.8709C14.9423 26.486 10.7118 26.4954 8.10829 23.8919C5.50479 21.2884 5.51421 17.0579 8.12933 14.4428L7.18652 13.5C4.04838 16.6381 4.03708 21.7148 7.16127 24.839C10.2855 27.9632 15.3621 27.9518 18.5002 24.8137L17.5574 23.8709Z"
                                  fill="#3369F3"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M22.6195 13.7806L23.5623 14.7234C26.003 12.2826 26.0118 8.3341 23.5819 5.90417C21.152 3.47424 17.2035 3.48304 14.7627 5.92381L15.7055 6.86662C17.6233 4.94887 20.7257 4.94196 22.6349 6.85119C24.5441 8.76042 24.5372 11.8628 22.6195 13.7806Z"
                                  fill="#3369F3"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M9.70068 16.0146C7.95727 17.7581 7.95099 20.5784 9.68665 22.3141C11.4223 24.0497 14.2427 24.0435 15.9861 22.3L15.0433 21.3572C13.8229 22.5776 11.8486 22.582 10.6337 21.3671C9.41871 20.1521 9.4231 18.1778 10.6435 16.9575L9.70068 16.0146Z"
                                  fill="#3369F3"/>
                        </svg>
                    </button>
                    <div class="menu menu--top menu--left">
                        <ul class="menu__list">
                            <li class="menu__item">
                                <button type="button" class="menu__button">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M4 1.5H18C19.3807 1.5 20.5 2.61926 20.5 4V14L14.5194 12.4052C13.5108 12.1362 12.4714 12 11.4275 12H10.5725C9.52863 12 8.4892 12.1362 7.48056 12.4052L1.5 14V4C1.5 2.61926 2.61929 1.5 4 1.5ZM0 4C0 1.79083 1.79086 0 4 0H18C20.2091 0 22 1.79083 22 4V18C22 20.2092 20.2091 22 18 22H4C1.79086 22 0 20.2092 0 18V4ZM8 6C8 7.10455 7.10458 8 6 8C4.89542 8 4 7.10455 4 6C4 4.89545 4.89542 4 6 4C7.10458 4 8 4.89545 8 6Z"
                                              fill="#3369F3"/>
                                    </svg>
                                    <span>Фото или Видео</span>
                                </button>
                            </li>
                            <li class="menu__item">
                                <button type="button" class="menu__button">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M4 1.5H18C19.3807 1.5 20.5 2.61926 20.5 4V12H16C13.7909 12 12 13.7908 12 16V20.5H4C2.61929 20.5 1.5 19.3807 1.5 18V4C1.5 2.61926 2.61929 1.5 4 1.5ZM12 22H4C1.79086 22 0 20.2092 0 18V4C0 1.79083 1.79086 0 4 0H18C20.2091 0 22 1.79083 22 4V12V18C22 20.2092 20.2091 22 18 22H12Z"
                                              fill="#3369F3"/>
                                    </svg>
                                    <span>Файл</span>
                                </button>
                            </li>
                            <li class="menu__item">
                                <button type="button" class="menu__button">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M20.5 11C20.5 16.2467 16.2467 20.5 11 20.5C5.7533 20.5 1.5 16.2467 1.5 11C1.5 5.7533 5.7533 1.5 11 1.5C16.2467 1.5 20.5 5.7533 20.5 11ZM22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM11 14C12.6569 14 14 12.6569 14 11C14 9.34314 12.6569 8 11 8C9.34314 8 8 9.34314 8 11C8 12.6569 9.34314 14 11 14Z"
                                              fill="#3369F3"/>
                                    </svg>
                                    <span>Локация</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <form class="workspace__user-form" method="post" action="#">
                    <label>
                        <input type="text" name="message" placeholder="Сообщение">
                    </label>
                    <button type="submit" class="button button--icon button--round button--blue">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="14" cy="14" r="14" fill="#3369F3"/>
                            <rect x="8" y="13.2002" width="11" height="1.6" fill="white"/>
                            <path d="M15 9L19 14L15 19" stroke="white" stroke-width="1.6"/>
                        </svg>
                    </button>
                </form>
            </div>
        </main>
        <div class="overlay d-none"></div>
        <div class="dialog d-none" id="remove-chat">
            <div class="dialog__body">
                <p class="dialog__title">Вы хотите удалить чат?</p>
                <div class="dialog__content">
                    <button type="button" class="button button--md button--red">Удалить</button>
                    <button type="button" class="button button--md button--gray js-close-dialog-button">Отменить</button>
                </div>
            </div>
        </div>
    </div>
</div>
`;
