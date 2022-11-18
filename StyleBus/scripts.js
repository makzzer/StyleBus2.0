let carrito = []
let arregloFiltrado = []
var mensajesErrorForm = []


//generalmente en la parte de arriba del documento creo la lista de variables
//const cards = document.getElementById('cards')
//en la etiqueta que referencia a los templates de cards voy a usar el .content para acceder a los elementos del interior , osea a las cards
const templateCard = document.getElementById('template-card').content
//acá definimos el fragment, el fragment es como una memoria volatil, se va, se disuelve, por eso no genera reflow, podemos usar un frament para todas las cosas a recorrer y dibujar
const fragment = document.createDocumentFragment()

const cards = document.getElementById('cards')
//todo esto es para el carrito
const footerCarrito = document.getElementById('footer')
const templateCarrito = document.getElementById('template-carrito').content
const itemsCarrito = document.getElementById('items')
const templateFooter = document.getElementById('template-footer').content



//acá voy a capturar el formulario de busqueda

const formularioBusquedaViajes = document.getElementById('formulario_busqueda')
const idaForm = document.getElementById('ida_rb')
const idaVueltaForm = document.getElementById('ida_vuelta_rb')
const origenForm = document.getElementById('setOrigen_Form')
const destinoForm = document.getElementById('setDestino_Form')
const fechaIdaForm = document.getElementById('fechaSalidaForm')
const cantPasajeros = document.getElementById('cantPasajeros')
const fechaVueltaForm = document.getElementById('fechaLlegadaForm')
const errorForm = document.getElementById('error')

const contenedorCards = document.getElementById('contenedorCartas')

const botonFiltro = document.getElementById('boton_filtro')

const tipoomnibusselec = document.getElementById('tipo_omnibus')

//botón carrito a recap

const botonConfirmarCompraCarrito = document.getElementById('boton_confirmar_compra_carrito')


//crear tarjetas antes de cargar el documento, crear las cards desde el var viajes
document.addEventListener('DOMContentLoaded', () => crearCards(productos.viajes));




errorForm.style.color = 'red';



//voy a preguntar por el estado de los botones de ida y vuelta
idaForm.addEventListener('change', updateStatusDestinoForm_SoloIda)
idaVueltaForm.addEventListener('change', updateStatusDestinoForm_IdayVuelta)



//comportamiendo de destino segun que radio button esté seleccionado



//en ida
function updateStatusDestinoForm_SoloIda() {
  if (idaForm.checked && !idaVueltaForm.checked) {
    fechaVueltaForm.disabled = true;
  }
}

//en ida y vuelta
function updateStatusDestinoForm_IdayVuelta() {
  if (!idaForm.checked && idaVueltaForm.checked) {
    fechaVueltaForm.disabled = false;
    fechaIdaForm.disabled = false;
  }
}






