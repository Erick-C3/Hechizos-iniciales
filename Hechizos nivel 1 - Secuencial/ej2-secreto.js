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
const DEF_PRECIO_FINAL = 0;

function main() {
    let cantComprada1 = DEF_CANT_COMPRADA;
    let cantComprada2 = DEF_CANT_COMPRADA;
    let cantComprada3 = DEF_CANT_COMPRADA;
    let cantComprada4 = DEF_CANT_COMPRADA;
    let precioFinal = DEF_PRECIO_FINAL;

    console.log("Bienvenido al", NOMBRE_TREN, "donde se venden deliciosos caramelos");
    console.log("Cuántos caramelos queres de", CARAMELO_NOMBRE_1,"? ["+CARAMELO_PRECIO_1,UNIDAD_MONETARIA+"]");
    cantComprada1 = Number(leer());
    console.log("Cuántos caramelos queres de", CARAMELO_NOMBRE_2,"? ["+CARAMELO_PRECIO_2,UNIDAD_MONETARIA+"]");
    cantComprada2 = Number(leer());
    console.log("Cuántos caramelos queres de", CARAMELO_NOMBRE_3,"? ["+CARAMELO_PRECIO_3,UNIDAD_MONETARIA+"]");
    cantComprada3 = Number(leer());
    console.log("Cuántos caramelos queres de", CARAMELO_NOMBRE_4,"? ["+CARAMELO_PRECIO_4,UNIDAD_MONETARIA+"]");
    cantComprada4 = Number(leer());

    console.log("Informe de compra");
    console.log("Compraste",cantComprada1,CARAMELO_NOMBRE_1);
    console.log("Compraste",cantComprada2,CARAMELO_NOMBRE_2);
    console.log("Compraste",cantComprada3,CARAMELO_NOMBRE_3);
    console.log("Compraste",cantComprada4,CARAMELO_NOMBRE_4);
    precioFinal = cantComprada1 * CARAMELO_PRECIO_1 + cantComprada2 * CARAMELO_PRECIO_2 + 
    cantComprada3 * CARAMELO_PRECIO_3 + cantComprada4 * CARAMELO_PRECIO_4;
    console.log("El total es", precioFinal, UNIDAD_MONETARIA);
}


main();