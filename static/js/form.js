document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', (evt) => submitHandler(evt));
    }

    function submitHandler(evt) {
        evt.preventDefault();
        const inputs = Array.from(evt.target.querySelectorAll('input[name]')) || [];
        const data = inputs.reduce((acc, input) => ({...acc, [input.name]: input.value}), {});
        console.log(data);
    }
});
