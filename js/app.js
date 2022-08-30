function saludar() {
  alert ( `Bienvenido a la tienda ${nombre}!`)
}

function comprarProducto() {  
  producto = prompt("Elegi un producto \n 1: Camiseta \n 2: Short \n 3: Medias \n 4: Buzo")
  if (producto === "1") {
    alert("Seleccionaste una camiseta")
  }
  else if (producto === "2") {
    alert ("Seleccionaste un short")
  }
  else if (producto === "3"){
    alert ("Seleccionaste unas medias")
  }
  else if (producto === "4") {
    alert ("Seleccionaste un buzo")
  }
  else {
    alert ("error, por favor ingrese una de las opciones");
    comprarProducto()
  }
  opcion = prompt (`Ingrese una opcion:
  1: Cambiar de producto
  2: Finalizar Compra
  3: Salir`)
}

function finalizarCompra() {  
  if (producto === "1") {
    alert("Usted elige la camiseta por un costo final de $" + camiseta*1.21 )
  }
  else if (producto === "2"){
    alert ("Usted elige el short por un costo final de $" + short*1.21)
  }
  else if (producto === "3"){
    alert ("Usted elige las medias por un costo final de $" + medias*1.21)
  }
  else if (producto === "4"){
    alert ("Usted elige el buzo por un costo final de $" + buzo*1.21)
  }
}

let producto;
let camiseta = 11000;
let short =  8800;
let medias = 3500;
let buzo = 11000;
let nombre = prompt("ingrese su nombre")
saludar()
let opcion = prompt(`Ingrese una opcion:
1: Comprar Producto
2: Finalizar Compra
3: Salir`);

while ( opcion !== "3") {
  if (opcion === "1") {
    comprarProducto()
}
  if (opcion === "2"){
    finalizarCompra()
    opcion = "3"
  }
}