//Vamos a crear un arreglo pero de objetos para luego poder recorrerlo con algunos metodos a continuacion

var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Television", costo: 20000},
    {nombre: "Libro", costo: 320},
    {nombre: "Tablet", costo:10000},
    {nombre: "PC", costo:40000},
    {nombre: "LaptopGam", costo:50000},
    {nombre: "Audifonos", costo:800},
    {nombre: "🏘️", costo:15000}
];

//Metodo: filter(); esto valida si esto es verdad o falso, este no modifica el arreglo padre, crea un nuevo arreglo

var articulosFilter = articulos.filter(function (articulo) {
        return articulo.costo <= 800;
    }
);

//Esto me retornaria en el nuevo arreglo solo Libro y Audifonos

//Metodo: map(); este me ayuda a mapear ciertos articulos, este no modifica el arreglo padre, crea uno nuevo arreglo

var articuFil = articulos.map(function (articulo) {
        return articulo.nombre;
    }
);

//Esto retornaria lo unico que le estoy pidiendo que es que me retorne los nombres de todos los objetos del arreglo


//Metodo find(); nos permite encontrar algo dentro de nuestro arreglo con un false o un true, este genera un nuevo arreglo y no modifica al padre

//Vamos a validar haber si existe en un nuevo arreglo
var encuentraArt = articulos.find(function (articulo){
        return articulo.nombre === "Bici";
    }
);

//Metodo forEach(); nos permite recorrer el arreglo con un parametro y filtra, este no crea un arreglo solo lo recorre y no lo modificar

articulos.forEach(function (articulo){
        console.log(articulo.nombre);
    }
);

//Metodo some(); nos permite recibir un parametro verdadero o falso con una validacion antes, este crea un nuevo arreglo y no modifica el arreglo original

var articulosbarat = articulos.some(function (articulo){
        return articulo.costo <= 900;
    }
);

