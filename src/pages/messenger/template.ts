export const template = `
    <div class="container vh-100 overflow-hidden">
    <div class="messenger">
        <aside class="messenger__sidebar sidebar">
            
            {{{ sidebarHeader }}}
            
            {{{ roomsList }}}
        </aside>
        <main class="messenger__workspace workspace">
        
            {{{ workspaceEmpty }}}
            
            {{{ notification }}}
        </main>
    </div>
</div>
`;
