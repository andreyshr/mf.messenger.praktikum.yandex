document.addEventListener('DOMContentLoaded', () => {
    const inputs = Array.from(document.querySelectorAll('.text-field input'));

    inputs.forEach(input => {
        setLabelPosition(input);
        input.addEventListener('blur', (evt) => setLabelPosition(evt.target));
    });

    function setLabelPosition(input) {
        const label = input.nextElementSibling;
        input.value.length > 0
            ? label.classList.add('text-field__label--top')
            : label.classList.remove('text-field__label--top');
    }
});
