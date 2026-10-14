import * as ri from '../../componentes/ri-sesion/ri_sesion_barrel.js';

export const ConstructorMenu = (datos, complemento, alternativa) => {
    const form_sesion = ri.Formulario_ri(
        datos,
        complemento
    );

    const form = ri.MenuInteractivo(
        datos.boton,
        form_sesion,
        alternativa
    );

    return form;
}
