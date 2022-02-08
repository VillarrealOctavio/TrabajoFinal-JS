let bienvenida = document.querySelector(".bienvenida");
console.log(bienvenida.innerHTML);
bienvenida.innerHTML = "<h3>HOLA ROCKERO</h3>"


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











// -----------------------------------------------------------------------------------------------------------



// Código de guitarras
let seleccionGuitar = document.querySelector("#selectGuitar")
let containerGuitar = document.querySelector(".contenedor-guitar")

seleccionGuitar.addEventListener('change', ()=> {
    console.log (seleccionGuitar.value)
    if(seleccionGuitar.value=="all") {
        showProducts(Guitar)
    }else{
        showProducts(Guitar.filter(el =>el.marca==seleccionGuitar.value))
    }
})

showProducts(Guitar);

function showProducts(array) {
    containerGuitar = "";
    array.forEach(el => {
        let div = document.createElement("div")
        div.className=`col-md-4`;
        div.innerHTML = `
                    <div class="card" style="width: 18rem;">
                    <img src="${el.img}" class="card-img-top" alt="Guitar">
                    <div class="card-body">
                    <h5 class="card-title">${el.marca}</h5>
                    <p class="card-text">${el.modelo}</p>
                    <p class="card-text">${el.precio}</p>
                    </div>
                    </div>
        `       
        containerGuitar.appendChild(div); 
    });
}






// -------------------------------------------------------------------------------------------------------




// CÓDIGO DE BANDA



const integrantesBanda = [
    {nombre:"Angus Young", puesto: "Guitarra Principal",img:`/assets/img/angus.jfif`},
    {nombre:"Malcom Young", puesto: "Guitarra Rítmica",img:`/assets/img/Malcom Young.jfif`},
    {nombre:"Bryan Jonhson", puesto: "Voz",img:`/assets/img/bryan.jfif`},
    {nombre:"Phil Rudd", puesto: "Bateria",img:`/assets/img/Phil Rudd.jfif`},
    {nombre:"Cliff Williams", puesto: "Bajo",img:`/assets/img/Cliff Williams.jfif`}
];



let mostrarBanda = document.querySelector(".showBand");
let banda = document.querySelector("#acdcBand");

showBand.addEventListener("click", showAcdcBand(integrantesBanda))

showAcdcBand(integrantesBanda);

function showAcdcBand (array){
    for (const el of array) {
        let div = document.createElement("div");
        div.className="col-md-12";
        div.innerHTML= 
        `<img src="${el.img}" alt="${el.nombre}">
        <h4>${el.nombre}<span class="badge badge-secondary">${el.puesto}</span></h4>`
        banda.appendChild(div);
    }
}
