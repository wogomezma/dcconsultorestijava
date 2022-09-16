


/* console.log("Bienvenido a Arma tu Infusión");


/* FUNCIONES DE PREPARACION DE RECETAS*/
function infurelajante(dias, veces) {
    return dias * veces * 3;
  }

function infudigestiva(dias, veces) {
    return dias * veces * 2;
  }

function infuantioxidante(dias, veces) {
    return dias * veces * 5;
   }


  function compra(preciogramo, receta) {
    return preciogramo * receta * 7000;
  }

/* PRODUCTOS */

const productos = [];

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    productos.push({ nombre: this.nombre, precio: this.precio });
  }



const producto1 = new Producto("Infusion Relajante", 10);
const producto2 = new Producto("Infusion Digestiva", 20);
const producto3 = new Producto("Infusion Antioxidante", 30);
const producto4 = new Producto("Otros", 100);
const carrito = [];



/* SELECCIONAR PRODUCTO */
console.log("te confirmamos los productos que tenemos");

/*const productos = [ producto1, producto2, producto3 ];*/

    console.log(productos);

  /* DATOS PARA ARMAR RECETA */
console.log("Vamos a Armar tu receta personalizada");


let option = prompt(`Elija una de las siguientes opciones:
1: Infusión Relajante(a base de plantas medicinales).
2: Infusión Digestiva (Perfecta para despues de las comidas)
3: Infusión Antioxidante (previene el envejecimiento celular). 
`);


console.log("Escogiste la opcion " + option);

let dias = prompt("Para cuantos dias requieres calcular la receta");
let veces = prompt("Cuantas tazas al dia vas a consumir");
let receta
let precio

  /* SWITCH PARA EJECUTAR OPERACION DE RECETA */
  

switch (option) {
    case "1":
        receta = infurelajante(dias, veces)
        precio = compra(producto1.precio, receta)
        console.log("Calculado receta de " + producto1.nombre + " para " + dias + " dias, con " + veces + " veces al dia");
        console.log("hola, calculamos que necesitaras " + receta + "gramos");
        console.log("el valor con envio es de $" + precio);
        carrito.push({ productocomprado: producto1.nombre, valor: precio });
        let contenedor1 = document.createElement("div");
        contenedor1.innerHTML = `<h3>Calculado receta de ${producto1.nombre} para ${dias} dias, con ${veces} veces al dia</h3>
        <p>hola, calculamos que necesitaras ${receta} gramos</p>
        <p>el valor con envio es de $${precio}</p>
        <p>da click en el carrito de compras para validar tus productos</p>`;
        document.body.appendChild(contenedor1);
        break;
    case "2":
        receta = infudigestiva(dias, veces)
        precio = compra(producto2.precio, receta)
        console.log("Calculado receta de " + producto2.nombre + " para " + dias + " dias, con " + veces + " veces al dia");
        console.log("hola, calculamos que necesitaras " + receta + "gramos");
        console.log("el valor con envio es de $" + precio);
        carrito.push({ productocomprado: producto2.nombre, valor: precio });
        let contenedor2 = document.createElement("div");
        contenedor2.innerHTML = `<h3>Calculado receta de ${producto2.nombre} para ${dias} dias, con ${veces} veces al dia</h3>
        <p>hola, calculamos que necesitaras ${receta} gramos</p>
        <p>el valor con envio es de $${precio}</p>
        <p>da click en el carrito de compras para validar tus productos</p>`;
        document.body.appendChild(contenedor2);
        break;
    case "3":
        receta = infuantioxidante(dias, veces)
        precio = compra(producto3.precio, receta)
        console.log("Calculado receta de " + producto3.nombre + " para " + dias + " dias, con " + veces + " veces al dia");
        console.log("hola, calculamos que necesitaras " + receta + "gramos");
        console.log("el valor con envio es de $" + precio);
        carrito.push({ productocomprado: producto3.nombre, valor: precio });
        let contenedor3 = document.createElement("div");
        contenedor3.innerHTML = `<h3>Calculado receta de ${producto3.nombre} para ${dias} dias, con ${veces} veces al dia</h3>
        <p>hola, calculamos que necesitaras ${receta} gramos</p>
        <p>el valor con envio es de $${precio}</p>
        <p>da click en el carrito de compras para validar tus productos</p>`;
        document.body.appendChild(contenedor3);
        break;

    default:
        console.log("opcion invalida")
        break;
}


/*OPCION DE COMPRAR*/


console.log("contenido del carrito de compras: ");
console.log(carrito);

/*EVENTOS BOTONES*/

const button2 = document.querySelector(".btn");
button2.onclick = function () {
  let contenedor8 = document.createElement("div");
  contenedor8.innerHTML = `<h3>CONTENIDO CARRITO DE COMPRAS</h3>`;
  document.body.appendChild(contenedor8);
  for (itemcarrito of carrito) {
    let contenedor9 = document.createElement("div");
    contenedor9.innerHTML = `<h3>Producto 1: ${itemcarrito.productocomprado}</h3>
    <p>Precio: $${itemcarrito.valor}</p>
  

    `;
    document.body.appendChild(contenedor9);
  } 
};

/* const formDir= document.querySelector("#formDir");

formName.addEventListener("input", (e) => {
  console.log(e.target.value);
}); */

const formulario = document.querySelector(".form1");
const nombre = document.querySelector("#formDir");



formulario.addEventListener("submit", validarFormulario);

function validarFormulario() {
/*   e.preventDefault(); */
  console.log(nombre.value);

  for (itemcarrito of carrito) {
    let contenedor12 = document.createElement("div");
    contenedor12.innerHTML = `<h3>Producto 1: ${itemcarrito.productocomprado}</h3>
    <p>Precio: $${itemcarrito.valor}</p>
    <p>COMPRA REALIZADA, el envio llegara en maximo 5 dias habiles, recuerda que debes cancelar $${precio} una vez llegue a tu domicilio en ${nombre.value}</p>
    `;
    document.body.appendChild(contenedor12);
  } 

}