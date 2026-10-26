import { CrearCampos } from "../formularios/formularios_barrel.js";

export const CrearFormulario = (
    campos,
    complementos,
    boton,
    id
) => {
    return (
        `
            <form id="${id}">
                ${CrearCampos(campos)}
                ${complementos}
                <button type="submit">
                    ${boton}
                </button>
            </form>
        `
    );
}
