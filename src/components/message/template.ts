export const template = `
            <div class="message__body">
                {{#if message}}
                    <p class="message__text">
                        {{{ message }}}
                    </p>
                {{/if}}
                {{#if img}}
                    <img class="responsive-img" src="{{ img }}" alt="#">
                {{/if}}
                <div class="message__time">
                    <time>{{ time }}</time>
                </div>
            </div>
`;
