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

function main() {
    let cantCompra1 = DEF_CANT_COMPRADA;
    let cantCompra2 = DEF_CANT_COMPRADA;
    let cantCompra3 = DEF_CANT_COMPRADA;
    let cantCompra4 = DEF_CANT_COMPRADA;
    let precioTotal = DEF_PRECIO_TOTAL;

    console.log("Hola! Bienvenido al", NOMBRE_TREN, "donde se venden deliciosos caramelos.");

    console.log("Cuantos ", CARAMELO_NOMBR_1, " queres? valen", CARAMELO_PRECIO_1, UNIDAD_MONEDA);
    cantCompra1 = leer();
    console.log("Cuantos ", CARAMELO_NOMBR_2, " queres? valen", CARAMELO_PRECIO_2, UNIDAD_MONEDA);
    cantCompra2 = leer();
    console.log("Cuantos ", CARAMELO_NOMBR_3, " queres? valen", CARAMELO_PRECIO_3, UNIDAD_MONEDA);
    cantCompra3 = leer();
    console.log("Cuantos ", CARAMELO_NOMBR_4, " queres? valen", CARAMELO_PRECIO_4, UNIDAD_MONEDA);
    cantCompra4 = leer();

    console.log("Informe de compra");
    console.log("Compraste", cantCompra1 ,"de", CARAMELO_NOMBR_1);
    console.log("Compraste", cantCompra2 ,"de", CARAMELO_NOMBR_2);
    console.log("Compraste", cantCompra3 ,"de", CARAMELO_NOMBR_3);
    console.log("Compraste", cantCompra4 ,"de", CARAMELO_NOMBR_4);

    precioTotal = (cantCompra1 * CARAMELO_PRECIO_1) + (cantCompra2 *
    CARAMELO_PRECIO_2) + (cantCompra3 * CARAMELO_PRECIO_3) + (cantCompra4 * CARAMELO_PRECIO_4);
    console.log("El total es", precioTotal, UNIDAD_MONEDA);
}


main();