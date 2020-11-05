export const template = `
                <a data-room-id="{{ id }}"  href="{{ link }}" class="room router-link {{#if active }}room--active{{/if}}" title="{{ name }}">
                    
                     {{{ avatar }}}
                    
                    <div class="room__info">
                        <div class="room__info-row">
                            <h3 class="room__title">{{ title }}</h3>
                            <time class="room__last-message-time">{{ time }}</time>
                        </div>
                        <div class="room__info-row">
                            <p class="room__last-message">{{ message }}</p>
                            {{#if newMessagesCount}}
                                <div class="room__new-messages">
                                    <span>{{ newMessagesCount }}</span>
                                </div>
                            {{/if}}
                        </div>
                    </div>
                </a>
`;
