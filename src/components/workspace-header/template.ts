export const template = `
                <div class="room room--header">
                    
                    {{{ avatar }}}
                    
                    <div class="room__info">
                        <div class="room__info-row">
                            <h1 class="room__title">{{ title }}</h1>
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
