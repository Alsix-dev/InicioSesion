export const DatosFormRegistro = () => {
    const form = {
        inputs: `
                    <input type="text" name="name" placeholder="Nombre de usuario">
                    <input type="email" name="email" placeholder="Email">
                    <input type="password" name="password" placeholder="Contraseña">
                `,
        boton: "Crear cuenta"
    }

    return form;
}
