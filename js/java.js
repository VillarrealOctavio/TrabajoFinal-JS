/*QUIERO REALIAR UNA SECCIÓN DONDE EL USUARIO PUEDA COMPRAR PRODUCTOS Y, ADEMÁS, LOS MISMOS SE GUARDEN EN EL STOCK. 
A SU VEZ, QUIERO QUE LOS MISMOS SALGAN DEL STOCK CUANDO EL CLIENTE LOS COMPRE. QUIERO TAMBIÉN GENERAR UN CARRITO
 DE COMPRAS*/

//  Funciones

 function  precioFinal (parametro1, parametro2) {
     return parametro1 * parametro2;
 }
 function iva (parametro1) {
    return parametro1*1.21;
 }

// Clases para objetos

class Guitar {
    constructor (marca, modelo, color, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.precio = parseInt(precio);
    }
    ventaIva () {
        this.precio = this.precio*1.21;
    }
}
//  Comienzo a incorporar los Arrays
const guitarras = [];
guitarras.push(new Guitar("Gibson", "SG", "negro", "300000"));
guitarras.push(new Guitar("Fender", "Telecaster", "Amarilla", "150000"))
guitarras.push(new Guitar("Gibson", "LesPaul", "Roja", "600000"));
guitarras.push(new Guitar("Fender", "Stratocaster", "negra", "130000"))
alert(guitarras);

for(const producto of guitarras) {
    producto.ventaIva();
    alert(producto);
};