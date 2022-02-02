/*QUIERO REALIAR UNA SECCIÓN DONDE EL USUARIO PUEDA COMPRAR PRODUCTOS (EN ESTE CASO GUITARRA) Y, ADEMÁS, LOS MISMOS SE GUARDEN EN EL STOCK. 
A SU VEZ, QUIERO QUE LOS MISMOS SALGAN DEL STOCK CUANDO EL CLIENTE LOS COMPRE. QUIERO TAMBIÉN GENERAR UN CARRITO
DE COMPRAS*/
function precioFinal (parametro1, parametro2){
    return alert((parametro1*1.21)*parametro2)
}
function despedida () {
    alert("Gracias por su compra!")
}
alert("Bienvenido al área de compras de guitarras")
let ingresar = prompt("¿Desea usted comprar una guitarra? Ingresar si o no")
ingresar.toLowerCase
while(ingresar==""){
    alert("El valor ingresado es incorrecto")
    ingresar=prompt("¿Desea usted comprar una guitarra? Ingresar si o no")
}
if(ingresar=="si") {
    alert("Continúe")
}else {
    alert("Entonces puede mirar las mismas y buscar")
}
class Guitar {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}
const guitarra = new Guitar (1, "Gibson SG", 250000)
const guitarra1 = new Guitar (2, "Gisbon LesPaul", 300000)
const guitarra2 = new Guitar (3, "Fender Stratocaster", 150000)
const guitarra3 = new Guitar (4, "Fender Telecaster", 200000)
const guitarra4 = new Guitar (5, "Gibson SG Standard", 400000)
const guitarra5 = new Guitar (6, "Gisbon LesPaul 1956", 500000)
const guitarra6 = new Guitar (7, "Fender Stratocaster 1960", 350000)
const guitarra7 = new Guitar (8, "Fender Telecaster 2021", 230000)


const carritoGuitarras = [];

const BBDD = [
guitarra,
guitarra1,
guitarra2,
guitarra3,
guitarra4,
guitarra5,
guitarra6,
guitarra7
]
alert("A continuación se le presentará la lista de nuestras guitarras con sus respectivos precios.")
function mostrarProductos(){
    BBDD.forEach(element => {
        console.log(element)
        alert("id " + element.id + "- nombre " + element.nombre + "- precio " + element.precio + ".")
    });
}
mostrarProductos ();


let eleccionGuitarra = parseInt(prompt("Ingrese el id de la guitarra que desea comprar"))

// --------------------------------------------------
/*function ingresarCompra() {
    BBDD.find((el)=>el.id==eleccionGuitarra)
    carritoGuitarras.push(el)
}*/
// --------------------------------------------------



const compraRealizada = BBDD.find((el) => el.id === eleccionGuitarra)
carritoGuitarras.push(compraRealizada)

for (const el of carritoGuitarras){
    console.log(el);
    alert("Usted ha comprado una guitarra " + el.nombre + ".");
}
despedida();




// ---------------------------------------------------------------------------------------------------------------------------------------
// Este código lo dejo comentado. (Funciona bien pero hay que eliminar parte del código de arriba para que se ejecute correctamente.)
// function comprar (){
//     for (const el of BBDD){
//         carritoGuitarras.push(el);
//         console.log(carritoGuitarras);
//     }
// }
// comprar();
// function ordenarPrecios(){
//     BBDD.sort((a,b)=>{
//         return a.precio - b.precio
//     }) 
// }
// ordenarPrecios();
// console.log(BBDD);
// const masBarato = BBDD.filter((el)=>el.precio<320000);
// console.log(masBarato);



