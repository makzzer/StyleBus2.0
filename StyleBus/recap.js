//acceder a los elementos del dom

const formularioRecap = document.getElementById('formularioPagoRECAP')
const botonConfirmarcompra = document.getElementById('botonConfirmarCompraRECAP')
const errorRecap = document.getElementById('errorRECAP')
const errorNombre = document.getElementById('errorNombreRECAP')

const inputs = document.querySelectorAll('#formularioPagoRECAP input')

var mensajesErrorRecap = []
errorRecap.style.color = 'red';
errorNombre.style.color = 'red';

let listUsuariosRECAP = [
    { mail: 'administrador@stylebus.com', password: 'admin1234', nombre: 'administrador', apellido: 'administrador,', domicilio: 'admin 785', DNI: '36000000', fechaNacimiento: '27091991', nombreTarjetadeCredito: 'Visa', numeroTarjetaDeCredito: '1111-1111-1111-1111', claveTarjetaDeCredito: '123' },

    { mail: 'makzofx@gmail.com', password: 'test1234', nombre: 'Maximiliano', apellido: 'Sanchez,', domicilio: 'Buschiazzo 785', DNI: '36293754', fechaNacimiento: '27091991', nombreTarjetadeCredito: 'Visa', numeroTarjetaDeCredito: '1111-1111-1111-1111', claveTarjetaDeCredito: '123' }

]


const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

/*
function confirmarPago() {
    if (true) {
        mensajesErrorRecap.push("errorrrrrrrr")
        errorNombre.innerHTML = mensajesErrorRecap.join(',')
        //vacio el array de mensajes para que no me los vuelva a mostrar
        mensajesErrorRecap = []
    }
}*/


const validarFormulario =() =>{
    console.log('validando formulario, espere por favor')
}


//Para validar el formulario cuando lo envie
formularioRecap.addEventListener('submit', (e) => {
    e.preventDefault
})

//para validar que los inputs cuando se deja de seleccionar el campo

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})