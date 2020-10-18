export const template = `
    <form class="{{ className }}" method="post" action="#">
                <div class="avatar avatar--lg">
                    <div class="avatar__wrapper">
                        <span class="avatar__stub">АШ</span>
                    </div>
                </div>
                <div class="profile__form-row profile__form-row--borderless">
                    <label for="avatar" class="button button--transparent ml-auto mr-auto">Загрузить аватар</label>
                    <input id="avatar" type="file" name="avatar"/>
                </div>
                <h1 class="profile__form-title">{{ title }}</h1>
                <div class="profile__form-rows">
                    {{#each inputs}}
                        <div class="profile__form-row">
                            {{{ this }}}
                        </div>
                    {{/each}}
                </div>
                <div class="profile__form-rows">
                    {{#each buttons}}
                        <div class="profile__form-row {{#if @last}}profile__form-row--borderless{{/if}}">
                            {{{ this }}}
                        </div>
                    {{/each}}
                </div>
            </form>
`;
