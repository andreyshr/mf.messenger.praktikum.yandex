export const template = `
        <div class="overlay"></div>
        <div class="dialog" id="remove-chat">
            <div class="dialog__body">
                
                <div class="sidebar__search">
                    <label>
                        <input type="text" placeholder="Поиск" class="js-user-search" autofocus>
                    </label>             
                </div>
                
                {{{ usersList }}}
                
                <div class="dialog__content">
                    
                    {{{ cancelButton }}}
                    
                </div>
            </div>
        </div>
`;
