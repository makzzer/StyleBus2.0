
console.log("me conecté al scripts.js!")
let carrito = []
var paquetes = []



//generalmente en la parte de arriba del documento creo la lista de variables
const cards = document.getElementById('cards')
//en la etiqueta que referencia a los templates de cards voy a usar el .content para acceder a los elementos del interior , osea a las cards
const templateCard = document.getElementById('template-card').content
//acá definimos el fragment, el fragment es como una memoria volatil, se va, se disuelve, por eso no genera reflow, podemos usar un frament para todas las cosas a recorrer y dibujar
const fragment = document.createDocumentFragment()

//todo esto es para el carrito
const footerCarrito = document.getElementById('footer')
const templateCarrito = document.getElementById('template-carrito').content
const itemsCarrito = document.getElementById('items')
const templateFooter = document.getElementById('template-footer').content




let viajes = [
  { id: 1, nombre: 'bariloche', precio: 10000, cupo: 100, origen: 'buenos aires', destino: "bariloche", fecha: "YYYY-mm-dd", tipoOmnibus: "premium", img: "img/purma.jpg" },
  { id: 2, nombre: 'mar del plata', precio: 20000, cupo: 200, origen: 'buenos aires', destino: "mar del plata", fecha: "YYYY-mm-dd", tipoOmnibus: "premium", img: "img/bariloche.webp" },
  { id: 3, nombre: 'purmamarca', precio: 30000, cupo: 300, origen: 'buenos aires', destino: "purmamarca", fecha: "YYYY-mm-dd", tipoOmnibus: "premium", img: "img/mdq.png" },
  { id: 4, nombre: 'cataratas', precio: 40000, cupo: 1000, origen: 'buenos aires', destino: "cataratas", fecha: "YYYY-mm-dd", tipoOmnibus: "comun", img: "img/cataratas.jpg" },
  { id: 5, nombre: 'cataratas', precio: 40000, cupo: 1000, origen: 'buenos aires', destino: "cataratas", fecha: "YYYY-mm-dd", tipoOmnibus: "comun", img: "img/cataratas.jpg" },
  { id: 6, nombre: 'cataratas', precio: 40000, cupo: 1000, origen: 'buenos aires', destino: "cataratas", fecha: "YYYY-mm-dd", tipoOmnibus: "comun", img: "img/cataratas.jpg" }
]



let excursiones = [
  { id: 100, nombre: 'excursion0', precio: 10000, cupo: 100, origen: 'buenos aires', destino: "bariloche", fecha: "YYYY-mm-dd", tipoOmnibus: "premium", img: "img/purma.jpg" },
  { id: 200, nombre: 'excrusion1', precio: 20000, cupo: 200, origen: 'buenos aires', destino: "mar del plata", fecha: "YYYY-mm-dd", tipoOmnibus: "premium", img: "img/bariloche.webp" },
  { id: 300, nombre: 'excrusion2', precio: 30000, cupo: 300, origen: 'buenos aires', destino: "purmamarca", fecha: "YYYY-mm-dd", tipoOmnibus: "premium", img: "img/mdq.png" },
  { id: 400, nombre: 'excrusion3', precio: 40000, cupo: 1000, origen: 'buenos aires', destino: "cataratas", fecha: "YYYY-mm-dd", tipoOmnibus: "comun", img: "img/cataratas.jpg" },
  { id: 500, nombre: 'excrusion4', precio: 40000, cupo: 1000, origen: 'buenos aires', destino: "cataratas", fecha: "YYYY-mm-dd", tipoOmnibus: "comun", img: "img/cataratas.jpg" },
  { id: 600, nombre: 'excrusion5', precio: 40000, cupo: 1000, origen: 'buenos aires', destino: "cataratas", fecha: "YYYY-mm-dd", tipoOmnibus: "comun", img: "img/cataratas.jpg" }
]




//crear tarjetas antes de cargar el documento, crear las cards desde el var viajes
document.addEventListener('DOMContentLoaded', () => crearCards(viajes));





const crearCards = viajes => {
  //una vez que tenemos la data, vamos a recorrer
  viajes.forEach(viaje => {
    //acá voy a recorrer y ir dibujando en las cards el contenido de los productos comenzando por el titulo, accedo al contenido de la card de la siguiente manera
    templateCard.querySelector('h5').textContent = viaje.nombre
    templateCard.querySelector('p').textContent = viaje.precio
    templateCard.querySelector('img').setAttribute("src", viaje.img)
    //cada botón debe tener el id del producto que le corresponde
    templateCard.querySelector('.btn-dark').dataset.id = (viaje.id)

    //luego de llenar el template tengo que hacer el clone del template de la card y pasarselo al fragment
    const clone = templateCard.cloneNode(true)
    //y luego agregar el clone al fragment
    fragment.appendChild(clone)
  });
  //Despues fuera de los parentesis tengo que agregar ese child a la lista de items osea a la lista de cards
  //le paso como parametro el fragment que creee antes de la card
  //con la siguiente linea hago la modificacion en el dom
  cards.appendChild(fragment)

}


