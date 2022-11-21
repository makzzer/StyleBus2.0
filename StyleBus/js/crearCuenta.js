//Accedo al DOM del formulario
const formulariocc = document.getElementById('formularioCrearCuenta')

//Accedo a todos los inputs del formulario osea todos los campos que tenga el formulario que complete el usuario
const inputs = document.querySelectorAll('#formularioCrearCuenta input')

//Accedo al div de errores
//Errores Nombre
var erroresNombreMSJ = []
const errorNombreDIV = document.getElementById('errorNombre')
errorNombreDIV.style.color = 'red';

//Errores apellido
var erroresApellidoMSJ = []
const errorApellidoDIV = document.getElementById('errorApellido')
errorApellidoDIV.style.color = 'red';

//Errores NombreCalleDireccion
var erroresNombreCalleMSJ = []
const errorCalleNombreDIV = document.getElementById('errorDirCalle')
errorCalleNombreDIV.style.color = 'red';

//Errores generales
var mensajesErrorcc = []
const errorcc = document.getElementById('errorcc')
errorcc.style.color = 'red';




//importo los campos del input desde el DOM
const nombrecc = document.getElementById('nombrecc')
const apellidocc = document.getElementById('apellidocc')
const mailcc = document.getElementById('emailcc')
const passwordcc = document.getElementById('passwordcc')
const direccioncc = document.getElementById('direccioncc')


const campos = {
    //formulario principal
    nombre: false,
    apellido: false,
    direccion_calle: false,
    direccion_numero: false,
    fecha_nac: false,
    mail: false,
    telefono: false,
    password1: false,
    password2: false,

    //formulario de tarjeta

    marcaTarjeta: false,
    nombreEnTarjeta: false,
    numeroTarjeta: false,
    vencimientoTarjetaMes: false,
    vencimientoTarjetaAño: false,

    //
}


const expresiones = {
    usuario: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // EMAIL VALIDO
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    cbu: /^\d{0,10}$/, // 10 numeros.
    claveCard: /^\d{0,3}$/,
}


/*
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

*/


const validarFormularioCC = e => {

    //despues del case , va lo que esté en el atributo "name" del campo input relacionado al caso en el html
    switch (e.target.name) {
        case "nombre":
            validarNombre(expresiones.nombre, e.target);
            break;
        case "apellido":
            validarApellido(expresiones.nombre, e.target);
            break;
        case "calleNombre":
            validarDireccionCalle(expresiones.nombre, e.target);
            break;

    }
}


const validarNombre = (expresion, input) => {
    if (expresion.test(input.value)) {
        console.log("estoy acaaaaaaaa")
        campos.nombre = true;
        erroresNombreMSJ.push("el campo NOMBRE es VALIDO")
        errorNombreDIV.innerHTML = erroresNombreMSJ.join(', ')
        erroresNombreMSJ = []

    } else {
        campos.nombre = false;
        console.log("ahoraa estoy acaaaaaaaa")
        erroresNombreMSJ.push("el campo NOMBRE es INVALIDO")
        errorNombreDIV.innerHTML = erroresNombreMSJ.join(', ')
        erroresNombreMSJ = []

    }

}

const validarApellido = (expresion, input) => {
    if (expresion.test(input.value)) {
        campos.apellido = true;
        erroresApellidoMSJ.push("el campo APELLIDO es VALIDO")
        errorApellidoDIV.innerHTML = erroresApellidoMSJ.join(', ')
        erroresApellidoMSJ = []

    } else {
        campos.apellido = false;
        erroresApellidoMSJ.push("el campo APELLIDO es INVALIDO")
        errorApellidoDIV.innerHTML = erroresApellidoMSJ.join(', ')
        erroresApellidoMSJ = []

    }

}

//validar la calle
const validarDireccionCalle = (expresion, input) => {
    if (expresion.test(input.value)) {
        campos.direccion_calle = true;
        erroresNombreCalleMSJ.push("el campo NOMBRE DE CALLE es VALIDO")
        errorCalleNombreDIV.innerHTML = erroresNombreCalleMSJ.join(', ')
        erroresNombreCalleMSJ = []

    } else {
        campos.direccion_calle = false;
        erroresNombreCalleMSJ.push("el campo NOMBRE DE CALLE es INVALIDO")
        errorCalleNombreDIV.innerHTML = erroresNombreCalleMSJ.join(', ')
        erroresNombreCalleMSJ = []

    }

}























formulariocc.addEventListener('submit', (e) => {

    e.preventDefault()


})


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormularioCC);
    input.addEventListener('blur', validarFormularioCC);
})