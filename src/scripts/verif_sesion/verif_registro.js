document.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    if(!(form instanceof HTMLFormElement)) return;

    const formData = new FormData(form);
    const formID = form.id;

    if(formID === "form-registro"){
        if(VerificarRegistro(formData)){
            console.log("La cuenta se creo correctamente");
        }
    } else 
    if(formID === "form-sesion"){
        if(VerificarSesion(formData)){
            console.log("La cuenta inicio sesion correctamente");
        }
    }
});

const VerificarNombre = (nombre) => {
    if(nombre.length < 3 || nombre.length > 30){
        console.log("El nombre debe tener entre 3 y 30 caracteres");
        return false;
    }

    if(nombre.trim() !== nombre){
        console.log("El nombre no puede tener espacios");
        return false;
    }
    
    if(nombre.includes('.')){
        console.log("El nombre no puede tener puntos");
        return false;
    }

    return true;
}

const VerificarEmail = (email) => {
    if(email.length === 0 || email.length > 254){
        console.log("El email es obligatorio y no puede superar los 254 caracteres");
        return false;
    }

    if(email.includes(" ")){
        console.log("El email no puede tener espacios en blanco");
        return false;
    }

    let posicionArroba = email.indexOf("@");
    if(posicionArroba === -1 || posicionArroba !== email.lastIndexOf("@")
    ){
        console.log("El email debe tener un unico arroba");
        return false;
    }

    const usuario = email.slice(0, posicionArroba);
    const dominio = email.slice(posicionArroba + 1);

    if(usuario.length === 0){
        console.log("Debes ingresar un usuario");
        return false;
    }

    if(dominio.length === 0){
        console.log("Debe haber un dominio");
        return false;
    }

    if(!dominio.includes(".")){
        console.log("El dominio del email debe tener un punto");
        return false;
    }

    if(dominio.startsWith(".") || dominio.endsWith(".")){
        console.log("El dominio no puede empezar o terminar con punto");
        return false;
    }

    if((dominio.match(/\./g) || []).length > 2){
        console.log("El dominio no puede tener más de dos puntos");
        return false;
    }

    return true;
}

const VerificarPassword = (pass, validatePass) => {
    if(pass !== validatePass){
        console.log("Las contraseñas no coinciden");
        return false;
    }

    if(pass.length < 8 || pass.length > 128){
        console.log("La contraseña debe tener entre 8 y 128 caracteres");
        return false;
    }

    if(pass.includes(" ")){
        console.log("La contraseña no puedo incluir espacios");
        return false;
    }

    if((pass.match(/[A-Z]/) || []).length === 0){
        console.log("La contraseña debe tener al menos una letra mayuscula");
        return false;
    }

    const tieneNumero = pass.split('').some(c => !isNaN(c));
    if(!tieneNumero){
        console.log("La contraseña debe incluir al menos un numero");
        return false;
    }

    return true;
}

function VerificarRegistro(form){
    const nombre = form.get("username");
    const email = form.get("email");
    const pass = form.get("new-password");
    const validatePass = form.get("validate-password");

    const verifNombre = VerificarNombre(nombre);
    const verifEmail = VerificarEmail(email);
    const verifPass = VerificarPassword(pass, validatePass);

    return verifNombre && verifEmail && verifPass;
}

function VerificarSesion(form){
    const email = form.get("email");
    const pass = form.get("new-password");

    const verifEmail = VerificarEmail(email);


    if(pass.length === 0){
        console.log("Ingresa tu contraseña");
        return false;
    }

    return verifEmail;
}
