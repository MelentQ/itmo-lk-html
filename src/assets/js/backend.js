document.addEventListener('DOMContentLoaded', () => {
    function initForms() {
        const forms = document.querySelectorAll('.js-form');
        forms.forEach(form => {
            const submitButtons = [...form.querySelectorAll('.js-form-submit')];

            form.addEventListener('submit', e => {
                e.preventDefault();

                submitButtons.forEach(button => {
                    button.setAttribute('disabled', true);
                });

                const formData = new FormData(form);
                const url = form.action;

                fetch(url, {
                    body: formData,
                    method: 'POST'
                })
                    .then(() => {
                        if (window.modal) {
                            window.modal.open('#modal');
                        }

                        // Personal Avatar Modal Form
                        if (form.classList.contains('js-avatar-form')) {
                            setAvatar(form);
                        }
                    })
                    .catch(err => {
                        if (window.modal) {
                            window.modal.open('#modal');
                        }
                    })
                    .finally(() => {
                        submitButtons.forEach(button => {
                            button.removeAttribute('disabled');
                        });
                    });
            });
        })
    }

    function setAvatar(form) {
        const avatarContainer = document.querySelector('.js-avatar-container');
        const input = form.querySelector('.ja-avatar-input');

        if (avatarContainer && input) {
            const imageTag = avatarContainer.querySelector('img');
            if (imageTag) {
                imageTag.src = input.value
            } else {
                const imageElement = document.createElement('img');
                imageElement.src = input.value
                avatarContainer.append(imageElement)
            }

            input.value = ''
        }
    }

    initForms();
});
