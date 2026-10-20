import { ConstructorMenu } from "../auth_sesion/auth_sesion_barrel.js";
import { ConfigSesion } from "../configuraciones/configs_barrel.js";

const padre = document.querySelector('.ri-sesion');

document.addEventListener('DOMContentLoaded', () => {
    const content = ConstructorMenu(ConfigSesion);
    padre.innerHTML = content;
});

// Pasamos solo el inicio de sesion como test.
