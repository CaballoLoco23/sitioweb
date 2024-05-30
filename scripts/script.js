document.getElementById('registration-form').addEventListener('submit', function(event) {
    var errors = false;
    var firstName = document.getElementById('first-name');
    var lastName = document.getElementById('last-name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var birthdate = document.getElementById('birthdate');
    var country = document.getElementById('country');
    var terms = document.getElementById('terms');

    if (!firstName.value) {
        alert('Por favor ingrese su nombre');
        errors = true;
    }

    if (!lastName.value) {
        alert('Por favor ingrese su apellido');
        errors = true;
    }

    if (!email.value) {
        alert('Por favor ingrese su correo electrónico');
        errors = true;
    }

    if (!password.value) {
        alert('Por favor ingrese su contraseña');
        errors = true;
    }

    if (!birthdate.value) {
        alert('Por favor seleccione su fecha de nacimiento');
        errors = true;
    }

    if (!country.value) {
        alert('Por favor seleccione su país');
        errors = true;
    }

    if (!terms.checked) {
        alert('Por favor acepte los términos y condiciones');
        errors = true;
    }

    if (errors) {
        event.preventDefault();
    }
});