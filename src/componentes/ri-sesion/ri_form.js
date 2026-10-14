export const Formulario_ri = (datos, complemento) => {
    return (
        `
            <form>
                ${datos.inputs}
                ${complemento && complemento}
                <button type="submit">
                    ${datos.boton}
                </button>
            </form>
        `
    );
}
