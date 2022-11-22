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
const pinBancoIn = document.getElementById('CajaPassword')


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
    { mail: 'makzofx@gmail.com', password: 'test1234', nombre: 'maximiliano', apellido: 'sanchez', domicilioCalle: 'Buschiazzo', domicilioAltura: '785', DNI: '36293754', fechaNacimiento: '19910927', nombreTarjetadeCredito: 'maximiliano sanchez', numeroTarjetaDeCredito: '1111111111111111', claveTarjetaDeCredito: '123', fechavenTarjetaDeCredito: '20270425', mp: 'testmp123', pincbu: '1234' }

]


const campos = {
    passcard: false,
    nombre: false,
    apellido: false,
    mail: false,
    cbu: false,
    pinBanco: false,
    passMp: false,
}


const expresiones = {
    usuario: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // EMAIL VALIDO
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{5,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    cbu: /^\d{0,10}$/, // 10 numeros.
    claveCard: /^\d{0,3}$/,
    pinBanco: /^\d{4}$/,
}


const validarCampos = (e) => {
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
            validarpassMP(expresiones.password, e.target)
            break;
        case "CajaPassword":
            validarPinBanco(expresiones.pinBanco, e.target)
            break;
    }
}


const validarNombre = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        campos[campo] = true;

    } else {
        campos[campo] = false;
        mensajesErrorNombre.push("el campo NOMBRE es invalido. El nombre solo puede contener letras y espacios")
        errorNombre.innerHTML = mensajesErrorNombre.join(', ')
        mensajesErrorNombre = []
    }

}

const validarApellido = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        campos[campo] = true;

    } else {
        campos[campo] = false;
        mensajesErrorApellido.push("El campo: APELLIDO es invalido. El apellido solo puede contener letras y espacios")
        errorApellidoRecap.innerHTML = mensajesErrorApellido.join(', ')
        mensajesErrorApellido = []
    }

}

