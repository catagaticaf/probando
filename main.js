
//así traemos nuestros objetos de json:
const fetchData = async()=>{
  try {
    const resp = await fetch('productos.json')
    const data = await resp.json()
    //console.log(data)
    pintarCards(data)
  } catch (error) {
    console.log(error)
  }
}

//asi nos aseguramnos que el archivo html cargue antes que el fetchData
document.addEventListener('DOMContentLoaded',()=>{
  fetchData()
})

//

const carrito = JSON.parse(localStorage.getItem('carrito')) || [];



//Armando las cards de los productos con fetch
const pintarCards = data =>{
  let container = document.getElementById("contenedor-cards");
  let botones = document.getElementsByClassName('btn')
  data.forEach(producto => {
    let card = document.createElement("div");
    card.innerHTML = `
    <div class="col">
          <div class="card">
            <img src="./img/${producto.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">$${producto.precio}</p>
              <button id="btn-compra" class="btn-compra btn btn-light botones" data-id="${producto.id}">Agregar al carrito</button>
            </div>
          </div>
        </div>
    `;
    
    container.appendChild(card);

    
  });
    const btnAdd = document.querySelectorAll('.btn-compra')
    btnAdd.forEach(btn => {
      btn.addEventListener('click', (e)=> addCarrito(e, data))
    })
}

function agregarAlCarrito(e, arrayProductos){
  console.log(producto)
  console.log(e.target.dataset.id)

  const productoSeleccionado = arrayProductos.find (el => el.id === parseInt(e.target.dataset.id))
  console.log(productoSeleccionado)
  carrito.push(productoSeleccionado)

  const producto =
  {
    id: productoSeleccionado.id,
    nombre: productoSeleccionado.nombre,
    precio: productoSeleccionado.precio,
    cantidad: 1,
  }
}


const addCarrito = (e, data) => {
  if (e.target.classList.contains('botones'))
  armarCarrito(e.target.dataset.id, data)
 /* console.log(`Se agrego al carrito! El id del producto seleccionado es ${e.target.id}`);
  //console.log(e.target.classList.contains('botones'))
  if (e.target.classList.contains('botones')){
    armarCarrito(e.target.dataset.id)
  }*/
}

const armarCarrito = (id, array) =>{
  const productoSeleccionado = array.find()
      

  const existe = carrito.some ( p => p.id ===  parseInt(e.target.dataset.id))
  if (existe){
    const indice = carrito.findIndex ( p => p.id === parseInt(e.target.dataset.id))
    carrito[indice].cantidad++;
    producto.cantidad = carrito[producto.id].cantidad + 1
  } else {
    carrito.push(producto)
  }
  console.log(carrito)
} 



