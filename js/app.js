function producto(id, nombre, precio, imagen) {
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
  this.imagen = imagen;
  this.disponible = true;
}

const camiseta = new producto ("1","Camiseta", 16999,"./imagenes/camiseta1.jpg");
const camisetaSuplente = new producto ("2","Camiseta suplente", 14999,"./imagenes/camiseta2.jpg");
const camisetaAlternativa = new producto ("3","Camiseta Alternativa", 14999,"./imagenes/camiseta3.jpg");
const short = new producto ("4","Short", 8000,"./imagenes/short1.jpg");
const medias = new producto ("5","Medias", 3500,"./imagenes/medias1.jpg");
const buzo = new producto ("6","Buzo", 10999,"./imagenes/buzo1.jpg");
const buzoRustico = new producto ("7","Buzo rustico", 10999,"./imagenes/buzo2.jpg");
const pantalon = new producto ("8","Pantalon", 12999, "./imagenes/pantalon1.jpg")

let productos = [camiseta,camisetaAlternativa,camisetaSuplente,short,medias,buzo,buzoRustico,pantalon];
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

let finalizarCompra = () => {  
  alert(`Su compra incluye: ${nombreDeLaCompra()} \nAl precio de: $${calcularCompra()}`)
}

const listaProductos = () => {
  let contenedor = document.getElementById("container");
  productos.forEach((producto,indice)=>{
    let card = document.createElement("div");
    card.classList.add("card", "col-sm-12", "col-lg-3")
    card.innerHTML =`<div class="card" style="width: 18rem;">
    <img src="${producto.imagen}" class="card-img-top" alt="..."style="height: 286px;">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">$${producto.precio}</p>
      <a href="#" class="btn btn-primary" onClick="agregarAlCarrito(${indice})" >Comprar</a>
    </div>
  </div>`;
  contenedor.appendChild(card);
  });

}

const agregarAlCarrito = (indice) => {
  let busquedaIndice = carrito.findIndex((elemento)=>{
    return elemento.id === producto[indice].id
  });
  if (busquedaIndice === -1){
    const productoAgregar = productos[indice]
    productoAgregar.cantidad = 1;
    carrito.push(productoAgregar)
    dibujarCarrito()
  }
  else{
    carrito[busquedaIndice].cantidad += 1;
    dibujarCarrito()
  }
};

const dibujarCarrito = () => {

}

listaProductos();
console.log(carrito)