const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
})
// Seleccionamos los elementos
const registerLink = document.getElementById('redirect-register');
const loginButton = document.getElementById('redirect-login');

// Redirigir al formulario de registro
registerLink.addEventListener('click', (e) => {
    e.preventDefault(); // Evita comportamiento predeterminado del enlace
    window.location.href = 'registro.html'; // URL de tu página de registro
});

// Redirigir al index
loginButton.addEventListener('click', () => {
    window.location.href = 'index.html'; // URL de tu página de inicio
});
// Redes Sociales 
const instagramIcon = document.getElementById('redirect-instagram');
const googleIcon = document.getElementById('redirect-google');
const facebookIcon = document.getElementById('redirect-facebook');

// Redirigir a Instagram
instagramIcon.addEventListener('click', () => {
    window.location.href = 'https://www.instagram.com'; // URL de Instagram
});

// Redirigir a Google
googleIcon.addEventListener('click', () => {
    window.location.href = 'https://www.google.com'; // URL de Google
});

// Redirigir a Facebook
facebookIcon.addEventListener('click', () => {
    window.location.href = 'https://www.facebook.com'; // URL de Facebook
});
const passwordField = document.getElementById('password');
const togglePasswordLink = document.getElementById('toggle-password');

// Alternar entre mostrar y ocultar contraseña
togglePasswordLink.addEventListener('click', () => {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        togglePasswordLink.textContent = 'Ocultar'; // Cambia el texto a "Ocultar"
    } else {
        passwordField.type = 'password';
        togglePasswordLink.textContent = 'Mostrar'; // Cambia el texto a "Mostrar"
    }
});

;