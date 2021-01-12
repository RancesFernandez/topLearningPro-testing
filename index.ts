import { loginSuperAdminTC } from "./src/login/loginSuperAdmin";
import { loginToplearningTC } from "./src/login/loginTopLearning";
import { agregarRecursosAComunidad } from "./src/toplearningFunctions/agregarRecursosAComunidad";
import { crearComunidadTC } from "./src/toplearningFunctions/crearComunidad";
import { crearPlanDeEstudios } from "./src/toplearningFunctions/crearPlanDeEstudios";
import { invitarAComunidad } from "./src/toplearningFunctions/invitarAComunidad";
import { sugerirComunidadTC } from "./src/toplearningFunctions/sugerirComunidad";
import { delay, openApp, restartApp } from "./src/util/util";

async function init() {

    let driver = await openApp();

    await loginToplearningTC (driver);

    /*await delay();

    await sugerirComunidadTC(driver);*/

    await delay();

    /*await crearComunidadTC(driver);

    await delay();

    await agregarRecursosAComunidad(driver);

    await delay();

    await invitarAComunidad(driver);

    await delay();

    */await crearPlanDeEstudios(driver);

    //driver = await restartApp(driver);

    //await loginSuperAdminTC(driver);





}

init();