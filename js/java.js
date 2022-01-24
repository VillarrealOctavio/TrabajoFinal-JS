// FUNCIONES
function msjIntro () {
    alert("A ROCKEAR");
};
function msjError () {
    alert("El valor ingresado NO es correcto");
}
function noProduct () {
    alert("El item buscado no se encuentra em la lista")
}
function suma (num1 , num2) {
    return num1 + num2;
};
function  multi (num1, num2) {
    return num1 * num2;
};
function iva (iva) {
    return iva * 0.21;
}



//VARIABLES GENERALES 
let ticket= 15000; 
let record = 7000;
let shirt = 2700;
let bowl = 600;
let cantidad = 0;






// CÓDIGO DE BIENVENIDA

alert("Bienvenido/a a la página oficial de AC-DC");
alert("Aqui, usted puede gestionar su inscripción como socio o comprar nuevos productos de la banda");


// OPERACIONES DE COMPRA O DE BÚSQUEDA

alert("¿Usted desea afiliarse o comprar productos?")
let product = parseInt(prompt("Si quiere comprar productos, presione 1. Si quiere afiliarse, presione 2"));
while(product == "") {
    msjError();
    product = parseInt(prompt("Si quiere comprar productos, presione 1. Si quiere afiliarse, presione 2"));
}


if (product == 1) {
    alert("Usted ha deseado comprar productos");
} else if(product==2) {
    alert("Usted desea afiliarse");
}else {
    alert("El valor ingresado no es correcto");
}



// CÓDIGO PARA AFILIACIÓN 

let user = prompt("Ingrese su nombre de usuario.");
let contra = prompt("Ingrese una contraseña");
while (user == "" || contra == "") {
    alert("La contraseña y/o el usuario son incompletos");
    user = prompt("Ingrese su nombre de usuario.");
    contra = prompt("Ingrese una contraseña");
}
alert("Bienvenido/a " + user + "!")
msjIntro ();



/*CÓDIGO PARA COMPRA DE PRODUCTOS (DISCOS Y ENTRADAS) Tengo una duda en este ejercicio que me traba el cógido.
Quiero realizar una operación en donde me calcule la cantidad, el precio del producto y, además, el IVA. Me confundo
a la hora de generar las variables y las funciones en este ejercicio.*/

        alert ("Ha ingresado al area de compra.");
        alert("Nuestra mercadería es la siguiente: entradas, remeras, discos y tazas");
        let mercaderia = prompt("Ingrese el producto que desea comprar");
        cantidad = parseInt(prompt("Ingrese la cantidad a comprar"));
        switch(mercaderia) {
            case "entrada":
                alert("Su precio es de $" + ticket);
            break;
            case "remera":
                alert("Su precio es de $" + shirt);
            break;
            case "disco":
                alert("Su precio es de $" + record);
            break;
            case "taza":
                alert("Su precio es de $" + bowl);
            break;
            default:
            alert("El producto ingresado no se encuentra en la lista")
            break;
        }
        let rdoSinIva = multi ()
        
        


   

// CÓDIGO PARA BÚSQUEDA (esto sería en otra página aparte del index)

alert("Los albumes que tenemos son: Highway to Hell, Back in Black, Who Made Who, Power Up, For those about to Rock, Let there be Rock, High Voltage, Live at River Plate")
let album = prompt("Ingrese algun album");
album.toLocaleLowerCase
while(album == "") {
    msjError ();
    album = prompt("Ingrese un album");
};
switch (album) {
    case "highway to hell":
        alert("Has elegido el album de Highway to Hell")
    break;
    case "back in black":
        alert("Has elegido el album de Back in Black")
    break;
    case "who made who":
        alert("Has elegido el album de Who Made Who")
    break;
    case "power up":
        alert("Has elegido el album de Power Up")
    break;
    case "for those about to rock":
        alert("Has elegido el album de For those about to Rock")
    break;
    case "let there be rock":
        alert("Has elegido el album de Let there be Rock")
    break;
    case "high voltage":
        alert("Has elegido el album de High Voltage")
    break;
    case "live at river plate":
        alert("Has elegido el album de Live at River Plate")
    break;
    default:
        noProduct();
    break;
};