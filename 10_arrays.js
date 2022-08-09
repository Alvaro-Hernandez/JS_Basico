var frutas = ["Manzana", "Platano", "Fresa", "Pera"];

//Para verlo en la consola de mi navegador todo mi arreglo
console.log(frutas);

//Para ver en la consola de mi navegador la longitud de mi arreglo
console.log(frutas.length);

//Para ver en la consola de mi navegador un elemento de todo mi arreglo
consola.log(frutas[2]);
//Fresa

//Para Mutar mi arreglo en la consola de mi navegador
//Para agregar mas elementos a mi arreglo principal => push("elementos");
var masfrutas = frutas.push("Uvas");

//Para eliminar elementos a mi arreglo principal => pop("elementos");
var ultimafruta = frutas.pop("Uvas");

//Para agregar un elemento a mi arreglo pero al inicio del mismo => unshift("elementos");
var nuevaFruta = frutas.unshift("Uvas");

//Para eliminar el elemento pero del inicio del arreglo => shift("elementos");
var adiosfruta = frutas.shift("Uvas");

//Para mutar el arreglo, para saber la posicion del elemento que le mandemos => indexOf("elementos");
var posicionFruta = frutas.indexOf("Platano");