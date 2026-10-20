export const CrearCampos = (campos) => {
    return campos.map(input => 
        `
            <input 
                type=${input.tipo}
                ${input.name ? `name=${input.name}` : ''}
                ${input.placeholder ? `placeholder=${input.placeholder}` : ''}
                ${input.required ? 'required' : ''}
            >
        `
    ).join(''); 
}
