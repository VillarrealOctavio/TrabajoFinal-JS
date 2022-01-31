// COMIENZO A GENERAR MI ARCHIVO JS POR PARTES(esto es para no confundir)







// VARIABLES GENERALES
/*let rdoIva = 0;
let rdoFinal = 0;*/
let ticketPrice= 15000; 
let recordPrice = 7000;
let shirtPrice = 2700;
let bowlPrice = 600;
let cantidadPrice = 0;

// FUNCIONES
function msjIntro () {
    alert("A ROCKEAR");
};
function msjError () {
    alert("El valor ingresado NO es correcto");
};
function noProduct () {
    alert("El item buscado no se encuentra en la lista");
};
/*const iva = (parametro)=>parametro*0.21;*/
function iva (parametro) {
    rdo = parametro*0.21;
    alert("El precio incluye un IVA de $" + rdo + ".");
}
/*const rdoFinal = (parametro1, parametro2, parametro3) => (parametro1 + parametro2) - parametro3;*/
function rdoFinal (parametro1, parametro2, parametro3) {
    rdoFinal = (parametro1 + parametro2) - parametro3;
    alert("El precio final del producto es $" + rdoFinal + ".");
}

// AQUÍ VAMOS A INTRODUCIR OBJETOS MEDIANTE CLASES
class Guitarra {
    constructor (marca, modelo, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }
    eleccion (){
        alert("Tu has elegido una guitarra " + this.marca + ", modelo " + this.modelo + " y de color " + this.color + ".")
    }
}


class Record {
    constructor (nombre, cantidad) {
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
    eleccion (){
        if (this.cantidad > 1) {
            alert("Has escogido " + this.cantidad + " discos de " + this.nombre + ".")
        }else {
            alert("Has escogido " + this.cantidad + " disco de " + this.nombre + ".")
        }
    }
}


class Shirt{    //Tiene un error esta clase
    constructor (talla, color, estampado) {
        this.talla = talla;
        this.color = color; 
        this.estampado = estampado;
    }
    eleccion (){
        if(this.estampado == si) {
            alert("Usted ha elegido una remera de talla " + this.talla + ", de color " + this.color + " y con un estampado.")
        }else{
            alert("Usted ha elegido una remera de talla " + this.talla + ", de color " + this.color + " sin estampado.")
        }
    }
}


class Ticket {
    constructor (distancia, visita){
        this.distancia = distancia;
        this.visita = visita;
    }
    eleccion (){
        if(this.distancia == cerca && this.visita == si) {
            alert("Usted ha escogido una entrada con distancia " + this.distancia + ". Además, ha seleccionado visitar a la banda.")
        }else if (this.distancia == cerca && this.visita == no){
            alert("Usted ha escogido unicamente una entrada con distancia " + this.distancia + ".")
        }else if (this.distancia == media && this.visita == si) {
            alert("Usted ha escogido una entrada con distancia " + this.distancia + ". Además, ha seleccionado visitar a la banda.")
        }else if (this.distancia == media && this.visita == no) {
            alert("Usted ha escogido unicamente una entrada con distancia " + this.distancia + ".")
        }else if (this.distancia == alejada && this.visita == si) {
            alert("Usted ha escogido una entrada con distancia " + this.distancia + ". Además, ha seleccionado visitar a la banda.")
        }else if (this.distancia == alejada && this.visita == no){
            alert("Usted ha escogido unicamente una entrada con distancia " + this.distancia + ".")
        }
    }
}

class Bowl {
    constructor (color, tamaño){
        this.color = color;
        this.tamaño = tamaño;
    }
    eleccion (){
        alert("Ha comprado una tasa " + this.tamaño +  " y de color " + this.color + ".")
    }
}

// OBJETOS CREADOS 

let guitarra1 = new Guitarra (prompt("Ingrese una marca de guitarra"), prompt("Ingrese un modelo de guitarra"), prompt("Ingrese un color a elección"));
guitarra1.eleccion();

let record = new Record (prompt("Ingrese un disco"), prompt("Escoja la cantidad a llevar"));
record.eleccion();

let shirt =new Shirt (prompt("Ingrese su talla"), prompt("Ingrese el color deseado"), prompt("¿Le gustaría un estampado?(Ingrese SI o NO)"));
shirt.eleccion(); //Este objeto no funciona bien(???)

let bowl = new Bowl (prompt("Ingrese el color elegido"), prompt("Ingrese el tamaño de la taza que desea"));
bowl.eleccion();

let ticket = new Ticket (prompt("Ingrese la distancia que desea del escenario (puede escoger cerca, media o alejada"), prompt("¿Le gustaría realizar una visita a la banda?(Ingrese SI o NO)"));
ticket.eleccion();




// CÓDIGO DE BIENVENIDA

alert("Bienvenido/a a la página oficial de AC-DC");
alert("Aqui usted puede gestionar su inscripción como socio o comprar nuevos productos de la banda");


// OPERACIONES DE COMPRA O DE BÚSQUEDA

alert("¿Usted desea afiliarse o comprar productos?")
let pregunta1 = parseInt(prompt("Si quiere comprar productos, presione 1. Si quiere afiliarse, presione 2"));
while(pregunta1 == "") {
    msjError();
    pregunta1 = parseInt(prompt("Si quiere comprar productos, presione 1. Si quiere afiliarse, presione 2"));
};


if  (pregunta1 == 1) {
    alert("Usted ha deseado comprar productos");
} else if(pregunta1==2) {
    alert("Usted desea afiliarse");
}else {
    alert("El valor ingresado no es correcto");
    pregunta1 = parseInt(prompt("Si quiere comprar productos, presione 1. Si quiere afiliarse, presione 2"));
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


// CÓDIGO PARA BÚSQUEDA (esto sería en otra página aparte del index)

alert("Los albumes que tenemos son: Highway to Hell, Back in Black, Who Made Who, Power Up, For those about to Rock, Let there be Rock, High Voltage, Live at River Plate")
let album = prompt("Ingrese algun album");
album.toLowerCase
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





// CÓDIGO PARA INTRODUCIR PRODUCTOS EN EL STOCK
/*Quiero generar un sistema que me permita ingresar los productos en un array hasta un determinado tope (=100).*/

class Stock {
    constructor (producto, precio, cantidad) {
        this.producto = producto;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    impuestoIva () {
        let iva = this.precio*1.21;   
    }
}   
const stockProductos = ["guitarra", "taza", "remera", "entrada", "disco"];
alert(stockProductos);



