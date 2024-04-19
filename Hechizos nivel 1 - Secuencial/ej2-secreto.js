const leer = require("prompt-sync")();

const NOMBRE_TREN = "Expreso de Hogwarts";
const UNIDAD_MONEDA ="Galeon";

const CARAMELO_NOMBR_1 = "Caramelos de Calabaza";
const CARAMELO_PRECIO_1 = 2;

const CARAMELO_NOMBR_2 = "Sapos de Chocolate";
const CARAMELO_PRECIO_2 = 3;

const CARAMELO_NOMBR_3 = "Grageas de Todos los Sabores";
const CARAMELO_PRECIO_3 = 1;

const CARAMELO_NOMBR_4 = "Grageas de Limón";
const CARAMELO_PRECIO_4 = 2;

const DEF_CANT_COMPRADA = 0;
const DEF_PRECIO_TOTAL = 0;

/**
 * Muestra por consola el saludo del vendedor
 */
function saludoVendedor() {
    console.log("Hola! Bienvenido al", NOMBRE_TREN, "donde se venden deliciosos caramelos.");
}

/**
 * Ofrece un caramelo
 * @param {String} nombre del caramelo
 * @param {Number} precio del caramelo
 * @returns la cantidad de caramelos a comprar por el usuario
 */
function preguntarCantCompraDe(nombre, precio) {
    console.log("Cuantos ", nombre, " queres? valen", precio, UNIDAD_MONEDA);
    return leer();
}

/**
 * Muestra el informe de la compra realizada
 * @param {Number} cant1 del primer caramelo
 * @param {Number} cant2 del segundo caramelo
 * @param {Number} cant3 del tercer caramelo
 * @param {Number} cant4 del cuarto caramelo
 */
function informeCompra(cant1, cant2, cant3, cant4) {
    console.log("Informe de compra");
    console.log("Compraste", cant1 ,"de", CARAMELO_NOMBR_1);
    console.log("Compraste", cant2 ,"de", CARAMELO_NOMBR_2);
    console.log("Compraste", cant3 ,"de", CARAMELO_NOMBR_3);
    console.log("Compraste", cant4 ,"de", CARAMELO_NOMBR_4);
}

/**
 * Calcula el precio total de la compra
 * @param {Number} cant1 del primer caramelo
 * @param {Number} cant2 del segundo caramelo
 * @param {Number} cant3 del tercer caramelo
 * @param {Number} cant4 del cuarto caramelo
 * @returns el precio total del a compra
 */
function calcularPrecioTotalDe(cant1, cant2, cant3, cant4) {
    return ((cant1 * CARAMELO_PRECIO_1) + (cant2 * CARAMELO_PRECIO_2) +
     (cant3 * CARAMELO_PRECIO_3) + (cant4 * CARAMELO_PRECIO_4));
    
}

function main() {
    let cantCompra1 = DEF_CANT_COMPRADA;
    let cantCompra2 = DEF_CANT_COMPRADA;
    let cantCompra3 = DEF_CANT_COMPRADA;
    let cantCompra4 = DEF_CANT_COMPRADA;
    let precioTotal = DEF_PRECIO_TOTAL;
    saludoVendedor();
    cantCompra1 = preguntarCantCompraDe(CARAMELO_NOMBR_1, CARAMELO_PRECIO_1);
    cantCompra2 = preguntarCantCompraDe(CARAMELO_NOMBR_2, CARAMELO_PRECIO_2);
    cantCompra3 = preguntarCantCompraDe(CARAMELO_NOMBR_3, CARAMELO_PRECIO_3);
    cantCompra4 = preguntarCantCompraDe(CARAMELO_NOMBR_4, CARAMELO_PRECIO_4);
    informeCompra(cantCompra1, cantCompra2, cantCompra3, cantCompra4);
    precioTotal = calcularPrecioTotalDe(cantCompra1, cantCompra2, cantCompra3, cantCompra4);
    console.log("El total es", precioTotal, UNIDAD_MONEDA);
}


main();