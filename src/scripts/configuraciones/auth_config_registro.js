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
            name: "Name",
            placeholder: "Nombre de usuario",
            pattern:"[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9._]+",
            minLenght: 3,
            maxLenght: 30,
            title: "Usa de 3 a 30 caracteres: letras, números, espacios, puntos y guiones",
            autocomplete: "Name",
            required: true
        },
        {
            tipo: "email",
            name: "email",
            placeholder: "Email",
            maxLenght: 254,
            autocomplete: "Email",
            required: true
        },
        {
            tipo: "password",
            name: "password",
            placeholder: "Ingresar contraseña",
            pattern:"[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9]+",
            minLenght: 8,
            maxLenght: 128,
            required: true
        }
    ],
    complementos: ComplementoRegistro,

    alt: {
        titulo: "Ya tienes una cuenta creada?",
        boton: "Inicia sesión"
    }
}