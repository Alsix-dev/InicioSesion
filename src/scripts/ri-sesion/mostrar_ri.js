import { ConstructorMenu } from "../auth_sesion/auth_sesion_barrel.js";
import { ConfigSesion } from "../configuraciones/configs_barrel.js";

const MostrarSesion = () => {
    const padre = document.querySelector('.auth');
    if(!padre) return;

    padre.innerHTML = ConstructorMenu(ConfigSesion);
}

if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', MostrarSesion);
} else MostrarSesion();
