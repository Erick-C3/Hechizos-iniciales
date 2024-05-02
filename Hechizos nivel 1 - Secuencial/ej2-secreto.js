const leer = require("prompt-sync")();

const NOMBRE_TREN = "Expreso de Hogwarts";
const UNIDAD_MONETARIA = "Galeón";

const CARAMELO_NOMBRE_1 = "Caramelos de Calabaza";
const CARAMELO_PRECIO_1 = 2;
const CARAMELO_NOMBRE_2 = "Sapos de Chocolate";
const CARAMELO_PRECIO_2 = 3;
const CARAMELO_NOMBRE_3 = "Grageas de Todos los Sabores";
const CARAMELO_PRECIO_3 = 1;
const CARAMELO_NOMBRE_4 = "Grageas de Limón";
const CARAMELO_PRECIO_4 = 2;
const CARAMELO_NOMBRE_5 = "Chicle de menta";
const CARAMELO_PRECIO_5 = 5;

const caramelosNombres = [
    CARAMELO_NOMBRE_1,
    CARAMELO_NOMBRE_2,
    CARAMELO_NOMBRE_3,
    CARAMELO_NOMBRE_4,
    CARAMELO_NOMBRE_5,
    "nuevo caramelo",
    "otro nuevo caramelo"
];
const caramelosPrecio = [
    CARAMELO_PRECIO_1,
    CARAMELO_PRECIO_2,
    CARAMELO_PRECIO_3,
    CARAMELO_PRECIO_4,
    CARAMELO_PRECIO_5,
    10,
    7
]

const CANT_CARAMELOS = caramelosNombres.length;

const DEF_CANT_COMPRADA = 0;



function main() {
    let cantidadesCompradas = [DEF_CANT_COMPRADA, DEF_CANT_COMPRADA, DEF_CANT_COMPRADA, DEF_CANT_COMPRADA]
    darBienvenida();
    for (let i = 0; i < CANT_CARAMELOS; i++) {
        cantidadesCompradas[i] = ofrecerCaramelo(caramelosNombres[i], caramelosPrecio[i]);
    }
    mostrarInformeCompra(cantidadesCompradas);
}




/**
 * Da la bienvenida al usuario
 */
function darBienvenida() {
    console.log("Bienvenido al", NOMBRE_TREN, "donde se venden deliciosos caramelos");
}


/**
 * Muestra el precio final de compra
 * @param {Array<Number>} cantidadesCompradas de los caramelos
 */
function muestraPrecioFinal(cantidadesCompradas) {
    let precioFinal = 0;
    for (let i = 0; i < cantidadesCompradas.length; i++) {
        precioFinal = precioFinal + cantidadesCompradas[i] * caramelosPrecio[i] ;
    }
    console.log("El total es", precioFinal, UNIDAD_MONETARIA);
}

/**
 * Muestra un informe de la compra realizada
 * @param {Array<Number>} cantSolicitada del los caramelos a comprar
 */
function mostrarInformeCompra(cantSolicitada) {
    console.log("Informe de compra");
    for (let i = 0; i < cantSolicitada.length; i++) {
        console.log("Compraste", cantSolicitada[i], caramelosNombres[i]);
    }
    muestraPrecioFinal(cantSolicitada);
}


/**
 * Ofrece un caramelo al usuario y devuelve la cantidad comprada
 * @param {String} nombre del caramelo
 * @param {Number} precio del caramelo
 * @returns cantidad comprada del caramelo
 */
function ofrecerCaramelo(nombre, precio) {
    console.log("Cuántos caramelos queres de", nombre, "? [" + precio, UNIDAD_MONETARIA + "]");
    return Number(leer());
}








main();