//AÑO-MES-DIA
var productos = {
  'viajes': [


    //misma fecha de salida, diferente fecha de vuelta, los primeros 2 mismo origen pero todos diferente destino
    { id: 0, nombre: 'San Luis 7 días', precio: 1000, origen: 'buenos aires', destino: 'san luis', fechaIda: '2022-09-07', fechaVuelta: '2022-09-14', img: "img/merlo.jpg", idayVuelta: true, cupo: 100 },
    { id: 1, nombre: 'Cordoba 14 días', precio: 2000, origen: 'buenos aires', destino: 'cordoba', fechaIda: '2022-09-07', fechaVuelta: '2022-09-21', img: "img/cordoba.jpg", idayVuelta: true, cupo: 100 },
    { id: 2, nombre: 'Wakanda 21 días ', precio: 3000, origen: 'cordoba', destino: 'wakanda', fechaIda: '2022-09-07', fechaVuelta: '2022-09-28', img: "img/wakanda.jpg", idayVuelta: true, cupo: 100 },


    //Solo viajes de ida
    { id: 3, nombre: 'Buenos Aires Solo Ida', precio: 3000, origen: 'asgard', destino: 'buenos aires', fechaIda: '2022-09-07', fechaVuelta: ' ', img: "img/bsas.jpg", idayVuelta: false, cupo: 400 },
    { id: 4, nombre: 'Bariloche Solo Ida', precio: 4000, origen: 'buenos aires', destino: 'Bariloche', fechaIda: '2022-10-07', fechaVuelta: ' ', img: "img/bariloche.jpg", idayVuelta: false, cupo: 400 },
    { id: 5, nombre: 'Mar del plata Solo Ida', precio: 5000, origen: 'cordoba', destino: 'mar del plata', fechaIda: '2022-11-09', fechaVuelta: ' ', img: "img/mdq.jpg", idayVuelta: false, cupo: 400 },



    //diferente origen mismo destino diferentes fechas
    { id: 6, nombre: 'San Luis 14 días', precio: 6000, origen: 'wakanda', destino: 'san luis', fechaIda: '2022-10-07', fechaVuelta: '2022-10-21', img: "img/merlo.jpg", idayVuelta: true, cupo: 200 },
    { id: 7, nombre: 'San Luis 14 días ', precio: 7000, origen: 'cordoba', destino: 'san luis', fechaIda: '2022-10-09', fechaVuelta: '2022-10-23', img: "img/merlo.jpg", idayVuelta: true, cupo: 200 },
    { id: 8, nombre: 'San Luis 14 días', precio: 8000, origen: 'asgard', destino: 'san luis', fechaIda: '2022-09-17', fechaVuelta: '2022-09-24', img: "img/merlo.jpg", idayVuelta: true, cupo: 200 },



    //mismo origen mismo destino diferentes fechas, 

    { id: 9, nombre: 'Asgard 7 días', precio: 9000, origen: 'wakanda', destino: 'asgard', fechaIda: '2022-11-09', fechaVuelta: '2022-18-09', img: "img/asgard.jpg", idayVuelta: true, cupo: 1000 },
    { id: 10, nombre: 'Asgard 14 días', precio: 10000, origen: 'wakanda', destino: 'asgard', fechaIda: '2022-10-16', fechaVuelta: '2022-10-30', img: "img/asgard.jpg", idayVuelta: true, cupo: 1000 },
    { id: 11, nombre: 'Asgard 21 días', precio: 11000, origen: 'wakanda', destino: 'asgard', fechaIda: '2022-11-27', fechaVuelta: '2022-12-11', img: "img/asgard.jpg", idayVuelta: true, cupo: 1000 },


    //mismo origen mismo destino diferentes fechas, 

    { id: 12, nombre: 'Buenos aires 7 días', precio: 9000, origen: 'cordoba', destino: 'buenos aires', fechaIda: '2022-11-09', fechaVuelta: '2022-18-09', img: "img/bsas.jpg", idayVuelta: true, cupo: 1000 },
    { id: 13, nombre: 'Cordoba 14 días', precio: 10000, origen: 'buenos aires', destino: 'cordoba', fechaIda: '2022-10-16', fechaVuelta: '2022-10-30', img: "img/cordoba.jpg", idayVuelta: true, cupo: 1000 },
    { id: 14, nombre: 'Cordoba 21 días', precio: 11000, origen: 'san luis', destino: 'cordoba', fechaIda: '2022-11-27', fechaVuelta: '2022-12-11', img: "img/cordoba.jpg", idayVuelta: true, cupo: 1000 },

  ]
}



