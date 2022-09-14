/*Desafio 1 Complementario Crear un algoritmo utilizando un ciclo */
/*
let option = prompt(`Elija una opcion:
1: Tabla de multiplicar
2: Serie Fibonacci
3: Numeros Pares
`);


switch (option) {
    case "1":
            let w = prompt("ingrese la tabla de multiplicar que desea");
            let h = 1;
            let rta = 0;
            while(h<=10){
                rta=h*w;
                console.log(w + " x " + h + " = 1" +  rta);
                h++;
            }
        break;
        case "2":
            let x = prompt("ingrese variable x");
            let y = prompt("ingrese variable y");
            function GenerateFibonacci(number){
    
                var fibonacci = [];
                fibonacci[0] = x;
                fibonacci[1] = y;
                for (var i = 2; i < number; i++) {
                  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
                }
                return fibonacci;
                }
                var f = GenerateFibonacci(10);
                console.log(f);
            break;
            case "3":
                let t = prompt("Cuantas series deseas?");
                let z = 1;
                let k = 2;
                let rta2 = 0;
                do {
                    rta2=k*z;
                    console.log(z + ": " + rta2);
                    z++;
                  } while (z <= t);
            break;

    default:
        break;
}*/

/* Desafio 2 Simulador interactivo */

console.log("Bienvenido a Arma tu Infusión");




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

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

const producto1 = new Producto("Infusion Relajante", 10);
const producto2 = new Producto("Infusion Digestiva", 20);
const producto3 = new Producto("Infusion Antioxidante", 30);
const carrito = [];

/* SELECCIONAR PRODUCTO */
console.log("te confirmamos los productos que tenemos");

const productos = [ producto1, producto2, producto3 ];

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
        <p>el valor con envio es de $${precio}</p>`;
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
        <p>el valor con envio es de $${precio}</p>`;
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
        <p>el valor con envio es de $${precio}</p>`;
        document.body.appendChild(contenedor3);
        break;

    default:
        console.log("opcion invalida")
        break;
}


/*OPCION DE COMPRAR*/


console.log("contenido del carrito de compras: ");
console.log(carrito);

let option2 = prompt(`Confirmanos si estas deacuerdo con la compra:
 1: Si.
2: No.
`);




switch (option2) {
    case "1":
        let envio = prompt("confirmanos tu direccion con ciudad y pais a donde deseas recibir el producto");
        console.log("COMPRA REALIZADA, el envio llegara en maximo 5 dias habiles, recuerda que debes cancelar $" + precio + " una vez llegue a tu domicilio en " + envio);
        for (itemcarrito of carrito) {
          let contenedor = document.createElement("div");
          contenedor.innerHTML = `<h3>Producto 1: ${itemcarrito.productocomprado}</h3>
          <p>Precio: $${itemcarrito.valor}</p>
          <p>COMPRA REALIZADA, el envio llegara en maximo 5 dias habiles, recuerda que debes cancelar $${precio} una vez llegue a tu domicilio en ${envio}</p>
          `;
          document.body.appendChild(contenedor);
        }        
        break;
    case "2":
        console.log("COMPRA CANCELADA, gracias por usar nuestro servicio");
        carrito.splice(0);
        console.log("contenido del carrito de compras: ");
        console.log(carrito);
          let contenedor4 = document.createElement("div");
          contenedor4.innerHTML = `<h3>COMPRA CANCELADA</h3>`;
          document.body.appendChild(contenedor4);
        break;
    default:
        console.log("no tenemos datos");
        break;
}


