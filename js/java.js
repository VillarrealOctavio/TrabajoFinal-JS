/*QUIERO REALIAR UNA SECCIÓN DONDE EL USUARIO PUEDA COMPRAR PRODUCTOS (EN ESTE CASO GUITARRA) Y, ADEMÁS, LOS MISMOS SE GUARDEN EN EL STOCK. 
A SU VEZ, QUIERO QUE LOS MISMOS SALGAN DEL STOCK CUANDO EL CLIENTE LOS COMPRE. QUIERO TAMBIÉN GENERAR UN CARRITO
 DE COMPRAS*/

//  Variables
/*let precioGuitar = 320000;

// Clases para objetos

class Guitar {
    constructor (marca, modelo, color, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.precio = parseInt(precio);
    }
}*/
// Incorporo estructura de if
/*alert("Contamos con las reconocidas guitarras de Angus Young: Gibson SG")
let pregunta = prompt("¿Desea comprar una?")
pregunta.toLowerCase
if(pregunta=="si") {
    let guitar1 = new Guitar ("Gisbon", "SG", prompt("Ingrese el color deseado"), precioGuitar) 
alert(guitar1)
}else if(pregunta=="no"){
    alert("¿Quiere volver a la página principal?")
}else {
    alert("El valor ingresado es incorrecto. Vuelva a ingresar.")
    pregunta=prompt("¿Desea comprar una?")
}*/


//  Comienzo a incorporar los Arrays
/*const guitarras = [];
guitarras.push(new Guitar("Gibson", "SG", "marrón", "300000"));
guitarras.push(new Guitar("Gibson", "SG", "blanca y negra", "150000"))
guitarras.push(new Guitar("Gibson", "SG", "roja", "600000"));
guitarras.push(new Guitar("Gibson", "SG", "negra", "130000"))
for(const producto of guitarras) {
    alert("Guitarra "+ producto.marca + " " + producto.modelo + ", de color " + producto.color + ".");
};

*/































//  Ahora realizaremos un carrito de remeras de la banda 
// variables 

let shirt = "";
let comprar = "";
let angusShirt = 1500;
let acdcShirt = 2000;
let guitarShirt = 1000;
let estampadoRemera = "";
let cantidad = 0;
let maxDeCompra = 5;

// función
function precioFinal (precio, cantidad){
    return (precio*1.21)*cantidad
} 

//arrays 

let carritoRemeras = [];
// clases 

class Shirt {
    constructor (talla, color, estampado) {
        this.talla = talla;
        this.color =  color;
        this.estampado = estampado;
    }
}
let comprar = prompt("¿Quiere comprar una remera de la banda?")
comprar.toLowerCase
while (comprar==si) {
    let shirt = new Shirt (prompt("Ingrese su talla"), prompt("Ingrese el color de remera elegido"), prompt("Quiere usted incluir un estampado en su remera").toLowerCase); 
        if (this.estampado == si) {
            alert("Tenemos estampados de Angus, de la Banda y de una guitarra.")
            estampadoRemera=prompt("Ingrese angus, guitarra o banda según su elección");
        }else {
            alert("Usted no quiere estampado en su remera")
        }

    carritoRemeras.push(shirt)
    comprar=prompt("¿Desearia realizar otra compra?")
}
for (const shirtProduct of carritoRemeras) {
    alert("Los datos de su remera son los siguientes: talla " + shirtProduct.talla + ", color " + shirtProduct.color + " y con estampado de " + estampadoRemera + ".")
}

if (estampadoRemera=="angus") {
    estampadoRemera=angusShirt;
    alert("El precio de la remera en forma individual es de $"  + angusShirt)
}else if (estampadoRemera=="banda"){
    estampadoRemera=acdcShirt;
    alert("El precio de la remera en forma individual es de $" + acdcShirt)

}else {
    estampadoRemera=guitarShirt;
    alert("El precio de la remera en forma individual es de $" + guitarShirt)
}
cantidad = parseInt(prompt("Cuantas remeras desea llevarse"))
alert("El precio final de su compra es de $" + precioFinal(estampadoRemera, cantidad))
