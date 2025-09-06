const buttons = document.querySelectorAll('.btn');
const toast = document.getElementById('toast');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Cambiar el mensaje según el producto
        const productName = btn.parentElement.querySelector('.name').textContent;
        toast.textContent = `"${productName}" agregado al carrito!`;

        // Mostrar mensaje
        toast.classList.add('show');

        // Ocultar después de 3 segundos
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    });
});