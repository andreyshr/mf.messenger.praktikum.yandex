document.addEventListener("DOMContentLoaded", () => {
    const openButtons = Array.from(document.querySelectorAll('.js-open-dialog-button'));
    const overlay = document.querySelector('.overlay');

    openButtons.forEach(button => button.addEventListener('click', openDialog.bind(this, button)));

    function openDialog(button) {
        const id = button.dataset.dialogId;
        const dialog = document.querySelector(`#${id}`);
        const closeButton = document.querySelector('.js-close-dialog-button');
        showDialog(dialog);
        closeButton.addEventListener('click', closeDialog.bind(this, dialog, closeButton));
        overlay.addEventListener('click', closeDialog.bind(this, dialog, overlay));
    }

    function closeDialog(dialog, activator) {
        hideDialog(dialog);
        activator.removeEventListener('click', closeDialog);
    }

    function showDialog(dialog) {
        dialog.classList.remove('d-none');
        overlay.classList.remove('d-none');
    }

    function hideDialog(dialog) {
        dialog.classList.add('d-none');
        overlay.classList.add('d-none');
    }
})
