import * as sesion from "../../componentes/iniciarsesion/inicio_barrel.js";
import * as registro from "../../componentes/registro/registro_barrel.js";
import * as ri from '../../componentes/ri-sesion/ri_sesion_barrel.js';

const padre = document.querySelector('.ri-sesion');

document.addEventListener('DOMContentLoaded', () => {
    const datosForm = sesion.DatosFormSesion();
    const complemento = sesion.ComplementoSesion();
    const alternativa = sesion.Alternativa_sesion();

    const form_sesion = ri.Formulario_ri(
        datosForm,
        complemento,
        "sesion"
    );

    const form = ri.MenuInteractivo(
        "Inicio de sesion",
        form_sesion,
        alternativa
    );

    padre.innerHTML = form;
});
