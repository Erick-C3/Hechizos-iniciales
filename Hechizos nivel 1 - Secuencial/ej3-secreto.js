const leer = require("prompt-sync")();

const ANIMAL_TIPO = "hipogrifo";
const HIPOGRIFO_SEGURO_1 = "Buckbeak";
const HIPOGRIFO_SEGURO_2 = "Stormwing";
const RACION_HIPO_PROPORCION = 0.02;
const POSIBILIDAD_ATAQUE = 0.25;

const HIPOGRIFO_DEF_NOMBRE = "def nombre hipogrifo";
const HIPOGRIFO_DEF_PESO = 0;
const HIPOGRIFO_DEF_SEGURO = false;
const RACION_DISPONIBLE_DEF = 0;
const RACION_RECOMENDADA_DEF = 0;
const ES_RACION_SUFICIENTE_DEF = false;

const ESTADO_PERMISO_DEF = false;
const ELECCION_ALIMENTAR_DEF = 0;

function main() {
    let nombreHipogrifo = HIPOGRIFO_DEF_NOMBRE;
    let pesoHipogrifo = HIPOGRIFO_DEF_PESO;
    let hipogrifoEsSeguro = HIPOGRIFO_DEF_SEGURO;
    let racionDisponible = RACION_DISPONIBLE_DEF;
    let racionRecomendada = RACION_RECOMENDADA_DEF;
    let esRacionSuficiente = ES_RACION_SUFICIENTE_DEF;
    let estadoPermiso = ESTADO_PERMISO_DEF;
    let eleccionAlimentar = ELECCION_ALIMENTAR_DEF;
    let estadoAtaque = false;

    console.log("Como se llama el", ANIMAL_TIPO,"?");
    nombreHipogrifo = leer();
    hipogrifoEsSeguro = (nombreHipogrifo == HIPOGRIFO_SEGURO_1) || (nombreHipogrifo == HIPOGRIFO_SEGURO_2)
    console.log("Cual es el peso de", nombreHipogrifo);
    pesoHipogrifo = leer();
    console.log("Cuanta comida tenes?");
    racionDisponible = leer();
    racionRecomendada = RACION_HIPO_PROPORCION * pesoHipogrifo;
    esRacionSuficiente = racionDisponible >= racionRecomendada;
    console.log("Tenes permiso de Hagrid para alimentar a hipogrifos?\n 1 para si / 0 para no");
    estadoPermiso = Boolean(Number(leer()));
    esPosibleAlimentar = (estadoPermiso && esRacionSuficiente);
    esSeguro = (hipogrifoEsSeguro && esPosibleAlimentar)


    console.log("Encontramos a: ", nombreHipogrifo);
    console.log("Es hipogrifo seguro: ", hipogrifoEsSeguro);
    console.log("Su peso aproximado:", pesoHipogrifo);
    console.log("La cantidad de comida disponible para alimentar:", racionDisponible);
    console.log("La cantidad de comida recomendada:", racionRecomendada);
    console.log("Si es posible alimentarlo correctamente:", esRacionSuficiente);
    console.log("Si contas con el permiso de Hagrid:", estadoPermiso);
    console.log("Si podes alimentarlo:", esPosibleAlimentar);
    console.log("Si es seguro:", esSeguro);

    console.log(`Queres alimentar a ${nombreHipogrifo}?\n 1 para si / 0 para no`);
    eleccionAlimentar = Boolean(Number(leer()));
    estadoAtaque = Math.random() <= POSIBILIDAD_ATAQUE;
    resultFinalMision = (eleccionAlimentar && (esSeguro || !estadoAtaque)) ;

    console.log("El estado final de la mision, termino bien?", resultFinalMision);
    console.log("Ataco", estadoAtaque);

}


main();