export const template = `   
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
`;
