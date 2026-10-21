import { ConstructorMenu } from "../auth_sesion/auth_sesion_barrel.js";

export const MostrarMenu = (config) => {
    const auth_content = document.getElementById('auth');
    if(!auth_content) return;
    const alt_content = document.getElementById('alt');
    if(!alt_content) return;

    // auth_content.innerHTML = "";
    // alt_content.innerHTML = "";

    const { alternar, menu } = ConstructorMenu(config);

    auth_content.innerHTML = menu;
    alt_content.querySelector(".alt_main")?.remove();
    alt_content.insertAdjacentHTML('beforeend', alternar);
}
