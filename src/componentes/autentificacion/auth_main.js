export const CrearMenu = (
    titulo, 
    formulario, 
    alternativas
) => {
    return (
        `
            <section class="auth_main">
                <h2>${titulo}</h2>
                ${formulario}
            </section>
            ${alternativas && 
                `
                    <div class="auth-alternativas">
                        ${alternativas}
                    </div>
                `
            }
        `
    );
}
