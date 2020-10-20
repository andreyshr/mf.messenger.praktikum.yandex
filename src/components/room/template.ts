export const template = `
                <a data-room-id="{{ id }}"  href="{{ link }}" class="room" title="{{ name }}">
                    
                     <div class="room__avatar avatar">
                        <div class="avatar__wrapper">
                            {{#if avatarImg}}
                                <img class="responsive-img" src="{{ avatarImg }}" alt="#">
                            {{/if}}
                            {{#if stubLetters}}
                                <span class="avatar__stub">{{ stubLetters }}</span>
                            {{/if}}
                        </div>
                        {{#if newMessagesCount}}
                            <div class="room__new-messages">
                                <span>{{ newMessagesCount }}</span>
                            </div>
                        {{/if}}
                    </div>
                    
                    <div class="room__info">
                        <div class="room__info-row">
                            <h3 class="room__title">{{ name }}</h3>
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
