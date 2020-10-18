export const template = `
    {{#if_eq tagName "a"}}
        <a href={{ href }} class="{{ className }}">
            {{ title }}
        </a>
    {{else}}
        <button class="{{ className }}" type="{{ typeName }}">
            {{ title }}
        </button>
    {{/if_eq}}
`;
