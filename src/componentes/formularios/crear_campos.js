export const CrearCampos = (campos) => {
    return campos.map(input => 
        `
            <input 
                type=${input.tipo}
                ${input.name ? `name=${input.name}` : ''}
                ${input.placeholder ? `placeholder=${input.placeholder}` : ''}
                ${input.required ? 'required' : ''}
                ${input.pattern ? `pattern=${input.pattern}` : ''}
                ${input.minLenght ? `minLength=${input.minLenght}` : ''}
                ${input.maxLenght ? `maxLenght=${input.maxLenght}` : ''}
                ${input.title ? `title=${input.title}` : ''}
                ${input.autocomplete ? `autocomplete=${input.autocomplete}` : ''}
            >
        `
    ).join('');
}
