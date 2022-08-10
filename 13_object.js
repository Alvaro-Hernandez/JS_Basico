//Asi se crea un objeto en Javascript
var miAuto = {
    marca: "Lamborguini",
    modelo: "Murcielago",
    // la letra "ñ" es un caracter especial y el lenguaje no se entiende asi que ocupamos doble "n"
    annio: 2022,
    //vamos a crear una funcion en nuestro objeto
    detalleAuto: function (){
        console.log(`Auto ${this.modelo}, ${this.marca}`);
    }
};

//Para acceder a un atributo del objeto lo llamamos al objeto y el atributo que deseamos
//Vamos a llamar la marca de mi auto
console.log(miAuto.marca);
//Vamos a llamar el año de mi auto
console.log(miAuto.annio);

//Para llamar la funcion de nuestro objeto lo hacemos casi de la misma forma que lo hacemos como
// con un atributo, solo que este atributo que vamos a llamar es una funcion y debe llamarse como lo que es "Una funcion"
miAuto.detalleAuto()