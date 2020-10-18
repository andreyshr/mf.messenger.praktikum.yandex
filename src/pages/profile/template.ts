export const template = `
    <main class="container overflow-hidden">
    <div class="profile h-100">
        <a class="profile__back-link" href="/messenger.html">
            <div class="button button--icon button--blue button--round">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="14" fill="#3369F3"/>
                    <rect x="8" y="13.2002" width="11" height="1.6" fill="white"/>
                    <path d="M15 9L19 14L15 19" stroke="white" stroke-width="1.6"/>
                </svg>
            </div>
        </a>
        <div class="profile__wrapper">
            {{{ form }}}
        </div>
    </div>
</main>
`;
