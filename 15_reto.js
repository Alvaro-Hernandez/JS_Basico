//Reto poder guardar 30 autos con la funcion constructora, hacerlo de una manera mas rapida, usando
//Condiciones, Loops para poder llegar a tu respuesta.
var saveGuard = 30; //Creo una variable que contenga los autos que me piden que voy a guardar
let autos = []; //Creo un arreglo para guardar cada auto que ingrese el usuario
let regAuto = 0; // Y con esto llevo el control de cuantos autos se han registrado en mi arreglo

//Creo una funcion constructora para poder saber que datos van a tener mis objetos que voy a guardar
//En mi arreglo
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//Creo un for que recorra desde 1 hasta el indici de todos los autos que se van a guardar
for(var i = 1; i <= saveGuard; i++) {
    //creo variables para guardar los datos que ingrese el usuario en tipos let en los 
    //cuales su valor puede cambiar
    let marca = prompt([i],"Ingresa la Marca");
    let modelo = prompt([i],"Ingresa el Modelo");
    let annio = prompt([i],"Ingresa el Año");

    //Aqui comienzo a guardar todos los datos en mi arreglo con el metodo "unshift" para que el
    //ultimo ingresado sea el primero ademas creando un nuevo objeto con los datos que recibo del usuario
    autos.unshift( new auto(marca, modelo, annio));

    //Esta variable se incrementa cada vez que se guarda los objetos en el arreglo
    regAuto ++;
    //Imprimo en pantalla para saber por que registro de automovil voy
    console.log(`Auto registrado: ${regAuto}`);
}

//Creo un for para recorrer el arreglo para que me muestro todos los autos registrados
for(var i=0; i< autos.length; i++){
    console.log(autos[i]);
}
