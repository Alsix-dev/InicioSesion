import { 
    CrearFormulario,
    CrearMenu 
} from "../../componentes/autentificacion/auth_barrel.js";

export const ConstructorMenu = (auth) => {
    const form = CrearFormulario(
        auth.campos,
        auth.complementos?.(),
        auth.boton
    );

    const menu = CrearMenu(
        auth.titulo,
        form,
        auth.alternativas?.()
    );

    return menu;
}
