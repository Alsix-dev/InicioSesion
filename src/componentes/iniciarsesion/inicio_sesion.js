export const MenuInicioSesion = () => {
    return (
        `
            <section class="ri-sesion">
                <h2>Iniciar sesion</h2>
                <form action="">
                    <input type="email" name="user_id" id="user_id"
                        placeholder="Email/Usuario">
                    <input type="password" name="user_pass" id="user_pass"
                        placeholder="Ingresa tu contraseña">
                </form>
                <a href="#">¿Olvidaste tu contraseña?</a>
                <button id="#">Iniciar sesion</button>
            </section>

            <div class="a-sesion">
                <a>#Google</a>
                <a>#Github</a>
            </div>
        `
    );
}