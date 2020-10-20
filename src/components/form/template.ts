export const template = `
    <div class="form__wrapper">
        <h1 class="form__title">{{ title }}</h1>
        {{#each inputs}}
            <div class="form__row {{#if @last}}mb-auto{{/if}}">
                {{{ this }}}
            </div>
        {{/each}}
        {{#each buttons}}
            <div class="form__row">
                {{{ this }}}
            </div>
        {{/each}}
    </div>
`;
