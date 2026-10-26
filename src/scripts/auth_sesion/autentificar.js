import { 
    CrearFormulario,
    CrearMenu 
} from "../../componentes/autentificacion/auth_barrel.js";

import {
    CrearAlternativa
} from "../../componentes/alternaciones/alt_barrel.js";

export const ConstructorMenu = (auth) => {
    const form = CrearFormulario(
        auth.campos,
        auth.complementos?.() ?? '',
        auth.boton,
        auth.formID
    );

    const menu = CrearMenu(
        auth.titulo,
        form,
        auth.alternativas?.() ?? ''
    );

    const alternar = CrearAlternativa(
        auth.alt.titulo,
        auth.alt.boton,
        auth.id
    );

    return { alternar, menu };
}
