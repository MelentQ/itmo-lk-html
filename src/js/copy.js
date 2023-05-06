export default function copy() {
    const containers = document.querySelectorAll('.js-copy');
    containers.forEach(container => {
        const textElement = container.querySelector('.js-copy-text');
        const button = container.querySelector('.js-copy-button');

        button.addEventListener('click', () => {
            navigator.clipboard.writeText(textElement.textContent);
            window.modal.open('#copied');
        })
    })
}
