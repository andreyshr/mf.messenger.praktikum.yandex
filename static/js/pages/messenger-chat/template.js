export var template = "\n    <div class=\"container vh-100 overflow-hidden\">\n    <div class=\"messenger\">\n        <aside class=\"messenger__sidebar sidebar\">\n            \n            {{{ sidebarHeader }}}\n            \n            {{{ roomsList }}}\n            \n        </aside>\n        <main class=\"messenger__workspace workspace\">\n        \n            {{{ workspaceHeader }}}\n        \n            <div class=\"workspace__history-scrollable scrollable vh-100\">\n                <div class=\"workspace__history\">\n                \n                    {{# each messages}}\n                        {{{ this }}}\n                    {{/each}}\n                    \n                </div>\n            </div>\n            <div class=\"workspace__user-panel\">\n                    \n                    {{{ menuEmoji }}}\n                \n                    {{{ menuMessage }}}\n                    \n                    {{{ messageInputForm }}}\n                    \n            </div>\n            \n            {{{ notification }}}\n        </main>\n        \n        {{{ dialogRemoveChat }}}\n        \n    </div>\n</div>\n";
//# sourceMappingURL=template.js.map