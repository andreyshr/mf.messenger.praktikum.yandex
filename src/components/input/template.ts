export const template = `
<div class="text-field text-field--regular">
                    <div class="text-field__inner">
                        <input id="{{ id }}" name="{{ name }}" placeholder="{{ placeholder }}" type="{{ typeName }}" {{ autofocus }} {{ disabled }} data-required="{{ required }}">
                        <label for="{{ id }}" class="text-field__label text-field__label--top">{{ label }}</label>
                    </div>
                    <span data-name="{{ name }}" class="error-message">Обязательное поле</span>
                </div>
`;
