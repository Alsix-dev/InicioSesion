import {
    ComplementoSesion,
    AlternativaSesion
} from '../../componentes/iniciarsesion/inicio_sesion_barrel.js';

export const ConfigSesion = {
    titulo: "Iniciar sesión",
    boton: "Iniciar sesión",
    id: "IniciarSesion",

    campos: [
        {
            tipo: "email",
            name: "email",
            placeholder: "Email",
            required:true
        },
        {
            tipo: "password",
            name: "password",
            placeholder: "Ingresar contraseña",
            required: true
        }
    ],
    complementos: ComplementoSesion,
    alternativas: AlternativaSesion,

    alt: {
        titulo: "Bienvenido, aun no tienes una cuenta?",
        boton: "Registrate"
    }
}
