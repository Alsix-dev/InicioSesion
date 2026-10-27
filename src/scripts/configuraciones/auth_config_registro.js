import {
    ComplementoRegistro
} from '../../componentes/registro/registro_barrel.js';

export const ConfigRegistro = {
    titulo: "Registrar cuenta",
    boton: "Crear cuenta",
    id: "RegistrarCuenta",
    formID: "form-registro",

    campos: [
        {
            tipo: "text",
            name: "username",
            placeholder: "Nombre de usuario",
            pattern:"[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9_]+",
            minlength: 3,
            maxlength: 30,
            title: "Usa de 3 a 30 caracteres: letras, números, espacios, puntos y guiones",
            autocomplete: "Name",
            required: true
        },
        {
            tipo: "email",
            name: "email",
            placeholder: "Email",
            minlength: 8,
            maxlength: 254,
            autocomplete: "Email",
            required: true
        },
        {
            tipo: "password",
            name: "new-password",
            placeholder: "Ingresar contraseña",
            pattern:"[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9]+",
            minlength: 8,
            maxlength: 128,
            required: true
        },
        {
            tipo: "password",
            name: "validate-password",
            placeholder: "Ingresar tu contraseña nuevamente",
            pattern:"[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9]+",
            minlength: 8,
            maxlength: 128,
            required: true
        }
    ],
    complementos: ComplementoRegistro,

    alt: {
        titulo: "Ya tienes una cuenta creada?",
        boton: "Inicia sesión"
    }
}