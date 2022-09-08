function producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}


const camiseta = new producto ("camiseta", 11000);
const short = new producto ("short", 8000);
const medias = new producto ("medias", 3500);
const buzo = new producto ("buzo", 11000);

let productos = [
  {nombre:"camiseta", precio:11000},
  {nombre:"short",precio:8000},
  {nombre:"medias",precio:3500},
  {nombre:"buzo",precio:11000},
];
let carrito = [];
let total = 0;
let listaNombres = [];

let calcularCompra = () => {
  carrito.forEach((producto) => (total += producto.precio))
  return total
}

let nombreDeLaCompra = () => {
  carrito.forEach((producto) => (listaNombres += `\n` + producto.nombre))
  return listaNombres + "."
}

let saludar = () => alert ( `Bienvenido a la tienda ${nombre}!`)

let comprarProducto = () => {  
  numero = prompt(`Elegi un producto 
  1: ${productos[0].nombre} 
  2: ${productos[1].nombre} 
  3: ${productos[2].nombre}  
  4: ${productos[3].nombre} `)
  if (numero === "1") {
    alert(`Seleccionaste una ${camiseta.nombre}`)
    carrito.push(camiseta)
  }
  else if (numero === "2") {
    alert(`Seleccionaste un ${short.nombre}`)
    carrito.push(short)
  }
  else if (numero === "3"){
    alert(`Seleccionaste unas ${medias.nombre}`)
    carrito.push(medias)
  }
  else if (numero === "4") {
    alert(`Seleccionaste un ${buzo.nombre}`)
    carrito.push(buzo)
  }
  else {
    alert ("error, por favor ingrese una de las opciones");
    comprarProducto()
  }
  opcion = prompt (`Ingrese una opcion:
  1: Sumar producto
  2: Finalizar Compra
  3: Salir`)
}

let finalizarCompra = () => {  
  alert(`Su compra incluye: ${nombreDeLaCompra()} \nAl precio de: $${calcularCompra()}`)
}


let numero;

let nombre = prompt("ingrese su nombre").toLowerCase()
saludar()
let opcion = prompt(`Ingrese una opcion:
1: Comprar Producto
2: Finalizar Compra
3: Salir`);

while ( opcion !== "3") {
  if (opcion === "1") {
    comprarProducto()
}
  else{
    finalizarCompra()
    opcion = "3"
  }
} 

