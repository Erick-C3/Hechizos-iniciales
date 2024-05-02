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

const caramelosNombres = [
    CARAMELO_NOMBR_1,
    CARAMELO_NOMBR_2,
    CARAMELO_NOMBR_3,
    CARAMELO_NOMBR_4,
    "chicle de menta",
    "asdasdsad"
];
const caramelosPrecio = [
    CARAMELO_PRECIO_1,
    CARAMELO_PRECIO_2,
    CARAMELO_PRECIO_3,
    CARAMELO_PRECIO_4,
    10,
    34
]

const CANT_CARAMELOS_USAR = caramelosNombres.length;

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
function ofrecerCantCompraDe(nombre, precio) {
    console.log("Cuantos ", nombre, " queres? valen", precio, UNIDAD_MONEDA);
    return leer();
}

/**
 * Muestra el informe de la compra realizada
 * @param {Array<Number>} comprasSolicitadas de los caramelos
 */
function informeCompra(comprasSolicitadas) {
    console.log("Informe de compra");
    for (let i = 0; i < CANT_CARAMELOS_USAR; i++) {
        console.log("Compraste", comprasSolicitadas[i] ,"de", caramelosNombres[i]);
    }
}

/**
 * Calcula el precio total de la compra
 * @param {Number} cant1 del primer caramelo
 * @param {Number} cant2 del segundo caramelo
 * @param {Number} cant3 del tercer caramelo
 * @param {Number} cant4 del cuarto caramelo
 * @returns el precio total del a compra
 */
function calcularPrecioTotalDe(comprasRealizadas) {
    let resultadoTotal = 0;
    for (let i = 0; i < CANT_CARAMELOS_USAR; i++) {
        resultadoTotal = resultadoTotal + (comprasRealizadas[i]*caramelosPrecio[i]);        
    }
    return resultadoTotal;
}

function main() {
    let cantCompras=[DEF_CANT_COMPRADA,DEF_CANT_COMPRADA,DEF_CANT_COMPRADA,DEF_CANT_COMPRADA]
    let precioTotal = DEF_PRECIO_TOTAL;
    saludoVendedor();
    actualizarCompras(cantCompras);
    informeCompra(cantCompras);
    precioTotal = calcularPrecioTotalDe(cantCompras);
    console.log("El total es", precioTotal, UNIDAD_MONEDA);
}


main();

function actualizarCompras(cantCompras) {
    for (let i = 0; i < CANT_CARAMELOS_USAR; i++) {
        cantCompras[i] = ofrecerCantCompraDe(caramelosNombres[i], caramelosPrecio[i]);
    }
}
