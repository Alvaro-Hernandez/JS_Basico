// Esto nos ayudará para poder hacer decisiones.

var esUsuario = true; 

if(esUsuario) {  // con el if validamos que la condición sea true
    console.log('Tiene acceso al contenido'); 
}

// Presentamos el else 

var esUsuario = false; 

if(esUsuario) {
    console.log('Tiene acceso al contenido'); 
} else {
    console.log('Tienes que crear una cuenta para poder acceder al contenido');
}

// Ejemplo de cómo haríamos una validación

var edad = 18; 
var accion; 

if(edad >= 18) {
    accion = 'Puede votar'
} else { // call back 
    accion = 'No puede votar'
}

console.log(accion);

// Ejemplo de cómo utilizaremos el else if

var edad = 18; 
var accion;  

if(edad === 18) {
    accion = 'Puede votar, será su 1ra votación'
} else if(edad > 18) { 
    accion = 'Puede votar'
} else { // call back 
    accion = 'Aun no puede votar'
}

console.log(accion);



/* ================================================================ */ 

// Operador ternario 

var numero = 1; 
var resultado; 

if(numero === 1) {
    resultado = 'Sí son un 1'; 
} else {
    resultado = 'No soy un 1'; 
}

condition ? true : false; 

var numero = 1; 
var resultado = numero === 1 ? 'Sí son un 1' : 'No soy un 1';

console.log(resultado);


// ==============================


// Ejercicio, reaizar un piedra, papel o tijeras, utilizando condicionales, una funcion que reciba el parametro con el que vamos a jugar, y me regrese si gane o perdí. 

/*  
Variables piedra, papel y tiejeras 
una funcion que utilice cindicionales para validar si el parametro que le estoy pasando gana o pierde. 
y que la funcion al final me regrese el resultado de si gané, o  perdí. 
*/ 

var numero = 2;
switch (numero) {
    case 2:
        console.log("Soy dos");
        break;
    case 10:
        console.log("Soy diez");
        break;
    case 200:
        console.log("Soy un Docientos");
        break;
    default:
        console.log("No soy nadie JAJAJ");
        break;
}

//Juego de Piedra Papel o Tijera
alert("Vamos a  Jugar, Piedra Papel o Tijera");
var tomar  = prompt("Ingresa tu opción: piedra, papel o tijera "); 
var user = tomar.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];


// let numero = 'a';
//con true los casos van a pasar 
switch (true) {
    case (user === machine):
        console.log('es un empate');
        break;
    case (machine === 'piedra' && user === 'papel'):
        console.log('Ganaste')
        break;
    case (machine === 'papel'  && user === 'tijera'):
        console.log('Ganaste')
        break;
    case (machine === 'tijera' && user === 'piedra'):
        console.log('Ganaste')
        break;
    default:
        console.log('¡Perdiste!');       
}