//acá voy a crear el evento de tomar el click en el boton comprar
document.addEventListener('click', e => {
  //el siguiente e nos servia para capturar el elemento que queremos modificar, vendria a ser el id del boton, ese id lo voy a buscar en el array de viajes
  addCarrito(e)
  dibujarCarrito(carrito)

})

//acá hago el metodo addCarrito y capturo ese e que voy a enviar en el eventListener de arriba
//lo que capturo es cuando presiono el boton, capturo todo el div que contiene la card, y por eso puedo ingresar a su contenido
const addCarrito = e => {
  //busco el elemento boton comprar
  if (e.target.classList.contains('btn-dark')) {
    setCarrito(e.target.parentElement)
  }
  //uso el stop propagation para detener cualquier otro evento que se podia generar en nuestro items
  e.stopPropagation()
}


//con el siguiente metodo voy a ir agregando los objetos que me traigo del addcarrito en la lista del carrito perse
const setCarrito = objeto => {
  viajes.forEach(viaje => {
    if (viaje.id == objeto.querySelector('.btn-dark').dataset.id) {
      carrito.push(viaje)
    }
  });
  //console.log(carrito)
}


const dibujarCarrito = (carrito) => {
  //tengo que recorrer el carrito , osea el objeto carrito, pero como es un objeto primero uso object.values , para que me tome el forEach y poder recorrerlo
  carrito.forEach(producto => {
    //console.log(producto)
    //inicializo vacio el html, sino en cada "comprar" me va a repetir los productos
    itemsCarrito.innerHTML = ' '
    //como hay un solo th lo accedo así
    templateCarrito.querySelector('th').textContent = producto.id
    //como hay varios td, los recorro com un array, uso querySelectorAll y le paso la etiqueta y el indice, como es el primero le paso 0 para el titulo
    templateCarrito.querySelectorAll('td')[0].textContent = producto.nombre
    //acá le paso al segundo td 1 para la cantidad
    //templateCarrito.querySelectorAll('td')[1].textContent = carrito.cantidad
    //a los botones + y -, le tengo que agregar el id como hice en las cards, para saber que id esta modificando el boton
    templateCarrito.querySelector('.btn-info').dataset.id = producto.id
    templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
    //templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio

    //ahora clonamos
    const clone = templateCarrito.cloneNode(true)
    fragment.appendChild(clone)
  })
  //aca en lo siguiente pinto la informacion que generé en los items del carrito
  itemsCarrito.appendChild(fragment)

  dibujarFooter(carrito)

}


const dibujarFooter = (carrito) => {
  footerCarrito.innerHTML = '';
  //en caso de que el carrito esté vacio, tengo que pintar que está vacio, en caso contrario, tengo que completar con el detalle de la compra
  if (carrito.length === 0) {
    footerCarrito.innerHTML = `
      <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
      `

    //tenemos que poner el siguiente return para que detecte que tenemos el carrito vacio
    return
  }

  //para crear la suma voy a usar el Reduce
  //reduce toma primero una funcion de flecha y retorna algo, como queremos retornar un numero, le ponemos una coma y un 0 --> ,0 --> si quiesieramos devolver un string o algo distinto lo ponemos entre {}

  const nCantidad = carrito.reduce((acum, { cantidad }) => acum + cantidad, 0)

  


  //acá lo hago para el precio, todo esto es para mostrarlo en el footer

  const nPrecio = carrito.reduce((acum, { cantidad, precio }) => acum + precio * cantidad, 0)
  //console.log(nCantidad)
  //console.log(nPrecio)

  //ahora voy a pintarlos en el footer
  templateFooter.querySelectorAll('td')[0].textContent = nCantidad
  templateFooter.querySelector('span').textContent = nPrecio

  const clone = templateFooter.cloneNode(true)
  fragment.appendChild(clone)

  //como no es un ciclo, porque es una sola linea, podemos agregarlo directamente en la etiqueta footer
  footerCarrito.appendChild(fragment)

  const btnVaciar = document.getElementById('vaciar-carrito')
  btnVaciar.addEventListener('click', () => {
    carrito = []
    //este innerHtml lo agregué yo porque le daba vaciar y no me borraba el carrito, asi que con ese inner lo resetee por completo digamos
    itemsCarrito.innerHTML = ' '
    dibujarCarrito(carrito)

  })

}