const validarEmail = (expresion, input) => {
    if (expresion.test(input.value)) {
        campos.mail = true;

    } else {
        campos.mail = false;
        mensajesErrorEmail.push("El campo: email es invalido. Por favor ingrese un correo electronico valido")
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

const validarPinBanco = (expresion, input) => {
    if (expresion.test(input.value)) {
        campos.pinBanco = true;

    } else {
        campos.pinBanco = false;
        console.log("fallo el pin bancario")
        mensajesErrorClaves.push("Formato de Pin bancario incorrecto. El formato son 4 digitos numericos")
        errorClaveOCBU.innerHTML = mensajesErrorClaves.join(', ')
        mensajesErrorClaves = []
    }

}


const validarpassMP = (expresion, input) => {
    if (expresion.test(input.value)) {
        campos.mp = true;

    } else {
        campos.mp = false;
        console.log("fallo la pass MercadoPago ")
        mensajesErrorClaves.push("Password de mercadoPago Incorrecta.")
        errorClaveOCBU.innerHTML = mensajesErrorClaves.join(', ')
        mensajesErrorClaves = []
    }

}





//habilitar o deshabilitar medios de pago
function OcultarclavesMediosDePago() {
    if (tarjetaCk.checked) {
        claveTarjetaIn.hidden = false;
        cbumpIn.hidden = true;
        pinBancoIn.hidden = true;
    } if (mercadoPagoCk.checked) {
        claveTarjetaIn.hidden = true;
        cbumpIn.hidden = false;
        pinBanco.hidden = true;
    } if (cajaAhorroCk.checked) {
        pinBancoIn.hidden = false;
        claveTarjetaIn.hidden = true;
        cbumpIn.hidden = true;
    }
}





function validarFormulario() {

    var formularioCompleto = true;

    //si completó el nombre
    if (nombreIn.value.length == 0 || nombreIn.value == null) {
        alert("debe completar su nombre para continuar")
        formularioCompleto = false;
    } else {
        if (campos.nombre) {
            console.log("nombre correcto")
        } else {
            formularioCompleto = false
            console.log("Por favor complete el nombre correctamente para continuar")
        }



    } if (apellidoIn.value.length == 0 || apellidoIn.value == null) {
        alert("debe completar el campo APELLIDO para continuar")
        formularioCompleto = false;
    } else {
        if (campos.apellido) {
            console.log("APELLIDO correcto")
        } else {
            formularioCompleto = false
            console.log(" Por favor complete el apellido correctamente para continuar")
        }




    } if (emailIn.value.length == 0 || emailIn.value == null) {
        alert("debe completar el campo EMAIL para continuar")
        formularioCompleto = false;
    } else {
        if (campos.mail) {
            console.log("MAIL correcto")
        } else {
            formularioCompleto = false
            alert("Por favor complete el MAIL correctamente para continuar")
        }





    } if (!tarjetaCk.checked && !mercadoPagoCk.checked && !cajaAhorroCk.checked) {
        formularioCompleto = false;
        alert("Debe seleccionar un metodo de pago para continuar")
    }
    //si selecciono tarjeta
    if (tarjetaCk.checked) {
        //si el campo de la clave de tarjeta es correcto
        if (campos.passcard) {
            //
            if (listUsuariosRECAP.some(us => us.nombre === nombreIn.value.toLowerCase() && us.apellido === apellidoIn.value.toLowerCase() && us.mail === emailIn.value.toLowerCase() && us.claveTarjetaDeCredito === claveTarjetaIn.value)) {
                mensajesErrorRecap.push('Pago confirmado con su tarjeta de Credito! Enviando mail de confirmación de reservaa la casilla ' + emailIn.value)
                errorRecap.innerHTML = mensajesErrorRecap.join(', ')
                mensajesErrorRecap = []


            } else {
                formularioCompleto = false;
                alert("La password ingresada no concuerda con la registrada")
            }
        } else {
            alert("error al procesar su pago la password es incorrecta")
            formularioCompleto = false;
        }

    }

    if (mercadoPagoCk.checked) {
        //si el campo de la clave de 
        if (campos.mp) {
            //
            if (listUsuariosRECAP.some(us => us.nombre === nombreIn.value.toLowerCase() && us.apellido === apellidoIn.value.toLowerCase() && us.mail === emailIn.value.toLowerCase() && us.mp === cbumpIn.value)) {
                mensajesErrorRecap.push('Pago confirmado con MercadoPago! Enviando mail de confirmación de reserva a la casilla ' + emailIn.value)
                errorRecap.innerHTML = mensajesErrorRecap.join(', ')
                mensajesErrorRecap = []


            } else {
                formularioCompleto = false;
                alert("La password de mercadoPago ingresada no concuerda con la registrada")
            }
        } else {
            alert("error al procesar su pago con MercadoPago la password es incorrecta")
            formularioCompleto = false;
        }
    }

    if (cajaAhorroCk.checked) {
        //si el campo de la clave de 
        if (campos.pinBanco) {
            //
            if (listUsuariosRECAP.some(us => us.nombre === nombreIn.value.toLowerCase() && us.apellido === apellidoIn.value.toLowerCase() && us.mail === emailIn.value.toLowerCase() && us.pincbu === pinBancoIn.value)) {
                mensajesErrorRecap.push('Pago confirmado con Caja de Ahorro! Enviando mail de confirmación de reservaa la casilla ' + emailIn.value)
                errorRecap.innerHTML = mensajesErrorRecap.join(', ')
                mensajesErrorRecap = []


            } else {
                formularioCompleto = false;
                alert("El pin bancario ingresado no concuerda con el registrado")
            }
        } else {
            alert("error al procesar su pago con Caja de ahorro el Pin bancario es incorrecto")
            formularioCompleto = false;
        }
    }

    return formularioCompleto;
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



    if (validarFormulario()) {
        alert("Formulario validado correctamente. Compra realizada")
    } else {
        alert("El formulario no se pudo validar. Compruebe los datos ingresados para realizar el pago")
    }

});

//para validar que los inputs cuando se deja de seleccionar el campo

inputs.forEach((input) => {
    input.addEventListener('keyup', validarCampos);
    input.addEventListener('blur', validarCampos);
})
