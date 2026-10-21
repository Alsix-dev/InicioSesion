import { MostrarMenu } from "./auth_load_type.js";
import { ConfigSesion } from "../configuraciones/configs_barrel.js";

if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', () => {
        MostrarMenu(ConfigSesion)}
    );
} else MostrarMenu(ConfigSesion);
