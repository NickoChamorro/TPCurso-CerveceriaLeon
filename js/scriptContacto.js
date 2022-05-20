const formulario = document.getElementById('formulario'); 
const telefono = document.getElementById('telefono');

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const regTelefono = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
 
    if (!regTelefono.test(telefono.value)){
            telefono.setCustomValidity("Formato de teléfono inválido.");
            telefono.focus();
            return false;
    }

    console.log("va por confirmacion correcta");

    alert("Muchas gracias por enviar el formulario");
    return true;
});