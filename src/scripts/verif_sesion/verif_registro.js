document.addEventListener('submit', (event) => {
    const form = event.target.closest();
    if(!form) return;

    const formData = new FormData(form);
    const formID = form.id;

    if(formID === "form-registro"){
        // VerificarRegistro(formData);
    } else 
    if(formID === "form-sesion"){
        // VerificarSesion(formData);
        console.log('hola, aun estamos en desarrollo. Por favor, ten paciencia')
    }
});


// function VerificarRegistro(formulario){

// }

// function VerificarSesion(formulario){

// }
