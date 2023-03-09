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
                    .then(response => response.json())
                    .then(data => {
                        if (window.modal) {
                            window.modal.open('#modal');
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

    initForms();
});
