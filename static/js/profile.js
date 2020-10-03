document.addEventListener('DOMContentLoaded', () => {
    const editProfileButton = document.querySelector('.js-edit-profile-btn');

    if (editProfileButton) {
        editProfileButton.addEventListener('click', editProfileButtonHandler)
    }

    function editProfileButtonHandler() {
        const hiddenRows = Array.from(document.querySelectorAll('.js-hidden-row'));
        const disabledInputs = Array.from(document.querySelectorAll('input[disabled]'));
        hiddenRows.forEach(row => row.classList.toggle('profile__form-row--hidden'));
        disabledInputs.forEach(input => input.removeAttribute('disabled'));
    }
});
