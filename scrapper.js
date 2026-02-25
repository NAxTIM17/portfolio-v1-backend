import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.linkedin.com');
    const title = await page.title();
    console.log('Title:', title);

    // ir a linkedin
    // iniciar sesion
    // ir al perfil
    // obtener informacion del perfil
    // cerrar sesion

    // guardar la informacion en mongodb

    await browser.close();
})();
