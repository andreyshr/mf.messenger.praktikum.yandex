export var template = "\n                <a data-room-id=\"{{ id }}\"  href=\"{{ link }}\" class=\"room router-link {{#if active }}room--active{{/if}}\" title=\"{{ name }}\">\n                    \n                     {{{ avatar }}}\n                    \n                    <div class=\"room__info\">\n                        <div class=\"room__info-row\">\n                            <h3 class=\"room__title\">{{ title }}</h3>\n                            <time class=\"room__last-message-time\">{{ time }}</time>\n                        </div>\n                        <div class=\"room__info-row\">\n                            <p class=\"room__last-message\">{{ message }}</p>\n                            {{#if newMessagesCount}}\n                                <div class=\"room__new-messages\">\n                                    <span>{{ newMessagesCount }}</span>\n                                </div>\n                            {{/if}}\n                        </div>\n                    </div>\n                </a>\n";
//# sourceMappingURL=template.js.map