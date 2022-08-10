//Creamos un arreglo de estudiantes para luego poder trabajar con el
var estudiantes = ["Marcia", "Roxana", "Waskar", "Brayan", "Eliab"];

//Creamos una funcion para saludar a los estudiantes de mi arreglo, recibiendo como para el estudiante
function saludar(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

//Creo una condicion que cuando el arreglo sea mayor a 0 el pueda saludar 
while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift(); //Me permite remover un atributo de mi arreglo pero al inicio
    saludar(estudiante); //llamo a la funcion saludar si la condicion se cumple
}