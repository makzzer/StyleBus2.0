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
const claveTarjetaIn = document.getElementById('TarjetaCreditoInput')
const cbumpIn = document.getElementById('mercadoPagoCVUInput')


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
    { mail: 'makzofx@gmail.com', password: 'test1234', nombre: 'maximiliano', apellido: 'sanchez', domicilioCalle: 'Buschiazzo', domicilioAltura: '785', DNI: '36293754', fechaNacimiento: '19910927', nombreTarjetadeCredito: 'maximiliano sanchez', numeroTarjetaDeCredito: '1111111111111111', claveTarjetaDeCredito: '123', fechavenTarjetaDeCredito: '20270425', mp: '2222222222', cbu: '3333333333' }

]


const campos = {
    passcard: false,
    nombre: false,
    apellido: false,
    mail: false,
    cbu: false,
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
            validarEmail(expresiones.correo, e.target);
            break;
        case "TarjetaCreditoInput":
            validarClaveTarjeta(expresiones.claveCard, e.target)
            break;
        case "mercadoPagoCVUInput":
            validarCbu(expresiones.cbu, e.target)
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

const validarEmail = (expresion, input) => {
    if (expresion.test(input.value)) {
        campos.mail = true;

    } else {
        campos.mail = false;
        mensajesErrorEmail.push("el campo: email es invalido")
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

const validarCbu = (expresion, input) => {
    if (expresion.test(input.value)) {
        console.log("CBU correcto")
        campos.cbu = true;

    } else {
        campos.cbu = false;
        console.log("fallo el CBU ")
        mensajesErrorClaves.push("Formato de CBU de MercadoPago incorrecto. El CBU deben ser 10 Digitos numericos")
        errorClaveOCBU.innerHTML = mensajesErrorClaves.join(', ')
        mensajesErrorClaves = []
    }

}


//habilitar o deshabilitar medios de pago
function OcultarclavesMediosDePago() {
    if (tarjetaCk.checked) {
        claveTarjetaIn.hidden = false;
        cbumpIn.hidden = true;
    } if (mercadoPagoCk.checked) {
        claveTarjetaIn.hidden = true;
        cbumpIn.hidden = false;
    } if (cajaAhorroCk.checked) {
        claveTarjetaIn.hidden = true;
        cbumpIn.hidden = false;
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

    //si está todo completo confirma la compra --> validar con los datos de la lista de usuarios antes elaborada
    else if (nombreIn.value.length != 0 && apellidoIn.value.length != 0 && emailIn.value.length != 0) {
        if (campos.nombre && campos.apellido && campos.mail) {

            if (tarjetaCk.checked === true && campos.passcard) {
                console.log(tarjetaCk.checked)


                if (listUsuariosRECAP.some(us => us.nombre === nombreIn.value.toLowerCase() && us.apellido === apellidoIn.value.toLowerCase() && us.mail === emailIn.value.toLowerCase() && us.claveTarjetaDeCredito === claveTarjetaIn.value)) {
                    mensajesErrorRecap.push('Pago confirmado con su tarjeta de Credito! Enviando mail de confirmación de reservaa la casilla ' + emailIn.value)
                    errorRecap.innerHTML = mensajesErrorRecap.join(', ')
                    mensajesErrorRecap = []



                } else {
                    mensajesErrorRecap.push('Ha habido un problema en procesar el pago con su tarjeta de crédito, por favor revise sus datos o seleccione otro medio de pago y vuelva a intentarlo')
                    errorRecap.innerHTML = mensajesErrorRecap.join(', ')
                    mensajesErrorRecap = []
                }

            } else if (mercadoPagoCk.checked === true && campos.passcard) {
                if (listUsuariosRECAP.some(us => us.nombre === nombreIn.value.toLowerCase() && us.apellido === apellidoIn.value.toLowerCase() && us.mail === emailIn.value.toLowerCase() && us.mp === cbumpIn.value)) {
                    mensajesErrorRecap.push('Pago confirmado con Mercado Pago! Enviando mail de confirmación de reserva a la casilla ' + emailIn.value)
                    errorRecap.innerHTML = mensajesErrorRecap.join(', ')
                    mensajesErrorRecap = []



                } else {
                    mensajesErrorRecap.push('Ha habido un problema en procesar el pago con MercadoPago, por favor revise sus datos o seleccione otro medio de pago y vuelva a intentarlo')
                    errorRecap.innerHTML = mensajesErrorRecap.join(', ')
                    mensajesErrorRecap = []
                }

            }
        }
    }

});

//para validar que los inputs cuando se deja de seleccionar el campo

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})