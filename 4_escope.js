//Scope Global : todo el mundo.
//Scope Local : Las Vegas, y lo que pasa en las vegas, se queda en Las Vegas.

/* Global -> Universo , seria como el todo , las variables son accesibles desde cualquier 
parte del código.

Local -> Cada Planeta , un mundo distinto , las variables son accesibles en ese mundo , 
no es visible para los demás mundos.

Resumen : lo que es global se puede acceder desde cualquier parte de tu código 
, y lo pueden acceder cada mundo , lo que es local solo lo puede acceder cada mundo.😁 */

/*  Ejemplo del universo, un sistema solar, y un planeta.  */ 


// Scope es igual a, donde buscar por cosas (estás cosas son las variables), el Scope es el alcance que tienen las variables, depende de donde las declaremos y las mandamos llamar si tendremos acceso a ellas o no.

// Tenemos dos tipos de Scope, Scope Global y Scope Local.

// ===============

// Ejemplo de lo que es un Scope Global

var miNombre = "Diego"; 

function nombre() {
    miNombre = "Alonso";
    return miNombre;
}

nombre();

console.log(miNombre);

// Ejemplo de lo que es un Scope Local, el Scope local pasa al momento de crear una funcion, esto genera un ámbito diferente al global, al cual no se podrá tener acceso desde el ámbito global 

var miNombre = "Diego"

function nombre() {
    var miApellido = "De Granda"; 
    return miNombre + " " + miApellido 
}

nombre();

console.log(miNombre);
console.log(miApellido);

//  Ejemplos de como puede ayuar o crear error el tema del scope. 

// Ejemplo 1, cómo con una funcion podemos vambiar el valor de la variable global
var miNombre = "Alvaro"

function nombre(usuario) {
    miNombre = usuario;
    console.log(miNombre); 
}

nombre("Oscar");

console.log(`Hola ${miNombre}, cómo estás?`);


// Ejemplo 2, cómo podemos evitar reescribir el valor de una variable gracias al scope,
var miNombre = "Alvaro"

function nombre(usuario) {
    var miNombre = usuario;
    console.log(miNombre); 
}

nombre("Marcia");

console.log(`Hola ${miNombre}, cómo estás?`);

// Ejemplo 3, cómo si creamos un scope local, y mandamos llamar la variable fuera de la funcion, nos puede crear un problema. 

function nombre(usuario) {
    var miNombre = usuario;
    console.log(miNombre); 
}

nombre("Marcia");

console.log(`Hola ${miNombre}, cómo estás?`);