export const template = `   
            <div class="avatar__wrapper">
                <img class="responsive-img" src="{{ avatarImg }}" alt="#">
            </div>
            {{#if newMessagesCount}}
                <div class="room__new-messages">
                    <span>{{ newMessagesCount }}</span>
                </div>
            {{/if}}
`;
