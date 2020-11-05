export const template = `
            <ul class="sidebar__list">
                {{# each rooms}}
                   {{{ this }}}
                {{/each}}
            </ul>
`;
