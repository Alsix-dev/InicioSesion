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
                    <div class="auth_alternativas">
                        <span>Continua con google u otras opciones</span>
                        ${alternativas}
                    </div>
                `
            }
        `
    );
}
