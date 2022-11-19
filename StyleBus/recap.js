//acceder a los elementos del dom

const formularioRecap = document.getElementById('formularioPagoRECAP')
const botonConfirmarcompra = document.getElementById('botonConfirmarCompraRECAP')
const inputs = document.querySelectorAll('#formularioPagoRECAP input')

//accediedo a los botones check de medios de pago
const tarjetaCk = document.getElementById('tarjetaCreditoCheck')
const mercadoPagoCk = document.getElementById('mercadoPagoCheck')
const cajaAhorroCk = document.getElementById('cajaAhorroCheck')

//accesos a divs de errores
const errorRecap = document.getElementById('errorRECAP')
const errorNombre = document.getElementById('errorNombreRECAP')
const errorApellidoRecap = document.getElementById('errorApellidoRECAP')
const errorMailRecap = document.getElementById('errorMailRECAP')
const errorClaveOCBU = document.getElementById('errorClaveOCBU')

//acceso a los inputs del formulario
const nombreIn = document.getElementById('nombreRECAP')
const apellidoIn = document.getElementById('apellidoRecap')
const emailIn = document.getElementById('emailRecap')

//accediendo al input de clave de metodo de pago
const claveTarjeta = document.getElementById('TarjetaCreditoInput')
const cbuMp = document.getElementById('mercadoPagoCVUInput')


//arrays de errores
var mensajesErrorRecap = [] //este va con errorRecap
var mensajesErrorNombre = []
var mensajesErrorApellido = []
var mensajesErrorEmail = []
var mensajesErrorClaves = [] //este va en el div de claves debajo del input de clave o cbu
errorRecap.style.color = 'red';
errorNombre.style.color = 'red';
errorApellidoRecap.style.color = 'red';
errorMailRecap.style.color = 'red';
errorClaveOCBU.style.color = 'red';

let listUsuariosRECAP = [
    { mail: 'administrador@stylebus.com', password: 'admin1234', nombre: 'administrador', apellido: 'administrador,', domicilio: 'admin 785', DNI: '36000000', fechaNacimiento: '27091991', nombreTarjetadeCredito: 'Visa', numeroTarjetaDeCredito: '1111-1111-1111-1111', claveTarjetaDeCredito: '123' },

    { mail: 'makzofx@gmail.com', password: 'test1234', nombre: 'Maximiliano', apellido: 'Sanchez,', domicilio: 'Buschiazzo 785', DNI: '36293754', fechaNacimiento: '27091991', nombreTarjetadeCredito: 'Visa', numeroTarjetaDeCredito: '1111-1111-1111-1111', claveTarjetaDeCredito: '123' }

]


const campos = {
    passcard: false,
    nombre: false,
    apellido: false,
    email: false,
    cbu: false,
}

console.log(campos)

console.log(campos.passcard)

const expresiones = {
    usuario: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // EMAIL VALIDO
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    cbu: /^\d{10}$/, // 10 numeros.
    claveCard: /^\d{0,3}$/,
}


const validarFormulario = (e) => {
    errorApellidoRecap.innerHTML = ''
    errorNombre.innerHTML = ''
    errorMailRecap.innerHTML = ''
    errorRecap.innerHTML = ''
    errorClaveOCBU.innerHTML = ''

    //despues del case , va lo que esté en el atributo "name" del campo input relacionado al caso en el html
    switch (e.target.name) {
        case "nombre":
            validarNombre(expresiones.nombre, e.target, 'nombre');
            console.log(e.target)
            break;
        case "apellido":
            validarApellido(expresiones.nombre, e.target, 'apellido');
            break;
        case "email":
            validarEmail(expresiones.correo, e.target, 'email');
            break;
        case "TarjetaCreditoInput":
            validarClaveTarjeta(expresiones.claveCard, e.target)
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
        campos.passcard = true;

    } else {
        campos[campo] = false;
        mensajesErrorEmail.push("el campo: " + campo + " es invalido")
        errorMailRecap.innerHTML = mensajesErrorEmail.join(', ')
        mensajesErrorEmail = []
    }

}

const validarClaveTarjeta = (expresion, input) => {
    if (expresion.test(input.value)) {
        console.log("clave tarjeta bien")
        campos.passcard = true;

    } else {
        campos.passcard = false;
        console.log("fallo la clave tarjeta")
        mensajesErrorClaves.push("Formato de clave incorrecta. Por favor ingrese los tres números de su clave")
        errorClaveOCBU.innerHTML = mensajesErrorClaves.join(', ')
        mensajesErrorClaves = []
    }

}


