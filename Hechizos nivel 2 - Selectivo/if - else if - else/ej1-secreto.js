const leer = require("prompt-sync")();

const INGREDIENTE_NOMBRE_1 = "Raíces de Mandrágora";
const INGREDIENTE_NOMBRE_2 = "Ojo de Tritón";
const INGREDIENTE_NOMBRE_3 = "Escamas de Dragón";

const ingredientesNombre = [
    INGREDIENTE_NOMBRE_1,
    INGREDIENTE_NOMBRE_2,
    INGREDIENTE_NOMBRE_3,
    "ingrediente nuevo"
]

const INGREDIENTE_CANT_1 = 3;
const INGREDIENTE_CANT_2 = 1;
const INGREDIENTE_CANT_3 = 5;

const ingredientesCant = [
    INGREDIENTE_CANT_1,
    INGREDIENTE_CANT_2,
    INGREDIENTE_CANT_3,
    7
]

const MAX_INGREDIENTES = ingredientesNombre.length;

const UNIDAD_TIEMPO = "minutos"
const TIEMPO_PREPARACION_MEZCLA = 30;
const CANT_VUELTAS_MEZCLA = 10;
const SENTIDO_VUELTAS_MEZCLA = "horario";
const tiposCuchara = ["vidrio", "metal", "madera"]
const TIPO_CUCHARA_CORRECTA = "madera";

const MIN_TIEMPO_ENFRIAMIENTO = 5;
const MAX_TIEMPO_ENFRIAMIENTO = 10;

const NOMBRE_FRASCOS = "Pocion de Vitalidad";

const MSJ_RESPUESTA_MAL = "¡Potter, Potter, Potter! ¿Es esto lo mejor que puedes hacer? ¡Tu incompetencia en el arte de las pociones es tan predecible como tu falta de talento! ¡Esta poción es un completo desastre! ¡Un Gryffindor no podría hacerlo peor si lo intentara intencionalmente! Ve a tu asiento y reflexiona sobre tu incompetencia."
const MSJ_RESPUESTA_BIEN = "Hmm... parece que, contra todo pronóstico, has logrado preparar una poción que no es completamente inútil. No está mal, aunque aún queda mucho que mejorar. Tal vez hayas heredado algo de habilidad de tus antepasados... o simplemente has tenido suerte. ¡Sigue así, pero no te relajes, la perfección exige constancia!"




const DEF_CANT_INGREDIENTE = 0;
const ESTADO_POCION_CORRECTO = true;
const ESTADO_POCION_INCORRECTO = false;

function main() {
    if(verifIngresoDeIngredientes()){
        console.log(MSJ_RESPUESTA_BIEN);
    }else{
        console.log(MSJ_RESPUESTA_MAL);
    }
}





main();


/**
 * verifica las cantidades ingresadas por el usuario con las cantidades
 * correctas de la receta
 * @returns estado de la preparacion de la pocion
 */
function verifIngresoDeIngredientes() {
    let cantIngresadasIngredientes = []
    let estadoPrepPocion = ESTADO_POCION_CORRECTO;
    for (let i = 0; i < MAX_INGREDIENTES; i++) {
        console.log("Ingresa la cantidad para", ingredientesNombre[i]);
        cantIngresadasIngredientes[i] = Number(leer());
        if (cantIngresadasIngredientes[i] !== ingredientesCant[i]) {
            estadoPrepPocion = ESTADO_POCION_INCORRECTO;
        }
    }
    console.log("Combinando ingredientes...");
    return estadoPrepPocion;
}
