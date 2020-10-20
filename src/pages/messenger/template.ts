export const template = `
    <div class="container vh-100 overflow-hidden">
    <div class="messenger">
        <aside class="messenger__sidebar sidebar">
            
            {{{ sidebarHeader }}}
            
            <div class="sidebar__history-scrollable scrollable vh-100">
                {{# each rooms}}
                   {{{ this }}}
                {{/each}}
            </div>
        </aside>
        <main class="messenger__workspace workspace">
            <div class="workspace__empty w-100 h-100">
                <span>Выберите чат чтобы отправить сообщение</span>
            </div>
        </main>
    </div>
</div>
`;
