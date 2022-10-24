console.log('JS conectado!');


document.querySelector('#boton_validar_direccion').addEventListener('click', function (valor) {
    normalizarDireccion(valor);
});

var direccionValidada = false;

function normalizarDireccion(valor) {

    let calle = document.getElementById("calle").value;
    console.log(calle);

    let altura = document.getElementById("altura").value;
    console.log(altura);

    let localidad = document.getElementById("localidad").value;
    console.log(localidad);




    var eo_url_1 = 'http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=';
    var eo_url_ext = calle.toString();
    var eo_url_2 = altura.toString(),
        yourCode = localidad.toString(),
        resultUrl = '' + eo_url_1.concat(eo_url_ext, " ", eo_url_2, ",", yourCode);

    console.log(resultUrl);

    let url = resultUrl;


    //hago la normalizacion consultando la api
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();


    //chequear los estados y procesar el resultado
    api.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            //aca parseo el JSON

            let datosNormalizados = JSON.parse(this.responseText);
            console.log(datosNormalizados);

            let tabla_normalizada = document.querySelector('#resultado_normalizado');
            tabla_normalizada.innerHTML = '';


            //ciclo para acceder a todos los elementos de resuls
            //for (let direccion of datosNormalizados) {

            var dir = datosNormalizados.direccionesNormalizadas[0].direccion;
            console.log(dir);

            if (dir == "DON ANSELMO AIETA, CABA, CABA") {
                tabla_normalizada.innerHTML += `<li>No se ingresó correctamente la dirección, intente otra vez</li>`
            } else {
                tabla_normalizada.innerHTML += `<li>La dirección correcta es: ${dir}</li>`
            }


        }



    }


    direccionValidada = true;


}



document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById("nombre-taller").value;
    if(nombre.length == 0) {
      alert('No has escrito nada en el nombre');
      return;
    }
    var telefono = document.getElementById("telefono").value;
    if (telefono.length == 0) {
      alert('No has escrito nada en el  telefono');
      return;
    }
    if(direccionValidada == false ) {
        alert('No tienes una direccion valida');
        return;
      }
    alert('Registro Exitoso');
    this.submit();
  }
