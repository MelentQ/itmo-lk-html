export default function fileUpload() {
    const elements = Array.from(document.querySelectorAll('.js-file-upload'));

    elements.forEach(element => {
        const input = element.querySelector('input[type="file"]');
        const label = element.querySelector('.js-file-upload-text');
        const form = element.closest('form');

        input.addEventListener('change', () => {
            if (input.files.length) {
                label.textContent = input.files[0].name;

                if(input.files[0].size > input.dataset.mbLimit * 1024 * 1024){
                    alert(`Размер файла до ${input.dataset.mbLimit} мб`);
                    this.value = "";
                }
            }
        });

        input.addEventListener('dragenter', () => {
            element.classList.add('dragged');
        });
        input.addEventListener('dragend', () => {
            element.classList.remove('dragged');
        });
        input.addEventListener('dragleave', () => {
            element.classList.remove('dragged');
        });
        input.addEventListener('drop', () => {
            element.classList.remove('dragged');
        });

        if (form) {
            form.addEventListener('reset', () => {
                input.value = '';
                label.innerHTML = originalLabelText;
                element.classList.remove('file-loaded');
                element.classList.remove('dragged');
            });
        }
    });

    const toggle14 = document.querySelector('.js-toggle-14');
    const toggle14target = document.querySelector('.js-toggle-14-target');
    const toggle14notTargets = document.querySelectorAll('.js-toggle-14-not-target');
    if (toggle14 && toggle14target && toggle14notTargets.length) {
        const targetInput = toggle14target.querySelector('input');
        const targetInputLabel = toggle14target.querySelector('.js-file-upload-text')
        const toggleIf14 = document.querySelectorAll('.toggle-if-14');

        toggle14.addEventListener('change', () => {
            toggle14target.classList.remove('error');
            toggle14target.classList.toggle('disabled', toggle14.checked)
            targetInput.toggleAttribute('required', !toggle14.checked)
            targetInput.value = ''
            targetInputLabel.textContent = targetInputLabel.dataset.default

            toggle14notTargets.forEach(wrapper => {
                const notTargetInput = wrapper.querySelector('input');
                const notTargetInputLabel = wrapper.querySelector('.js-file-upload-text')

                wrapper.classList.remove('error')
                wrapper.classList.toggle('disabled', !toggle14.checked)
                notTargetInput.toggleAttribute('required', toggle14.checked)
                notTargetInput.value = ''
                notTargetInputLabel.textContent = notTargetInputLabel.dataset.default
            })

            toggleIf14.forEach(element => {
                element.style.display = toggle14.checked ? "block" : "none";
            })
        })
    }
}
