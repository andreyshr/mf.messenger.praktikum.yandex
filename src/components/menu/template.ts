export const template = `
        
        {{{ buttonMenuOpener }}}
        
        <div class="menu {{ menuListClass }}">
             <ul class="menu__list">
                {{# each items}}
                    <li class="menu__item">
                        <button type="button" class="menu__button">
                            {{{ this.icon }}}
                            <span>{{ this.title }}</span>
                        </button>
                    </li>
                {{/each}}
            </ul>  
        </div>
`;
