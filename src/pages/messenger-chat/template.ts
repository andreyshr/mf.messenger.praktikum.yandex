export const template = `
    <div class="container vh-100 overflow-hidden">
    <div class="messenger">
        <aside class="messenger__sidebar sidebar">
            
            {{{ sidebarHeader }}}
            
            {{{ roomsList }}}
            
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
            
            {{{ notification }}}
        </main>
        
        {{{ dialogRemoveChat }}}
        
    </div>
</div>
`;
