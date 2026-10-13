/* 
    1) ID: registro | sesion
    2) Botones: button=ri-registro o ri-sesion
*/

export const Formulario_ri = (datos, complemento, id) => {
    return (
        `
            <form>
                ${datos.inputs}
                ${complemento && complemento}
                <button type="submit" id="ri-${id}">
                    ${datos.boton}
                </button>
            </form>
        `
    );
}
