//Vamos a crear objetos de manera mas profesional
//Con esto tengo mi funcion con los parametros que mi objeto tenga, luego ocupo "this" para mi referencia a la propiedad de mi objeto
function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

//Vamos a crear un objeto teniendo como template la funcion constructor que hemos creado
// Llenando los parametros que esta funcion esta esperando
var miAuto = new auto("Lamborguini", "Murcielago", 2022);

var autoNew = new auto("Tesla", "Modelo 3", 2020);

var autoNew3 = new auto("Ferrari", "GTX34", 2021);