//habilitar o deshabilitar medios de pago
function OcultarclavesMediosDePago() {
    if (tarjetaCk.checked) {
        claveTarjeta.hidden = false;
        cbuMp.hidden = true;
    } if (mercadoPagoCk.checked) {
        claveTarjeta.hidden = true;
        cbuMp.hidden = false;
    } if (cajaAhorroCk.checked) {
        claveTarjeta.hidden = true;
        cbuMp.hidden = false;
    }
}




//voy a preguntar por el estado de los botones MEDIO DE PAGO
tarjetaCk.addEventListener('change', OcultarclavesMediosDePago)
mercadoPagoCk.addEventListener('change', OcultarclavesMediosDePago)
cajaAhorroCk.addEventListener('change', OcultarclavesMediosDePago)



console.log("check tarjeta" + tarjetaCk.checked)
console.log("check mercadoPago" + mercadoPagoCk.checked)
console.log("check Caja Ahorro" + cajaAhorroCk.checked)


//Para validar el formulario cuando lo envie
formularioRecap.addEventListener('submit', (e) => {
    console.log("estoy aca adentro")


    e.preventDefault()




    //si el formulario está vacio

    if (nombreIn.value.length == 0 && apellidoIn.value.length == 0 && emailIn.value.length == 0) {
        mensajesErrorRecap.push('Formulario vacio, por favor complete los campos correctamente para continuar')
        errorRecap.innerHTML = mensajesErrorRecap.join(', ')
        mensajesErrorRecap = []
        formularioRecap.reset()
        return
    }

    //si solo completó el nombre y puso comprar
    else if (nombreIn.value.length != 0 && apellidoIn.value.length == 0 && emailIn.value.length == 0) {
        mensajesErrorRecap.push('Por favor complete su apellido y correo electronico para continuar')
        errorRecap.innerHTML = mensajesErrorRecap.join(', ')
        mensajesErrorRecap = []
        return
    }

    //si solo completó el nombre y el apellido pero no el mail
    else if (nombreIn.value.length != 0 && apellidoIn.value.length != 0 && emailIn.value.length == 0) {
        console.log("estoy aca nombre y apellido sin mail")
        mensajesErrorRecap.push('Por favor complete su correo electronico para continuar')
        errorRecap.innerHTML = mensajesErrorRecap.join(', ')
        mensajesErrorRecap = []
        return
    }



    //si solo completó el nombre y mail pero no el apellido
    else if (nombreIn.value.length != 0 && apellidoIn.value.length == 0 && emailIn.value.length != 0) {
        mensajesErrorRecap.push('Por favor complete su Apellido para continuar')
        errorRecap.innerHTML = mensajesErrorRecap.join(', ')
        mensajesErrorRecap = []
        return
    }


    //si solo completó el apellido y puso comprar
    else if (nombreIn.value.length == 0 && apellidoIn.value.length != 0 && emailIn.value.length == 0) {
        mensajesErrorRecap.push('Por favor complete su nombre y correo electronico para continuar')
        errorRecap.innerHTML = mensajesErrorRecap.join(', ')
        mensajesErrorRecap = []
        return
    }

    //si solo completó el apellido y el mail y puso comprar
    else if (nombreIn.value.length == 0 && apellidoIn.value.length != 0 && emailIn.value.length != 0) {
        mensajesErrorRecap.push('Por favor complete su nombre para continuar')
        errorRecap.innerHTML = mensajesErrorRecap.join(', ')
        mensajesErrorRecap = []
        return
    }


    //si solo completó el mail y puso comprar
    else if (nombreIn.value.length == 0 && apellidoIn.value.length == 0 && emailIn.value.length != 0) {
        mensajesErrorRecap.push('Por favor complete su nombre y apellido para continuar')
        errorRecap.innerHTML = mensajesErrorRecap.join(', ')
        mensajesErrorRecap = []
        return
    }


    //Acá viene el caso correcto

    //si está todo completo confirma la compra --> validar con los datos de la lista de usuarios antes
    else if (nombreIn.value.length != 0 && apellidoIn.value.length != 0 && emailIn.value.length != 0) {
        mensajesErrorRecap.push('Compra correcta!!')
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