console.dir(document);
/*let form = document.querySelector(".formulario");
console.log(form.innerHTML);

let usuario = document.querySelector(".usuario")
console.log(usuario.innerHTML);

let correo = document.querySelector(".email")
console.log(correo.innerHTML);

let contra = document.querySelector(".password");
console.log(contra.innerHTML);*/

/*let bienvenidaIngreso = document.querySelector(".bienvenida");
bienvenidaIngreso.innerHTML = "<h4>Hola rockero</h4>"*/


let bienvenida = document.createElement("div");
console.log(bienvenida.innerHTML);
bienvenida.innerHTML = "<h3>HOLA ROCKERO</h3>"
document.body.appendChild(bienvenida);


let listaShirts = document.querySelector(".remeras");
for(const remera of shirt) {
    let li = document.createElement("li");
    let boton = document.createElement("button");
    li.innerHTML = `${remera.id} - ${remera.estampado} - ${remera.descr} - ${remera.talle} - ${remera.precio}`;
    boton.innerHTML = "<button>Agregar al carrito</button>"
    listaShirts.append(li)
    listaShirts.append(boton)
}

const carritoCompras = [];

let shirtTitle = document.querySelector(".remerasTitulo");
console.log(shirtTitle.innerHTML);

shirtTitle.innerHTML = "<h3>Bienvenido a nuestro sistema de compras!</h3>"

