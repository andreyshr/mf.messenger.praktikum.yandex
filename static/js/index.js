document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', (evt) => onSubmitHandler(evt));

        const inputs = Array.from(form.querySelectorAll('input'));
        inputs.forEach(input => {
            setLabelPosition(input);
            input.addEventListener('input', (evt) => setLabelPosition(evt.target));
        });
    }

    function onSubmitHandler(evt) {
        evt.preventDefault();
        const inputs = Array.from(evt.target.querySelectorAll('input[name]'));
        const data = inputs.reduce((acc, input) => ({ ...acc, [input.name]: input.value}), {});
        console.log(data);
    }

    function setLabelPosition(input) {
        if (input.value.length > 0) input.nextElementSibling.classList.add('text-field__label--top');
        else input.nextElementSibling.classList.remove('text-field__label--top');
    }
});
