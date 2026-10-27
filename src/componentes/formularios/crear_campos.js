export const CrearCampos = (campos) => {
    return campos.map(input => 
        `
            <input 
                type=${input.tipo}
                ${input.name ? `name="${input.name}"` : ''}
                ${input.placeholder ? `placeholder="${input.placeholder}"` : ''}
                ${input.required ? 'required' : ''}
                ${input.pattern ? `pattern="${input.pattern}"` : ''}
                ${input.minLenght ? `minlength="${input.minlength}"` : ''}
                ${input.maxLenght ? `maxlength="${input.maxlength}"` : ''}
                ${input.title ? `title="${input.title}"` : ''}
                ${input.autocomplete ? `autocomplete="${input.autocomplete}"` : ''}
            >
        `
    ).join('');
}