//metodo para crear cards , "lista" es un parametro de la arrow function solo para crear las cards con cualquier lista que le pase
const crearCards = lista => {

  arregloFiltrado = []
  cards.innerHTML = ' '
  //una vez que tenemos la data, vamos a recorrer
  lista.forEach(lista => {
    //acá voy a recorrer y ir dibujando en las cards el contenido de los productos comenzando por el titulo, accedo al contenido de la card de la siguiente manera
    templateCard.querySelector('#tituloCardLB').textContent = lista.nombre
    templateCard.querySelector('#PrecioCardLB').textContent = lista.precio
    templateCard.querySelector('#FechaIdaCardLB').textContent = lista.fechaIda
    templateCard.querySelector('#FechaVueltaCardLB').textContent = lista.fechaVuelta
    templateCard.querySelector('#OrigenCardLB').textContent = lista.origen
    templateCard.querySelector('#CupoCardLB').textContent = lista.cupo
    templateCard.querySelector('img').setAttribute("src", lista.img)
    //cada botón debe tener el id del producto que le corresponde
    templateCard.querySelector('.btn-dark').dataset.id = (lista.id)

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
  dibujarCarrito()

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
  const productoCarrito = {
    //como voy a estar accediendo a la calse , tiene que empezar con . (punto)
    id: objeto.querySelector('.btn-dark').dataset.id,
    titulo: ' ',     //objeto.querySelector('H5').textContent,
    precio: ' ',     //objeto.querySelector('P').textContent,
    //le voy a agregar el atributo cantidad a ese nuevo objeto arrancando en 1
    cantidad: 1
  }

  productos.viajes.forEach(viaje => {
    if (viaje.id == objeto.querySelector('.btn-dark').dataset.id && hayCupo(viaje.cupo, cantPasajeros.value)) {
      console.log(viaje.cupo)
      productoCarrito.titulo = viaje.nombre;
      productoCarrito.precio = viaje.precio;
      alert("Cupo Confirmado. Producto agregado al carrito correctamente")
      carrito.push(productoCarrito)
    } else if (viaje.id == objeto.querySelector('.btn-dark').dataset.id && !hayCupo(viaje.cupo, cantPasajeros.value)) {
      alert("no hay cupo para su viaje seleccionado: " + viaje.nombre + " el cupo del viaje es: " + viaje.cupo + " El cupo que usted ingresó es: " + cantPasajeros.value)
      return
    }
  });

  console.log(carrito)

}


const dibujarCarrito = () => {
  //tengo que recorrer el carrito , osea el objeto carrito, pero como es un objeto primero uso object.values , para que me tome el forEach y poder recorrerlo
  carrito.forEach(producto => {
    //console.log(producto)

    //inicializo vacio el html, sino en cada "comprar" me va a repetir los productos
    itemsCarrito.innerHTML = ' '

    //como hay un solo th lo accedo así
    templateCarrito.querySelector('th').textContent = producto.id
    //como hay varios td, los recorro com un array, uso querySelectorAll y le paso la etiqueta y el indice, como es el primero le paso 0 para el titulo
    templateCarrito.querySelectorAll('td')[0].textContent = producto.titulo
    //acá le paso al segundo td 1 para la cantidad
    //templateCarrito.querySelectorAll('td')[1].textContent = carrito.cantidad
    //a los botones + y -, le tengo que agregar el id como hice en las cards, para saber que id esta modificando el boton
    templateCarrito.querySelector('.btn-info').dataset.id = producto.id
    templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
    templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio


    //ahora clonamos
    const clone = templateCarrito.cloneNode(true)
    fragment.appendChild(clone)
  })
  //aca en lo siguiente pinto la informacion que generé en los items del carrito
  itemsCarrito.appendChild(fragment)

  if (carrito.length > 0){
    boton_confirmar_compra_carrito.hidden = false;
  }
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

  btnVaciar.addEventListener('click', (carrito) => {
    carrito = []
    //este innerHtml lo agregué yo porque le daba vaciar y no me borraba el carrito, asi que con ese inner lo resetee por completo digamos
    itemsCarrito.innerHTML = ' '
    dibujarCarrito(carrito)


  })

}


function hayCupo(cupo, cantPasajeros) {
  if (cupo - cantPasajeros > 0 && cupo - cantPasajeros >= cantPasajeros) {
    return true;
  }
  return false;
}

//Asi agrego el boton al html, le cambio el atributo a visible para que se vea


//acá le creo el onclick y le defino el metodo adentro
botonFiltro.addEventListener('click', function borrarFiltros() {
  mensajesErrorForm = []
  fechaVueltaForm.disabled = true
  fechaIdaForm.disabled = true
  formularioBusquedaViajes.reset()
  errorForm.innerHTML = mensajesErrorForm.join(', ')
  crearCards(productos.viajes)


})


function vaciarCarrito() {
  carrito = []
  botonConfirmarCompraCarrito.hidden = true;
  //este innerHtml lo agregué yo porque le daba vaciar y no me borraba el carrito, asi que con ese inner lo resetee por completo digamos
  itemsCarrito.innerHTML = ' '
  dibujarCarrito()
}




//validar fecha me devuelve true si la ida es anterior a la vuelta

function validarFecha() {
  ida = fechaIdaForm.value;
  vuelta = fechaVueltaForm.value;
  if (ida < vuelta) {
    return true
  } return false
}









//metodo del filtro para busqueda de viajes por parametros,quedó ok usando filter
function buscarViajes() {

  //borro los errores
  errorForm.innerHTML = ""

  console.log(validarFecha())

  //si no puso ida ni vuelta péro busco origen y destino
  if (!idaForm.checked && !idaVueltaForm.checked && destinoForm.value.length != 0 && origenForm.value.length != 0) {
    arregloFiltrado = productos.viajes.filter(function (elemento) {
      return destinoForm.value.toLowerCase() == elemento.destino && origenForm.value.toLowerCase() == elemento.origen;
    });

    //si no hay viajes al destino ni origen
    if (arregloFiltrado.length === 0) {
      mensajesErrorForm.push("PERDON TODAVIA NO HAY VIAJES DESDE " + origenForm.value + " HASTA " + destinoForm.value)
      errorForm.innerHTML = mensajesErrorForm.join(', ')
      mensajesErrorForm = []
      crearCards(productos.viajes)
      return

    } else {
      crearCards(arregloFiltrado)
      return
    }
  }

  //si no puso ida ni vuelta y busco solo por origen
  else if (!idaForm.checked && !idaVueltaForm.checked && origenForm.value.length != 0) {
    arregloFiltrado = productos.viajes.filter(function (elemento) {
      return origenForm.value.toLowerCase() == elemento.origen;
    });

    //si no hay viajes a origen
    if (arregloFiltrado.length === 0) {
      alert("PERDON NO HAY VIAJES DESDE " + origenForm.value)
      crearCards(productos.viajes)
      return

    } else {
      crearCards(arregloFiltrado)
      return
    }
  }



  //si no puso ida ni vuelta y busco solo por destino
  else if (!idaForm.checked && !idaVueltaForm.checked && destinoForm.value.length != 0) {
    cards.innerHTML = ''
    arregloFiltrado = productos.viajes.filter(function (elemento) {
      return destinoForm.value.toLowerCase() == elemento.destino;
    });
    crearCards(arregloFiltrado)
    return
  }



  //si el formulario está vacio
  if (!idaForm.checked && !idaVueltaForm.checked && origenForm.value.length == 0 && destinoForm.value.length == 0 && fechaIdaForm.value === "" && fechaVueltaForm.value.length == "") {
    mensajesErrorForm.push('Formulario vacío, por favor complete los campos para poder buscar su viaje')
    errorForm.innerHTML = mensajesErrorForm.join(', ')
    mensajesErrorForm = []
    formularioBusquedaViajes.reset()
    return


  }

  //si seleccionó ida y vuelta, tiene que indicar si o si, origen, destino, fecha ida y fecha de vuelta
  else if (idaVueltaForm.checked) {

    //si no indica ni destino, ni origen , ni fecha de ida ni fecha de vuelta
    if (origenForm.value.length == 0 && destinoForm.value.length == 0 && fechaIdaForm.value === "" && fechaVueltaForm.value === "") {
      mensajesErrorForm.push('Debe completar los campos ORIGEN, DESTINO, FECHA DE IDA y FECHA DE VUELTA para poder buscar su viaje')
      errorForm.innerHTML = mensajesErrorForm.join(', ')
      mensajesErrorForm = []
      //formularioBusquedaViajes.reset()
      return


      //si no indica origen
    } else if (origenForm.value.length == 0) {
      mensajesErrorForm.push('Debe completar el ORIGEN para poder buscar su viaje')
      errorForm.innerHTML = mensajesErrorForm.join(', ')
      mensajesErrorForm = []
      return




      //si no indica el destino
    } else if (destinoForm.value.length == 0) {
      mensajesErrorForm.push('Debe completar DESTINO para poder buscar su viaje')
      errorForm.innerHTML = mensajesErrorForm.join(', ')
      mensajesErrorForm = []

      return



      //si no indica la fecha de ida
    } else if (fechaIdaForm.value.length == 0) {
      mensajesErrorForm.push('Debe completar la FECHA DE IDA para poder buscar su viaje')
      errorForm.innerHTML = mensajesErrorForm.join(', ')
      mensajesErrorForm = []
      return




      //si no indica la fecha de vuelta
    } else if (fechaVueltaForm.value.length == 0) {
      mensajesErrorForm.push('Debe completar el FECHA DE VUELTA para poder buscar su viaje')
      errorForm.innerHTML = mensajesErrorForm.join(', ')
      mensajesErrorForm = []
      return



      //si la fecha de salida es igual a la fecha de vuelta
    } else if (fechaIdaForm.value === fechaVueltaForm.value && fechaIdaForm.value.length != 0) {
      mensajesErrorForm.push('Las fecha de ida y la fecha de vuelta no pueden ser iguales')
      errorForm.innerHTML = mensajesErrorForm.join(', ')
      mensajesErrorForm = []
      return


    } else if (!validarFecha()) {
      mensajesErrorForm.push('La FECHA DE VUELTA no puede ANTERIOR a la FECHA DE IDA')
      errorForm.innerHTML = mensajesErrorForm.join(', ')
      mensajesErrorForm = []
      return


      //no existe DESTINO PARA SU VIAJE viaje
    } else {
      arregloFiltrado = productos.viajes.filter(function (elemento) {
        return fechaVueltaForm.value == elemento.fechaVuelta && fechaIdaForm.value == elemento.fechaIda && origenForm.value.toLowerCase() == elemento.origen && destinoForm.value.toLowerCase() == elemento.destino;
      });
      console.log("este es el arreglo filtrado" + arregloFiltrado)
      if (!validarFecha()){
        mensajesErrorForm.push('La FECHA DE VUELTA no puede SER ANTERIOR a la FECHA DE IDA')
        errorForm.innerHTML = mensajesErrorForm.join(', ')
        mensajesErrorForm = []
        return

      }
      //si no hay viajes a origen
      else if (arregloFiltrado.length === 0) {
        mensajesErrorForm.push('PERDON NO HAY VIAJES DISPONIBLES SEGUN SUS PREFERENCIAS, DISCULPE')
        errorForm.innerHTML = mensajesErrorForm.join(', ')
        mensajesErrorForm = []
        return

      } else {
        crearCards(arregloFiltrado)
        return
      }
    }



    //ver que pasa con las dos fechaS , el origen pero sin destino --> revisar
    //cuando elegimos origen y destino y las fechas que quiero no existen , pongo un mensaje que no hay casos disponibles 
    //cuando ingresa destino que no existe u origen que no existe , devolver que no existen uno u otro
    //comparar el cupo en la busqueda , si tiene devolver, si no tiene no devolver
    //cuando busca por algo que no hay, avisar porque no hay, por fecha, por cupo, etc
    //borrar el cancelar reserva

  }

}




