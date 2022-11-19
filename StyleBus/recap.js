//acceder a los elementos del dom

const formularioRecap = document.getElementById('formularioPagoRECAP')
const botonConfirmarcompra = document.getElementById('botonConfirmarCompraRECAP')
const inputs = document.querySelectorAll('#formularioPagoRECAP input')

//accesos a divs de errores
const errorRecap = document.getElementById('errorRECAP')
const errorNombre = document.getElementById('errorNombreRECAP')
const errorApellidoRecap = document.getElementById('errorApellidoRECAP')
const errorMailRecap = document.getElementById('errorMailRECAP')

//acceso a los inputs del formulario
const nombreIn = document.getElementById('nombreRECAP')
const apellidoIn = document.getElementById('apellidoRecap')
const emailIn = document.getElementById('emailRecap')

//arrays de errores

var mensajesErrorRecap = []
var mensajesErrorNombre = []
var mensajesErrorApellido = []
var mensajesErrorEmail = []
errorRecap.style.color = 'red';
errorNombre.style.color = 'red';
errorApellidoRecap.style.color = 'red';
errorMailRecap.style.color = 'red';

let listUsuariosRECAP = [
    { mail: 'administrador@stylebus.com', password: 'admin1234', nombre: 'administrador', apellido: 'administrador,', domicilio: 'admin 785', DNI: '36000000', fechaNacimiento: '27091991', nombreTarjetadeCredito: 'Visa', numeroTarjetaDeCredito: '1111-1111-1111-1111', claveTarjetaDeCredito: '123' },

    { mail: 'makzofx@gmail.com', password: 'test1234', nombre: 'Maximiliano', apellido: 'Sanchez,', domicilio: 'Buschiazzo 785', DNI: '36293754', fechaNacimiento: '27091991', nombreTarjetadeCredito: 'Visa', numeroTarjetaDeCredito: '1111-1111-1111-1111', claveTarjetaDeCredito: '123' }

]


const campos = {
    nombre: false,
    apellido: false,
    email: false,
    medioPago: false,
    telefono: false
}


const expresiones = {
    usuario: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // EMAIL VALIDO
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


const validarFormulario = (e) => {
    errorApellidoRecap.innerHTML = ''
    errorNombre.innerHTML = ''
    errorMailRecap.innerHTML = ''
    errorRecap.innerHTML = ''

    switch (e.target.name) {
        case "nombre":
            validarNombre(expresiones.nombre, e.target, 'nombre');
            break;
        case "apellido":
            validarApellido(expresiones.nombre, e.target, 'apellido');
            break;
        case "email":
            validarEmail(expresiones.correo, e.target, 'email');
            break;
    }
}




const validarNombre = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        campos[campo] = true;

    } else {
        campos[campo] = false;
        mensajesErrorNombre.push("el campo: " + campo + " es invalido")
        errorNombre.innerHTML = mensajesErrorNombre.join(', ')
        mensajesErrorNombre = []
    }

}

const validarApellido = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        campos[campo] = true;

    } else {
        campos[campo] = false;
        mensajesErrorApellido.push("el campo: " + campo + " es invalido")
        errorApellidoRecap.innerHTML = mensajesErrorApellido.join(', ')
        mensajesErrorApellido = []
    }

}

const validarEmail = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        campos[campo] = true;

    } else {
        campos[campo] = false;
        mensajesErrorEmail.push("el campo: " + campo + " es invalido")
        errorMailRecap.innerHTML = mensajesErrorEmail.join(', ')
        mensajesErrorEmail = []
    }

}




//Para validar el formulario cuando lo envie
formularioRecap.addEventListener('submit', (e) => {
    console.log("estoy aca adentro")
    
    e.preventDefault()

    //si el formulario está vacio
    if (campos.nombre == false && campos.apellido == false && campos.email == false) {
        mensajesErrorRecap.push('formulario vacio, por favor complete los campos correctamente para continuar')
        errorRecap.innerHTML = mensajesErrorRecap.join(', ')
        mensajesErrorRecap = []
        return
    }


});

//para validar que los inputs cuando se deja de seleccionar el campo

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})