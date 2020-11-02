export const template = `
    <div class="container vh-100 overflow-hidden">
    <div class="messenger">
        <aside class="messenger__sidebar sidebar">
            
            {{{ sidebarHeader }}}
            
            <ul class="sidebar__history-scrollable scrollable vh-100">
                {{# each rooms}}
                   {{{ this }}}
                {{/each}}
            </ul>
        </aside>
        <main class="messenger__workspace workspace">
        
            {{{ workspaceEmpty }}}
        
        </main>
    </div>
</div>
`;
