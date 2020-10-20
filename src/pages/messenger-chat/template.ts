export const template = `
    <div class="container vh-100 overflow-hidden">
    <div class="messenger">
        <aside class="messenger__sidebar sidebar">
            
            {{{ sidebarHeader }}}
            
            <div class="sidebar__history-scrollable scrollable vh-100">
                <ul class="sidebar__list">
                
                    {{# each rooms}}
                        {{{ this }}}
                    {{/each}}
                    
                </ul>
            </div>
        </aside>
        <main class="messenger__workspace workspace">
        
            {{{ workspaceHeader }}}
        
            <div class="workspace__history-scrollable scrollable vh-100">
                <div class="workspace__history">
                
                    {{# each messages}}
                        {{{ this }}}
                    {{/each}}
                    
                </div>
            </div>
            <div class="workspace__user-panel">
                    
                    {{{ menuEmoji }}}
                
                    {{{ menuMessage }}}
                    
                    {{{ messageInputForm }}}
                    
            </div>
        </main>
        
        <div class="overlay d-none"></div>
        
        {{{ dialogRemoveChat }}}
        
    </div>
</div>
`;
