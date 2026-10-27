export const CrearCampos = (campos) => {
    return campos.map(input => 
        `
            <input 
                type=${input.tipo}
                ${input.name ? `name="${input.name}"` : ''}
                ${input.placeholder ? `placeholder="${input.placeholder}"` : ''}
                ${input.required ? 'required' : ''}
                ${input.pattern ? `pattern="${input.pattern}"` : ''}
                ${input.minlength ? `minlength="${input.minlength}"` : ''}
                ${input.maxlength ? `maxlength="${input.maxlength}"` : ''}
                ${input.title ? `title="${input.title}"` : ''}
                ${input.autocomplete ? `autocomplete="${input.autocomplete}"` : ''}
            >
        `
    ).join('');
}
