export const CrearMenu = (
    titulo, 
    formulario, 
    alternativas
) => {
    return (
        `
            <section>
                <h2>${titulo}</h2>
                ${formulario}
            </section>
            ${alternativas}
        `
    );
}
