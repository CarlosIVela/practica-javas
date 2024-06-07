document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', function (event) {
        let isValid = true;

        // Validar nombre completo
        let fullNameInput = document.getElementById('fullName');
        let fullNameFeedback = document.querySelector('.invalid-feedback.fullName');
        if (fullNameInput.value === '') {
            fullNameFeedback.textContent = 'Por favor ingrese su nombre completo.';
            isValid = false;
        } else {
            fullNameFeedback.textContent = '';
        }

        // Validar correo electrónico
        let emailInput = document.getElementById('email');
        let emailFeedback = document.querySelector('.invalid-feedback.email');
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailFeedback.textContent = 'Por favor ingrese un correo electrónico válido.';
            isValid = false;
        } else {
            emailFeedback.textContent = '';
        }

        // Validar teléfono
        let phoneInput = document.getElementById('phone');
        let phoneFeedback = document.querySelector('.invalid-feedback.phone');
        if (phoneInput.value === '' || phoneInput.value.length < 8) {
            phoneFeedback.textContent = 'Por favor ingrese un teléfono válido (mínimo 8 caracteres).';
            isValid = false;
        } else {
            phoneFeedback.textContent = '';
        }

        // Validar contraseña
        let passwordInput = document.getElementById('password');
        let passwordFeedback = document.querySelector('.invalid-feedback.password');
        if (passwordInput.value === '' || passwordInput.value.length < 4) {
            passwordFeedback.textContent = 'La contraseña debe tener al menos 4 caracteres.';
            isValid = false;
        } else {
            passwordFeedback.textContent = '';
        }

        // Validar repetir contraseña
        let rePasswordInput = document.getElementById('rePassword');
        let rePasswordFeedback = document.querySelector('.invalid-feedback.rePassword');
        if (rePasswordInput.value === '') {
            rePasswordFeedback.textContent = 'Por favor repita la contraseña.';
            isValid = false;
        } else if (rePasswordInput.value !== passwordInput.value) {
            rePasswordFeedback.textContent = 'Las contraseñas no coinciden.';
            isValid = false;
        } else {
            rePasswordFeedback.textContent = '';
        }

        // Mostrar mensaje de error debajo de los campos si no son válidos
        if (!isValid) {
            event.preventDefault();
        }
    });

    // Limpiar mensajes de error al enfocar en un campo
    let inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            let feedback = this.parentElement.querySelector('.invalid-feedback');
            feedback.textContent = '';
        });
    });
});
