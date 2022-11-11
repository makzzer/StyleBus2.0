
console.log("me conecté al scripts.js!")


//generalmente en la parte de arriba del documento creo la lista de variables
const cards = document.getElementById('cards')
//en la etiqueta que referencia a los templates de cards voy a usar el .content para acceder a los elementos del interior , osea a las cards
const templateCard = document.getElementById('template-card').content
//acá definimos el fragment, el fragment es como una memoria volatil, se va, se disuelve, por eso no genera reflow, podemos usar un frament para todas las cosas a recorrer y dibujar
const fragment = document.createDocumentFragment()



var viajes = [
    { id: 1, nombre: 'bariloche', precio: 10000, cupo: 100 , origen: 'buenos aires', destino: "bariloche", fecha: "YYYY-mm-dd" , tipoOmnibus: "premium", img : "img/purma.jpg"},
    { id: 2, nombre: 'mar del plata', precio: 20000, cupo: 200 , origen: 'buenos aires', destino: "mar del plata", fecha: "YYYY-mm-dd" , tipoOmnibus: "premium", img : "img/bariloche.webp"},
    { id: 3, nombre: 'purmamarca', precio: 30000, cupo: 300 , origen: 'buenos aires', destino: "purmamarca", fecha: "YYYY-mm-dd" , tipoOmnibus: "premium", img : "img/mdq.png"},
    { id: 4, nombre: 'cataratas', precio: 40000, cupo: 1000 , origen: 'buenos aires', destino: "cataratas", fecha: "YYYY-mm-dd" , tipoOmnibus: "comun", img : "img/cataratas.jpg"}
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