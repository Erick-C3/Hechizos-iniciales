const leer = require("prompt-sync")();

const TIPO_ANIMAL = "Hipogrifo";
const NOMBRE_ANIMAL_1 = "Buckbeak";
const NOMBRE_ANIMAL_2 = "Stormwing";

const PROPORCION_COMIDA = 0.02;
const PROBABILIDAD_ATAQUE = 0.25 ;

const DEF_ANIMAL_ENCONTRADO = `def ${TIPO_ANIMAL} encontrado`;
const DEF_ANIMAL_PESO = 0;
const DEF_CANT_COMIDA_DISP = "def cant comida";
const DEF_CANT_COMIDA_RECOMENDADA = 0;

const UNIDAD_PESO = "KG";
const DEF_POSIBLE_ALIMENTAR_CORRECTAMENTE = false;
const DEF_PERMISO_DISP = false;
const DEF_PUEDO_ALIMENTAR = false;

const RESULTADO_NEGATIVO = false;
const RESULTADO_POSITIVO = true;

function main() {
    let animalEncontradoNombre = DEF_ANIMAL_ENCONTRADO;
    let animalPeso = DEF_ANIMAL_PESO;
    let cantComidaDisp = DEF_CANT_COMIDA_DISP
    let cantComidaRecomendada = DEF_CANT_COMIDA_RECOMENDADA;
    let suficienteComida = DEF_POSIBLE_ALIMENTAR_CORRECTAMENTE;
    let tengoPermiso = DEF_PERMISO_DISP;
    let puedoAlimentarAlAnimal = DEF_PUEDO_ALIMENTAR;
    let esSeguroAlimentar = false;
    let estadoResultadoFinal = RESULTADO_NEGATIVO;
    let quiereAlimentar = false;
    let estadoAtaque = false;

    console.log(`Como se llama el ${TIPO_ANIMAL} encontrado?`);
    animalEncontradoNombre = leer();
    esAnimalAmigable = ((NOMBRE_ANIMAL_1 == animalEncontradoNombre) || (NOMBRE_ANIMAL_2 == animalEncontradoNombre));
    console.log(`Cuanto pesa ${animalEncontradoNombre}? en ${UNIDAD_PESO}`);
    animalPeso = leer();
    console.log(`Cuanta comida tenes disponible? en ${UNIDAD_PESO}`);
    cantComidaDisp = leer();
    cantComidaRecomendada = PROPORCION_COMIDA * animalPeso;
    suficienteComida = (cantComidaDisp >= cantComidaRecomendada);
    console.log("Tenes permiso de hagrid para alimentar", TIPO_ANIMAL,"? 1 para si y 0 para no");
    tengoPermiso = Boolean(Number(leer())); // "" false - "asda" true // 0 -> false - 1 o cualquier otro distinto de cero -> true
    /* if (tengoPermiso == "si") {
        true
    }else{
        false
    } */
    puedoAlimentarAlAnimal = ( tengoPermiso && suficienteComida);
    esSeguroAlimentar = (puedoAlimentarAlAnimal && esAnimalAmigable);

    console.log(`Nombre del ${TIPO_ANIMAL} encontrado:`, animalEncontradoNombre);
    console.log(`Es un ${TIPO_ANIMAL} amigable?`, esAnimalAmigable);
    console.log(`Su peso es ${animalPeso}`, UNIDAD_PESO);
    console.log(`Cantidad de comida disponible para alimentar:`, cantComidaDisp);
    console.log(`Cantidad de comida recomendada para alimentar:`, cantComidaRecomendada);
    console.log(`Cantidad de comida suficiente?`, suficienteComida);
    console.log(`Tenes permiso de Hagrid?`, tengoPermiso);
    console.log(`Podes alimentarlo?`, puedoAlimentarAlAnimal);
    console.log(`Es seguro alimentar al ${TIPO_ANIMAL}:`,esSeguroAlimentar);

    /* console.log(Math.random()); */// 0-1(menor que <)
    console.log(`Viendo informe, queres alimentar al ${TIPO_ANIMAL} ${animalEncontradoNombre}?  1 para si y 0 para no` );
    quiereAlimentar = Boolean(Number(leer()));
    // es true si no resulte herido, caso contrario false
    estadoAtaque = Math.random() <= PROBABILIDAD_ATAQUE;
    console.log("Resultado de ataque aleatorio", estadoAtaque);
    estadoResultadoFinal = quiereAlimentar && (esSeguroAlimentar || !(estadoAtaque)) ;
    console.log("Resultado final:", estadoResultadoFinal);
}


main();