export const template = `
<div class="w-100 d-flex justify-between p-relative">
    <label for="{{ name }}">{{ label }}</label>
    <input id="{{ name }}" type="{{ typeName }}" name="{{ name }}" value="{{ value }}" {{ autofocus }} {{ disabled }}>
    <div data-name="{{ name }}" class="error-message error-message--profile"><span>!</span></div>
</div>
`;
