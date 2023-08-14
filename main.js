
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


//

const carrito = JSON.parse(localStorage.getItem('carrito')) || [];


//asi nos aseguramnos que el archivo html cargue antes que el fetchData
document.addEventListener('DOMContentLoaded',()=>{
  fetchData()
})




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
              <button id="btn-compra" class="btn btn-light botones" data-id="${producto.id}">Agregar al carrito</button>
            </div>
          </div>
        </div>
    `;
    
    container.appendChild(card);

    
  });
    const btnAdd = document.querySelectorAll('.botones')
    btnAdd.forEach(btn => {
      btn.addEventListener('click', (e)=> agregarAlCarrito(e, data))
    })
}

function agregarAlCarrito(e, producto){
  console.log(producto)
  console.log(e.target.id)
}


/*
const addCarrito = e => {
  console.log(`Se agrego al carrito! El id del producto seleccionado es ${e.target.id}`);
  //console.log(e.target.classList.contains('botones'))
  if (e.target.classList.contains('botones')){
    armarCarrito(e.target.dataset.id)
  }
}*/

const armarCarrito = objeto =>{
  const producto = {
    id: objeto.querySelector('.botones').dataset.id,
    nombre: objeto.querySelector('.card-title').textContent,
    precio: objeto.querySelector('.card-text').textContent,
    cantidad: 1,

  }

  const existe = carrito.some ( p => p.id === objeto.id)
  if (carrito.hasOwnProperty(producto.id)){
    producto.cantidad = carrito2[producto.id].cantidad + 1
  }
  carrito2[producto.id] = {...producto}
  pintarCarrito()
} 

// A PARTIR DE ACA NO ME FUNCIONA, NO PUEDO HACER QUE LOS PRODUCTOS APAREZCAN EN EL CARRITO EN HTML


