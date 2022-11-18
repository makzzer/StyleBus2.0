//aca accedo a los campos del html del archivo crearCuenta.html


//const 
const formulariocc = document.getElementById('formularioCrearCuenta')

const nombrecc = document.getElementById('nombrecc')

const apellidocc = document.getElementById('apellidocc')

const mailcc = document.getElementById('emailcc')

const passwordcc = document.getElementById('passwordcc')

const direccioncc = document.getElementById('direccioncc')




//acá hago las variables y metodos de crear cuenta

const errorcc = document.getElementById('errorcc')
errorcc.style.color = 'red';


var mensajesErrorcc = []


function validarFormularioCrearCuenta() {
    console.log("estoy en el metodo crear cuenta")

    //creo lista de mensajes de crear cuenta vacio --> no se porque no me deja declararla como variable global


     if (nombrecc.value.length == 0 || apellidocc.value.length == 0 || mailcc.value.length == 0 || passwordcc.value.length == 0 || direccioncc.value.length == 0) {
        mensajesErrorcc.push('Por favor complete los campos vacios!')
        errorcc.innerHTML = mensajesErrorcc.join(', ')
        mensajesErrorcc = []


    } if (nombrecc.value.length > 0 && apellidocc.value.length > 0 && mailcc.value.length > 0 && passwordcc.value.length >= 8) {
        mensajesErrorcc.push('Registro correcto!')
        alert("Usuario creado correctamente")
        errorcc.innerHTML = mensajesErrorcc.join(', ')

    } if (passwordcc.value.length < 8 && mailcc.value.length != 0) {
        mensajesErrorcc.push('Password demasiado corta!')
        errorcc.innerHTML = mensajesErrorcc.join(', ')
        mensajesErrorcc = []


    } 
    mensajesErrorcc = []
    return false;

}