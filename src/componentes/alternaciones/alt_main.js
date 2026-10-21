export const CrearAlternativa = (
    titulo,
    boton,
    id
) => {
    return (
        `
            <div class="alt_main ${id}">
                <h2>${titulo}</h2>
                <button class="alt-auth">${boton}</button>
            </div>
        `
    );
}
