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

const DEF_CANT_COMPRADA = 0;



function main() {
    let cantComprada1 = DEF_CANT_COMPRADA;
    let cantComprada2 = DEF_CANT_COMPRADA;
    let cantComprada3 = DEF_CANT_COMPRADA;
    let cantComprada4 = DEF_CANT_COMPRADA;
    darBienvenida();
    cantComprada1 = ofrecerCaramelo(CARAMELO_NOMBRE_1, CARAMELO_PRECIO_1);
    cantComprada2 = ofrecerCaramelo(CARAMELO_NOMBRE_2, CARAMELO_PRECIO_2);
    cantComprada3 = ofrecerCaramelo(CARAMELO_NOMBRE_3, CARAMELO_PRECIO_3);
    cantComprada4 = ofrecerCaramelo(CARAMELO_NOMBRE_4, CARAMELO_PRECIO_4);
    mostrarInformeCompra(cantComprada1, cantComprada2, cantComprada3, cantComprada4);
}




/**
 * Da la bienvenida al usuario
 */
function darBienvenida() {
    console.log("Bienvenido al", NOMBRE_TREN, "donde se venden deliciosos caramelos");
}


/**
 * Muestra el precio final de compra
 * @param {Number} cantCompr1 del caramelo
 * @param {Number} cantCompr2 del caramelo
 * @param {Number} cantCompr3 del caramelo
 * @param {Number} cantCompr4 del caramelo
 */
function muestraPrecioFinal(cantCompr1, cantCompr2, cantCompr3, cantCompr4) {
    let precioFinal = cantCompr1 * CARAMELO_PRECIO_1 + cantCompr2 * CARAMELO_PRECIO_2 +
    cantCompr3 * CARAMELO_PRECIO_3 + cantCompr4 * CARAMELO_PRECIO_4;
    console.log("El total es", precioFinal, UNIDAD_MONETARIA);
}

/**
 * Muestra un informe de la compra realizada
 * @param {Number} cant1 del caramelo comprado
 * @param {Number} cant2 del caramelo comprado
 * @param {Number} cant3 del caramelo comprado
 * @param {Number} cant4 del caramelo comprado
 */
function mostrarInformeCompra(cant1, cant2, cant3, cant4) {
    console.log("Informe de compra");
    console.log("Compraste", cant1, CARAMELO_NOMBRE_1);
    console.log("Compraste", cant2, CARAMELO_NOMBRE_2);
    console.log("Compraste", cant3, CARAMELO_NOMBRE_3);
    console.log("Compraste", cant4, CARAMELO_NOMBRE_4);
    muestraPrecioFinal(cant1, cant2, cant3, cant4);
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