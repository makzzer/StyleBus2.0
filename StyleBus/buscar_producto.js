var ProductoVenta = [
  { nombre: 'Piano', categoria: 'Musica', tipo: 'venta', telefono: 1160685641, precio: 500 },
  { nombre: 'Guitarra', categoria: 'Musica', tipo: 'venta', telefono: 1160685640, precio: 500 },
  { nombre: 'Silla', categoria: 'Artesania', tipo: 'venta', telefono: 1160685639, precio: 500 },
  { nombre: 'Jarron', categoria: 'Artesania', tipo: 'venta', telefono: 1160685638, precio: 500 },
  { nombre: 'Mono Liso', categoria: 'Pintura', tipo: 'venta', telefono: 1160685637, precio: 500 }
]

var ProductoMuestra = [
  { nombre: 'Charango', categoria: 'Musica', tipo: 'muestra', telefono: 1160685641, obtencion: "Lo compras en la tienda" },
  { nombre: 'Bateria', categoria: 'Musica', tipo: 'muestra', telefono: 1160685640, obtencion: "apartir del lunes en la tienda" },
  { nombre: 'Mesa', categoria: 'Artesania', tipo: 'muestra', telefono: 1160685639, obtencion: "por pedido" },
  { nombre: 'Florero', categoria: 'Artesania', tipo: 'muestra', telefono: 1160685638, obtencion: "Agotado hasta el martes en la tienda" },
]

var Producto = [
  { nombre: 'Piano', categoria: 'Musica', tipo: 'venta', telefono: 1160685641, precio: 500 },
  { nombre: 'Guitarra', categoria: 'Musica', tipo: 'venta', telefono: 1160685640, precio: 500 },
  { nombre: 'Silla', categoria: 'Artesania', tipo: 'venta', telefono: 1160685639, precio: 500 },
  { nombre: 'Jarron', categoria: 'Artesania', tipo: 'venta', telefono: 1160685638, precio: 500 },
  { nombre: 'Mono Liso', categoria: 'Pintura', tipo: 'venta', telefono: 1160685637, precio: 500 },
  { nombre: 'Charango', categoria: 'Musica', tipo: 'muestra', telefono: 1160685641, obtencion: "Lo compras en la tienda" },
  { nombre: 'Bateria', categoria: 'Musica', tipo: 'muestra', telefono: 1160685640, obtencion: "apartir del lunes en la tienda" },
  { nombre: 'Mesa', categoria: 'Artesania', tipo: 'muestra', telefono: 1160685639, obtencion: "por pedido" },
  { nombre: 'Florero', categoria: 'Artesania', tipo: 'muestra', telefono: 1160685638, obtencion: "Agotado hasta el martes en la tienda" }
]


const formulario = document.querySelector('#formulario');

const categoria = document.querySelector('#categoria');

const resultado = document.querySelector('#resultado');


//en la siguiente linea selecciono el boton en el html y le doy una accion
document.querySelector('#btnfiltrar').addEventListener('click', function () {
  desvanecerImg();
});


//en la siguiente linea selecciono el boton en el html y le doy una accion
document.querySelector('#btnvertodos').addEventListener('click', function () {
  verImg();
});


const filtrar = () => {
  resultado.innerHTML = '';
  const texto = formulario.value.toLowerCase();

  for (let producto of Producto) {
    let nombre = producto.nombre.toLowerCase();
    //acá me dice que si no encuentra coincidencia en el resultado el indexof devuelve -1
    //entonces digo si encuentra lo que voy escribiendo, que me traiga todo lo que coincide
    if (nombre.indexOf(texto) !== -1 && (categoria.value == producto.categoria || categoria.value == "")) {
      if (producto.tipo == "venta") {

        resultado.innerHTML += `
          <li>${producto.nombre} - categoria: ${producto.categoria} - telefono:  ${producto.telefono}
          - precio: ${producto.precio}</li>
          `
      }
      else {
        //una vez que encuentro el texto lo devuelvo en un rasultado
        resultado.innerHTML += `
          <li>${producto.nombre} - categoria: ${producto.categoria} - telefono:  ${producto.telefono}
          - Forma de Obtenerlo: ${producto.obtencion}</li>
          `
      }
    }
  } if (resultado.innerHTML === '') {

    resultado.innerHTML += `
      <li>Producto no encontrado...</li>
      
      `
  }
}


function desvanecerImg() {

  const texto = formulario.value.toLowerCase();

  for (let producto of Producto) {
    let nombreProducto = producto.nombre.toLowerCase();
    if (nombreProducto.indexOf(texto) == -1) {
      //console.log(document.getElementById(nombreProducto).style.display);
      document.getElementById(nombreProducto).style.display = "none";
      //document.getElementById(nombreProducto).style.visibility = "hidden";
    }
  }
}


function verImg(input) {

  for (let producto of Producto) {
    
    let nombreProducto = producto.nombre.toLowerCase();
    input = nombreProducto;
    //console.log(document.getElementById(nombreProducto).style.display);

    console.log(nombreProducto);
    document.getElementById(nombreProducto).style.display="inline-block";
    //document.getElementById(nombreProducto).style.visibility = "visible";
  }
}



formulario.addEventListener('keyup', filtrar)
categoria.addEventListener('click', filtrar);

filtrar();