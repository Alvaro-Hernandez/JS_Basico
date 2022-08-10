//Creamos un arreglo en este caso de profesores con el cual vamos a trabajar
var profesores = ["Eliab", "Sergio", "Rosa", "Marcia"];

//Creamos una funcion para saludar a estos profesores del arreglo que tengo en uso
function saludarProf(profesore) {
    console.log(`Hola, ${profesore}`);
}

//Creamos un for para recorrer el arreglo y saludar a los profesores
for( var i=0; i<profesores.length; i++) {
    saludarProf(profesores[i]);
}

//Creamos un for creando una variable sigular del plural del arreglo, en pocas palabras profesores es 0 de 4 profesores
for(var profesor of profesores) {
    saludarProf(profesor);
}