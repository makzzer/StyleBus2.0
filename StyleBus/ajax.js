console.log('ajax está conectado');



const mMuesra = document.querySelector('#muestra');

var lleno;


document.querySelector('#venta').addEventListener('click', function (valor) {
    obtenerDatos(valor);
});





document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var precio = document.getElementById("nombre-articulo").value;
    if(precio.length == 0) {
      alert('No has escrito nada en el nombre');
      return;
    }
    var telefono = document.getElementById("telefono-contacto").value;
    if (telefono.length == 0) {
      alert('No has escrito nada en el  telefono');
      return;
    }
    var direccion = document.getElementById("direccion").value;
    if(direccion.length == 0) {
        alert('No has escrito nada en direccion');
        return;
      }
    alert('Registro Exitoso');
    this.submit();
  }



function desaPrecio() {
    let precio = document.getElementById("precio-articulo");
    precio.disabled = true;
    document.getElementById("precio-articulo").value = "";
}


mMuesra.addEventListener('click', desaPrecio);




function obtenerDatos(valor) {

    let nombreArticuloPublicado = document.getElementById("nombre-articulo").value;
    console.log(nombreArticuloPublicado);



    let url = `https://api.mercadolibre.com/sites/MLA/search?q="${nombreArticuloPublicado}"&limit=1&sort=price_asc`

    let urlMayor = `https://api.mercadolibre.com/sites/MLA/search?q="${nombreArticuloPublicado}"&limit=1&sort=price_desc`

    //hago la consulta de precios menores
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    //checkeo los estados y recibo el text de response de precios menores
    api.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {

            //parseo el jason que recibo para poder recorrerlo y devolver los resultados necesarios

            let datos = JSON.parse(this.responseText)
            console.log(datos);
            //console.log(datos.results[0].thumbnail);

            //capturo el menor precio $
            let menor_precio = document.querySelector('#resultado_menor_precio');
            menor_precio.innerHTML = '';

            //capturo la imagen del articulo con menor precio

            var pic_peque = datos.results[0].thumbnail;
            console.log(pic_peque.toString());

            document.getElementById('foto_mas_bajo').src = pic_peque.toString();

            //ciclo para acceder a todos los elementos de resuls
            for (let item of datos.results) {
                menor_precio.innerHTML += `<li>$ ${item.price}</li>`
                document.getElementById("precio-sugerido").value = item.price*10;
            }
        }
    }

    //hago la consulta de precios mayores
    const apiMayor = new XMLHttpRequest();
    apiMayor.open('GET', urlMayor, true);
    apiMayor.send();


    //checkeo los estados y recibo el text de response de precios mayores
    apiMayor.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {

            let datosMayores = JSON.parse(this.responseText);
            console.log(datosMayores);


            let mayor_precio = document.querySelector('#resultado_mayor_precio');
            mayor_precio.innerHTML = '';


            var pic_grande = datosMayores.results[0].thumbnail;
            console.log(pic_grande.toString());

            document.getElementById('foto_mas_alto').src = pic_grande.toString();

            //ciclo para acceder a todos los elementos de resuls
            for (let itemMayor of datosMayores.results) {
                mayor_precio.innerHTML += `<li>$ ${itemMayor.price}</li>`
            }
        }

    }



}