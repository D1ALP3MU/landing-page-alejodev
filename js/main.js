// Seleccionar todos los elementos con la clase 'fade-in' para aplicar la animación de aparición
const elements = document.querySelectorAll('.fade-in');

// Configuración del Intersection Observer para detectar cuando los elementos son visibles en la pantalla
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {// Si el elemento es visible, agregar la clase 'visible' para activar la animación
            entry.target.classList.add('visible');
        }
    });
});

// Observar cada elemento con la clase 'fade-in' para aplicar la animación cuando sean visibles
elements.forEach(el => observer.observe(el));

// Seleccionar el botón de menú y los enlaces de navegación para la funcionalidad de menú móvil
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Alternar la clase 'active' para mostrar u ocultar el menú
});

// Validar el formulario de contacto para asegurar que los campos requeridos estén completos antes de enviar
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevenir el envío del formulario para realizar la validación

    let isValid = true; // Variable para rastrear si el formulario es válido

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // Resetear errores
    clearError(name);
    clearError(email);
    clearError(message);

    //VALIDACIONES
    if (name.value.trim() === '') {
        showError(name, 'El nombre es obligatorio');
        isValid = false;
    }

    if (!validateEmail(email.value)) {
        showError(email, 'Correo inválido');
        isValid = false;
    }

    if (message.value.trim().length < 10) {
        showError(message, 'El mensaje debe tener al menos 10 caracteres');
        isValid = false;
    }

    if (isValid) {
        alert('Formulario enviado correctamente 🚀');
        form.reset(); // Reiniciar el formulario después de un envío exitoso
    }

    // Función para mostrar mensajes de error
    function showError(input, message) {
        const formGroup = input.parentElement;
        const error = formGroup.querySelector('.error-message');

        error.textContent = message; // Mostrar el mensaje de error
        input.classList.add('error'); // Agregar clase de error para estilos
    }

    // Función para limpiar mensajes de error
    function clearError(input) {
        const formGroup = input.parentElement;
        const error = formGroup.querySelector('.error-message');

        error.textContent = ''; // Limpiar el mensaje de error
        input.classList.remove('error'); // Eliminar clase de error
    }

    // Función para validar el formato del correo electrónico
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Expresión regular para validar el correo electrónico
    }
});