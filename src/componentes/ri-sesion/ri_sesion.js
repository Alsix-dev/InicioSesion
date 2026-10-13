/* 
    1) Titulo: Iniciar sesion | Crear cuenta
*/ 
export const MenuInteractivo = (
    titulo,
    form,
    alternativas = null
) => {
    return (
        `
            <section>
                <h2>${titulo}</h2>
                ${form}
            </section>

            ${alternativas && alternativas}
        `
    );
}
