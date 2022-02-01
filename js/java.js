/*QUIERO REALIAR UNA SECCIÓN DONDE EL USUARIO PUEDA COMPRAR PRODUCTOS (EN ESTE CASO GUITARRA) Y, ADEMÁS, LOS MISMOS SE GUARDEN EN EL STOCK. 
A SU VEZ, QUIERO QUE LOS MISMOS SALGAN DEL STOCK CUANDO EL CLIENTE LOS COMPRE. QUIERO TAMBIÉN GENERAR UN CARRITO
 DE COMPRAS*/

//  Variables
let precioGuitar = 320000;

// Clases para objetos

class Guitar {
    constructor (marca, modelo, color, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.precio = parseInt(precio);
    }
}
// Incorporo estructura de if
alert("Contamos con las reconocidas guitarras de Angus Young: Gibson SG")
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
}


//  Comienzo a incorporar los Arrays
const guitarras = [];
guitarras.push(guitar1);
guitarras.push(new Guitar("Gibson", "SG", "marrón", "300000"));
guitarras.push(new Guitar("Gibson", "SG", "blanca y negra", "150000"))
guitarras.push(new Guitar("Gibson", "SG", "roja", "600000"));
guitarras.push(new Guitar("Gibson", "SG", "negra", "130000"))
for(const producto of guitarras) {
    alert("Guitarra "+ producto.marca + " " + producto.modelo + ", de color " + producto.color + ".");
};

// const productos = [{ id: 1, producto: "Arroz" },
//                   { id: 2,  producto: "Fideo" },
//                   { id: 3,  producto: "Pan" }];

// for (const producto of productos) {
//     alert(producto.id);
//     alert(producto.producto);
// }
