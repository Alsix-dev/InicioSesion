import { MostrarMenu } from "./auth_load_type.js";
import { 
    ConfigSesion,
    ConfigRegistro
} from "../configuraciones/configs_barrel.js";

document.addEventListener('click', (event) => {
    const boton_alt = event.target.closest('.alt-auth');
    if(!boton_alt) return;

    if(boton_alt.closest('.IniciarSesion')){
        MostrarMenu(ConfigRegistro);
    } else if(boton_alt.closest('.RegistrarCuenta')){
        MostrarMenu(ConfigSesion)
    }
});