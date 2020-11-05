export const template = `
            <ul class="sidebar__list sidebar__list--users scrollable">
                {{# each users}}
                   {{{ this }}}
                {{/each}}
            </ul>
`;
