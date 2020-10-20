export const template = `
                <div class="room room--header">
                    <div class="room__avatar avatar avatar--sm">
                        <div class="avatar__wrapper">
                            <img class="responsive-img" src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="#">
                        </div>
                    </div>
                    <div class="room__info">
                        <div class="room__info-row">
                            <h1 class="room__title">{{ chatName }}</h1>
                        </div>
                        <div class="room__info-row">
                            <p class="room__last-message">
                                {{ userLastActiveTime }}
                            </p>
                        </div>
                    </div>
                    
                    {{{ menuChat }}}
                    
                </div>
                <time class="workspace__date">{{ historyTime }}</time>
`;
