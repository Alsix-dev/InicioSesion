import { CrearCampos } from "../formularios/formularios_barrel.js";

export const CrearFormulario = (
    campos,
    complementos,
    boton
) => {
    return (
        `
            <form>
                ${CrearCampos(campos)}
                ${complementos}
                <button type="submit">
                    ${boton}
                </button>
            </form>
        `
    );
}
