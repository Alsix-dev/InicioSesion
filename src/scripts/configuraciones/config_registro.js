import {
    ComplementoRegistro
} from '../../componentes/registro/registro_barrel.js';

export const ConfigRegistro = {
    titulo: "Registrar cuenta",
    boton: "Crear cuenta",
    campos: [
        {
            tipo: "text",
            name: "name",
            placeholder: "Nombre de usuario",
            required: true
        },
        {
            tipo: "email",
            name: "email",
            placeholder: "Email",
            required: true
        },
        {
            tipo: "password",
            name: "password",
            placeholder: "Ingresar contraseña",
            required: true
        }
    ],
    complementos: ComplementoRegistro
}