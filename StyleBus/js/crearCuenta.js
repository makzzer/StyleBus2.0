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

//Errores NumeroCalleDireccion
var erroresNumeroCalleMSJ = []
const errorCalleNumeroDIV = document.getElementById('errorDirNum')
errorCalleNumeroDIV.style.color = 'red';

//Errores Mail
var erroresMailMSJ = []
const errorMailDIV = document.getElementById('errorMail')
errorMailDIV.style.color = 'red';

//Errores Password
var erroresPasswordMSJ = []
const errorPasswordDIV = document.getElementById('errorPassword')
errorPasswordDIV.style.color = 'red';

//-----------Errores En Tarjeta de credito-------------
//Errores nombre tarjeta de crédito
var erroresNombreTarjetaCreditodMSJ = []
const errorNombreTarjetaCreditoDIV = document.getElementById('errorNombreTarjetaCredito')
errorNombreTarjetaCreditoDIV.style.color = 'red';

//Errores Numero tarjeta de credito
var erroresNumeroTarjetaCreditodMSJ = []
const errorNumeroTarjetaCreditoDIV = document.getElementById('errorNumeroTarjetaCredito')
errorNumeroTarjetaCreditoDIV.style.color = 'red';

//Errores Fecha Vencimiento tarjeta de credito
var erroresVencimientoTarjetaCreditodMSJ = []
const errorVencimientoTarjetaCreditoDIV = document.getElementById('errorVencimientoTarjetaCredito')
errorVencimientoTarjetaCreditoDIV.style.color = 'red';

//Errores CVV tarjeta de credito
var erroresCVVTarjetaCreditodMSJ = []
const errorCVVTarjetaCreditoDIV = document.getElementById('errorCVVTarjetaCredito')
errorCVVTarjetaCreditoDIV.style.color = 'red';








//-----------Errores En CajaDeAhorro-------------


//Errores CVU MercadoPago
var errornumCBUCajaAhorroMSJ = []
const errornumCBUCajaAhorroDIV = document.getElementById('errornumCBUCajaAhorro')
errornumCBUCajaAhorroDIV.style.color = 'red';

//Errores mail Banco
var errormailmailBancoMSJ = []
const errormailBancoDIV = document.getElementById('errormailBanco')
errormailBancoDIV.style.color = 'red';



//Errores pin Banco
var errorPasswordBancoMSJ = []
const errorPasswordBancoDIV = document.getElementById('errorPasswordBanco')
errorPasswordBancoDIV.style.color = 'red';






//-----------Errores En MercadoPago-------------
//Errores mail mercadoPago
var errormailMercadoPagodMSJ = []
const errormailMercadoPagoDIV = document.getElementById('errormailMercadoPago')
errormailMercadoPagoDIV.style.color = 'red';

//Errores Contraseña MercadoPago
var errorpasswordMercadoPagoMSJ = []
const errorpasswordMercadoPagoDIV = document.getElementById('errorpasswordMercadoPago')
errorpasswordMercadoPagoDIV.style.color = 'red';


//Errores CVU MercadoPago
var errorNumCVUMercadoPagoMSJ = []
const errorNumCVUMercadoPagoDIV = document.getElementById('errorNumCVUMercadoPago')
errorNumCVUMercadoPagoDIV.style.color = 'red';










//Errores generales
var mensajesErrorcc = []
const errorcc = document.getElementById('errorcc')
errorcc.style.color = 'red';


//importo los campos del input desde el DOM
const nombreccIn = document.getElementById('nombre')
const apellidoccIn = document.getElementById('apellido')
const direccionCalleIn = document.getElementById('calleNombre')
const direccionNumeroIn = document.getElementById('numDireccion')
const fechaNacIn = document.getElementById('fechaNac')
const mailIn = document.getElementById('mail')
const passwordIn = document.getElementById('password')

//importo los input de tarjeta de crédito

const nombreTarjetaCreditoIn = document.getElementById('nombreTarjetaCredito')
const numeroTarjetaCreditoIn = document.getElementById('numTarjetaDeCredito')
const fechaVencimientoTarjetaMESIn = document.getElementById('mesVencimientoTarjeta')
const fechaVencimientoTarjetaAñoIN = document.getElementById('AñoVencimientoTarjeta')
const CVVTarjetaCreditoIn = document.getElementById('CVVTarjetaCredito')

//importo los inputs de mercado Pago
const mailMercadoPagoIn = document.getElementById('mailMercadoPago')
const passwordMercadoPagoIn = document.getElementById('passwordMercadoPago')
const numCVUMercadoPagoIn = document.getElementById('numCVUMercadoPago')

//importo los inputs de Caja de Ahorro
const mailBancoIn = document.getElementById('mailBanco')
const PinBancoIn = document.getElementById('PinBanco')
const numCBUCajaAhorroIn = document.getElementById('numCBUCajaAhorro')




//Accedo a los sectores de formularios de pago
const formularioTarjetaGrupo = document.getElementById('formularioTarjetaGrupo')
const formularioMercadoPago = document.getElementById('formularioMercadoPagoGrupo')
const formularioCajaAhorro = document.getElementById('formularioCajaAhorro')


//accediedo a los botones check de medios de pago
const tarjetaCk = document.getElementById('tarjetaCreditoCheck')
const mercadoPagoCk = document.getElementById('mercadoPagoCheck')
const cajaAhorroCk = document.getElementById('cajaAhorroCheck')




let listUsuarios = [
    { mail: 'makzofx@gmail.com', password: 'test1234', nombre: 'maximiliano', apellido: 'sanchez', domicilioCalle: 'Buschiazzo', domicilioAltura: '785', DNI: '36293754', fechaNacimiento: '19910927', nombreTarjetadeCredito: 'maximiliano sanchez', numeroTarjetaDeCredito: '1111111111111111', claveTarjetaDeCredito: '123', fechavenTarjetaDeCredito: '20270425', mp: '2222222222', cbu: '3333333333' }

]


const campos = {
    //formulario principal
    nombre: false,
    apellido: false,
    direccion_calle: false,
    direccion_numero: false,
    fecha_nac: false,
    mail: false,
    telefono: false,
    password: false,

    //formulario de tarjeta

    nombreEnTarjeta: false,
    numeroTarjeta: false,
    vencimientoTarjetaMes: false,
    vencimientoTarjetaAño: false,
    cvvTarjeta: false,

    //Formulario de MercadoPago
    mailMercadoPago: false,
    contraseñaMercadoPago: false,
    CVUMercadoPago: false,

    //Formulario de CajadeAhorro
    mailBanco: false,
    PinBanco: false,
    CBUBanco: false,



}


const expresiones = {
    usuario: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // EMAIL VALIDO
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{7,20}$/, // 5 a 20 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    numTarjeta: /^\d{16}$/, // 16 numeros.
    cbu: /^\d{0,10}$/, // 10 numeros.
    claveCard: /^\d{0,3}$/,
    numCalle: /^\d{1,4}$/, // 1 a 4 numeros.
    mes: /^\d{2}$/, // 2 numeros.de 0 a 12
    año: /^\d{4}$/, // 4 numeros. de 1 a 31

    // CBU
    cbu: /^\d{22}$/, // 22 numeros.

    //Pin Banco
    pinBanco: /^\d{4}$/,


}

function calcularEdad(fecha_nacimiento) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha_nacimiento);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}

function tarjetaVencida(año, mes) {

    var hoy = new Date();
    var fechaCard = new Date(año + "-" + mes + "-" + 2)
    if (hoy > fechaCard) {
        console.log("la tarjeta está vencida")
        return true;
    } else {
        console.log("la tarjeta NO está vencida")
        return false;

    }



}

console.log(tarjetaVencida(2027, 09))


//habilitar o deshabilitar medios de pago
function OcultarFormulariosMediosDePago() {
    if (tarjetaCk.checked) {
        formularioTarjetaGrupo.hidden = false;
        formularioMercadoPago.hidden = true;
        formularioCajaAhorro.hidden = true;
    } if (mercadoPagoCk.checked) {
        formularioMercadoPago.hidden = false;
        formularioTarjetaGrupo.hidden = true;
        formularioCajaAhorro.hidden = true;

    } if (cajaAhorroCk.checked) {
        formularioCajaAhorro.hidden = false;
        formularioTarjetaGrupo.hidden = true;
        formularioMercadoPago.hidden = true;

    }
}

//voy a preguntar por el estado de los botones MEDIO DE PAGO
tarjetaCk.addEventListener('change', OcultarFormulariosMediosDePago)
mercadoPagoCk.addEventListener('change', OcultarFormulariosMediosDePago)
cajaAhorroCk.addEventListener('change', OcultarFormulariosMediosDePago)


function validarFormulario() {


    var formularioCompleto = true;
    //si no colocó el nombre

    if (nombreccIn.value.length == 0 || nombreccIn.value == null) {
        alert("debe completar el Nombre para continuar")
        formularioCompleto = false
    } else {
        if (campos.nombre) {
            console.log("todo cool con el nombre")
        } else {
            formularioCompleto = false
            console.log(" Por favor complete el nombre correctamente para continuar")
        }
    } if (apellidoccIn.value.length == 0 || apellidoccIn.value == null) {
        alert("debe completar el Apellido para continuar")
        formularioCompleto = false
    } else {
        if (campos.apellido) {
            alert("el campo Apellido está ok")
        } else {
            alert("el campo Apellido está completo pero no tiene un formato válido")
            formularioCompleto = false;
        }
    } if (direccionCalleIn.value.length == 0 || direccionCalleIn.value == null) {
        alert("debe completar el nombre de su calle para continuar")
        formularioCompleto = false
    } else {
        if (campos.direccion_calle) {
            alert("el campo nombre de calle está ok")
        } else {
            alert("el campo nombre de calle está completo pero no tiene un formato válido")
            formularioCompleto = false
        }
    } if (direccionNumeroIn.value.length == 0 || direccionNumeroIn.value == null) {
        alert("debe completar el numero de su calle para continuar")
        formularioCompleto = false
    } else {
        if (campos.direccion_numero) {
            alert("el campo numero de la calle ok")
        } else {
            alert("el campo altura de calle está completo pero no tiene un formato válido")
            formularioCompleto = false
        }
        //valido la fecha de nacimiento, que no sea menor a 18 años , ni que haya ingresado una fecha invalida

    } const fechaHoy = new Date();
    var año = fechaHoy.getFullYear()
    var mes = fechaHoy.getMonth()
    var dia = fechaHoy.getDate()
    var fechaHoySt = año + "-" + mes + "-" + dia

    //Si no ingresó la fecha
    if (fechaNacIn.value == "" || fechaNacIn.value == null) {
        alert("Debe ingresar su fecha de nacimiento para continuar")
        formularioCompleto = false;
        //si la ingresó
    } else {
        //si la ingresó pero la fecha de nacimiento es mayor a la fecha actual
        if (fechaNacIn.value > fechaHoySt) {
            alert("la fecha de nacimiento no puede ser mayor a la fecha actual")
            formularioCompleto = false;
            //si la ingresó pero la es menor de 18 años
        } else if (calcularEdad(fechaNacIn.value) < 18) {
            formularioCompleto = false;
            alert("no puede registrarse si es menor a 18 años, lo sentimos.")
        }
        //si no ingreso el mail
    } if (mailIn.value == null || mailIn.value.length == 0) {
        alert("debe completar su MAIL para continuar")
        formularioCompleto = false
    } else {
        //si lo ingreso pero y el mail ingresado es valido
        if (campos.mail) {
            //pero el mail ya está registrado
            if (listUsuarios.some(us => us.mail === mailIn.value.toLowerCase())) {
                alert("El mail ingresado ya se encuentra registrado")
                formularioCompleto = false
                alert("el campo mail está ok")
            } else {
                console.log("mail aceptado")
            }
        } else {
            alert("El mail ingresado no es valido, por favor ingrese un mail valido")
            formularioCompleto = false
        }
    } if (passwordIn.value.length == 0 || passwordIn.value == null) {
        alert("debe completar su Password para continuar")
        formularioCompleto = false
    } else {
        if (campos.password) {
            alert("Password Correcta")
        } else {
            alert("La password ingresada no cumple con los parametros de seguridad")
            formularioCompleto = false
        }
        //si no coloca ningun medio de pago avisarle y no continuar
    } if (!tarjetaCk.checked && !mercadoPagoCk.checked && !cajaAhorroCk.checked) {
        alert("Debe seleccionar un metodo de pago para continuar")
        formularioCompleto = false




        //si seleccionó tarjeta de credito
    } if (tarjetaCk.checked) {

        //si estan completo el nombre
        if (nombreTarjetaCreditoIn.value.length == 0 || nombreTarjetaCreditoIn.value == null) {
            formularioCompleto = false;
            alert("Por favor complete el nombre de la tarjeta de credito para continuar")
            if (numeroTarjetaCreditoIn.value.length == 0 || numeroTarjetaCreditoIn.value == null) {
                formularioCompleto = false;
                alert("Por favor complete el numero de la tarjeta de credito para continuar")
                if (fechaVencimientoTarjetaMESIn.value.length == 0 || fechaVencimientoTarjetaMESIn.value == null) {
                    formularioCompleto = false;
                    alert("Por favor complete el Mes de vencimiento de la tarjeta de credito para continuar")
                    if (fechaVencimientoTarjetaAñoIN.value.length == 0 || fechaVencimientoTarjetaAñoIN.value == null) {
                        formularioCompleto = false;
                        alert("Por favor complete el año de vencimiento de la tarjeta de credito para continuar")
                        if (CVVTarjetaCreditoIn.value.length == 0 || CVVTarjetaCreditoIn.value == null) {
                            formularioCompleto = false;
                            alert("Por favor complete el Codigo de seguridad de 3 digitos de la tarjeta de credito para continuar")
                        }
                    }
                }
            }
        } else {
            alert("paso la validacion voy a la parte de la tarjeta")

            //si estan todos los campos son y validos
            if (campos.nombreEnTarjeta && campos.numeroTarjeta && campos.vencimientoTarjetaAño && campos.vencimientoTarjetaMes && campos.cvvTarjeta) {


                //si la tarjeta no está vencida
                if (!tarjetaVencida(fechaVencimientoTarjetaAñoIN.value, fechaVencimientoTarjetaMESIn.value)) {
                    alert("todo en orden , agregamos el medio de pago de la tarjeta de credito")
                } else {
                    //si la tarjeta está vencida
                    alert("Tarjeta vencida, ingrese otra tarjeta o seleccione otro medio de pago para continuar")
                    formularioCompleto = false;
                }
            } else {
                formularioCompleto = false;
                alert("tarjeta no validada, corrija los campos ingresados para continuar")
            }

        }










    }



    //Si seleccionó MercadoPago
    if (mercadoPagoCk.checked) {

        //si no está completo el mail
        if (mailMercadoPagoIn.value.length == 0 || mailMercadoPagoIn.value == null) {
            formularioCompleto = false;
            alert("Por favor complete el MAIL DE MERDACOPAGO para continuar")
            if (passwordMercadoPagoIn.value.length == 0 || passwordMercadoPagoIn.value == null) {
                formularioCompleto = false;
                alert("Por favor complete la contraseña de mercadoPago para continuar")
                if (numCVUMercadoPagoIn.value.length == 0 || numCVUMercadoPagoIn.value.value == null) {
                    formularioCompleto = false;
                    alert("Por favor complete Su CVU de MERCADOPAGO para continuar")
                }
            }
            //si está completo el mail
        } else {

            if (campos.mailMercadoPago && campos.contraseñaMercadoPago && campos.CVUMercadoPago) {
                alert("Todo correcto en mercadoPago")
                if (listUsuarios.some(us => us.mail === mailMercadoPagoIn.value.toLowerCase())) {
                    alert("usuario ya registrado en mercadoPago, ingrese otro correo de mercado pago para continuar")
                    formularioCompleto = false;
                } else {
                    alert("todo bien con el usuario")
                }

            } else {
                formularioCompleto = false;
                alert("Error confirmando sus datos de mercado Pago, chekee los campos erroneos para continuar")
            }

        }










    }

    //Si seleccionó Caja de Ahorro
    if (cajaAhorroCk.checked) {

        //si no está completo el mail
        if (mailBancoIn.value.length == 0 || mailBancoIn.value == null) {
            formularioCompleto = false;
            alert("Por favor complete el MAIL REGISTRADO EN SU BANCO para continuar")
            if (PinBancoIn.value.length == 0 || PinBancoIn.value == null) {
                formularioCompleto = false;
                alert("Por favor complete el PIN DE SU BANCO para continuar")
                if (numCBUCajaAhorroIn.value.length == 0 || numCBUCajaAhorroIn.value.value == null) {
                    formularioCompleto = false;
                    alert("Por favor complete el cbu de su banco para continuar")
                }
            }
            //si está completo el mail
        } else {

            if (campos.mailBanco && campos.PinBanco && campos.CBUBanco) {
                alert("Todo correcto comunicandonos con su banco")
                if (listUsuarios.some(us => us.mail === mailBancoIn.value.toLowerCase())) {
                    alert("Ya existe otro usuario registrado con ese Mail, ingrese otro correo de cuenta bancaria para continuar")
                    formularioCompleto = false;
                } else {
                    alert("todo bien con el usuario bancario")
                }

            } else {
                formularioCompleto = false;
                alert("Error confirmando sus datos de cuenta bancaria, chekee los campos erroneos para continuar")
            }

        }










    }





    return formularioCompleto;

}




const validarCampos = e => {

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
        case "numDireccion":
            validarDireccionAltura(expresiones.numCalle, e.target);
            break;
        case "mail":
            validarMail(expresiones.correo, e.target);
            break;
        case "password":
            validarPassword(expresiones.password, e.target);
            break;
        case "nombreTarjetaCredito":
            validarNombreTarjeta(expresiones.nombre, e.target);
            break;
        case "numTarjetaDeCredito":
            validarNumeroTarjeta(expresiones.numTarjeta, e.target);
            break;
        case "mesVencimientoTarjeta":
            validarMesTarjeta(expresiones.mes, e.target);
            break;
        case "AñoVencimientoTarjeta":
            validarañoTarjeta(expresiones.año, e.target);
            break;
        case "CVVTarjetaCredito":
            validarCVVTarjeta(expresiones.claveCard, e.target);
            break;
        //CASOS DE MERCADO PAGO
        case "mailMercadoPago":
            validarMailMercadoPago(expresiones.correo, e.target);
            break;
        case "passwordMercadoPago":
            validarPasswordMercadoPago(expresiones.password, e.target);
            break;
        case "numCVUMercadoPago":
            validarCVUMercadoPago(expresiones.cbu, e.target);
            break;
        //CASOS DE CajaDeAhorro
        case "mailBanco":
            validarmailBanco(expresiones.correo, e.target);
            break;
        case "PinBanco":
            validarPinBanco(expresiones.pinBanco, e.target);
            break;
        case "numCBUCajaAhorro":
            validarnumCBUCajaAhorro(expresiones.cbu, e.target);
            break;





    }
}



//validar MercadoPago

//Validar el correo electronico mercadoPago
const validarmailBanco = (expresion, input) => {
    if (expresion.test(input.value)) {
        campos.mailBanco = true;
        //errormailmailBancoMSJ.push("el campo MAIL BANCARIO ingresado es Valido")
        //errormailBancoDIV.innerHTML = errormailmailBancoMSJ.join(', ')
        errormailmailBancoMSJ = []
        errormailBancoDIV.innerHTML = ""

    } else {
        campos.mailBanco = false;
        errormailmailBancoMSJ.push("el campo MAIL BANCARIO ingresado no es Valido. Se espera un mail valido. Ej: test@stylebus.com")
        errormailBancoDIV.innerHTML = errormailmailBancoMSJ.join(', ')
        errormailmailBancoMSJ = []

    }

}

//Validar el correo electronico de Mercado Pago
const validarPinBanco = (expresion, input) => {
    if (expresion.test(input.value)) {
        campos.PinBanco = true;
        errorPasswordBancoDIV.innerHTML = ""
        //errorPasswordBancoMSJ.push("el campo PIN BANCARIO ingresado es Valido")
        //errorPasswordBancoDIV.innerHTML = errorPasswordBancoMSJ.join(', ')
        errorPasswordBancoMSJ = []

    } else {
        campos.PinBanco = false;
        errorPasswordBancoMSJ.push("el campo PIN BANCARIO ingresado no es Valido. El formato correcto son 4 digitos numericos")
        errorPasswordBancoDIV.innerHTML = errorPasswordBancoMSJ.join(', ')
        errorPasswordBancoMSJ = []

    }

}

//Validar el CBU de MercadoPago 
const validarnumCBUCajaAhorro = (expresion, input) => {
    if (expresion.test(input.value)) {
        campos.CBUBanco = true;
        errornumCBUCajaAhorroDIV.innerHTML = ""
        //errornumCBUCajaAhorroMSJ.push("el campo CBU DE LA CAJA DE AHORRO es Valido")
        errornumCBUCajaAhorroDIV.innerHTML = errornumCBUCajaAhorroMSJ.join(', ')
        errornumCBUCajaAhorroMSJ = []

    } else {
        campos.CVUMercadoPago = false;
        errornumCBUCajaAhorroMSJ.push("el campo CBU DE CAJA DE AHORRO ingresado no es Valido. El Formato correcto son 22 digitos numericos")
        errornumCBUCajaAhorroDIV.innerHTML = errornumCBUCajaAhorroMSJ.join(', ')
        errornumCBUCajaAhorroMSJ = []

    }

}






const validarNombre = (expresion, input) => {
    if (expresion.test(input.value)) {
        console.log("estoy acaaaaaaaa")
        campos.nombre = true;
        //erroresNombreMSJ.push("el campo NOMBRE es VALIDO")
        //errorNombreDIV.innerHTML = erroresNombreMSJ.join(', ')
        errorNombreDIV.innerHTML = ""
        erroresNombreMSJ = []

    } else {
        campos.nombre = false;
        console.log("ahoraa estoy acaaaaaaaa")
        erroresNombreMSJ.push("el campo NOMBRE es INVALIDO. En este campo solo puede ingresar letras y espacios")
        errorNombreDIV.innerHTML = erroresNombreMSJ.join(', ')
        erroresNombreMSJ = []

    }

}

const validarApellido = (expresion, input) => {
    if (expresion.test(input.value)) {
        campos.apellido = true;
        //erroresApellidoMSJ.push("el campo APELLIDO es VALIDO")
        //errorApellidoDIV.innerHTML = erroresApellidoMSJ.join(', ')
        errorApellidoDIV.innerHTML = ""
        erroresApellidoMSJ = []

    } else {
        campos.apellido = false;
        erroresApellidoMSJ.push("el campo APELLIDO es INVALIDO. En este campo solo puede ingresar letras y espacios")
        errorApellidoDIV.innerHTML = erroresApellidoMSJ.join(', ')
        erroresApellidoMSJ = []

    }

}

//validar la calle
const validarDireccionCalle = (expresion, input) => {
    if (expresion.test(input.value)) {
        campos.direccion_calle = true;
        //erroresNombreCalleMSJ.push("el campo NOMBRE DE CALLE es VALIDO")
        //errorCalleNombreDIV.innerHTML = erroresNombreCalleMSJ.join(', ')
        errorCalleNombreDIV.innerHTML = ""
        erroresNombreCalleMSJ = []

    } else {
        campos.direccion_calle = false;
        erroresNombreCalleMSJ.push("el campo NOMBRE DE CALLE es INVALIDO. En este campo solo puede ingresar letras y espacios")
        errorCalleNombreDIV.innerHTML = erroresNombreCalleMSJ.join(', ')
        erroresNombreCalleMSJ = []

    }

}

//validar la altura de la calle
const validarDireccionAltura = (expresion, input) => {
    if (expresion.test(input.value)) {
        campos.direccion_numero = true;
        //erroresNumeroCalleMSJ.push("el campo NUMERO DE CALLE ingresado es VALIDO")
        //errorCalleNumeroDIV.innerHTML = erroresNumeroCalleMSJ.join(', ')
        erroresNumeroCalleMSJ = []
        errorCalleNumeroDIV.innerHTML = ""

    } else {
        campos.direccion_calle = false;
        erroresNumeroCalleMSJ.push("el campo NUMERO DE CALLE ingresado es INVALIDO. En este campo solo puede ingresar de 1 a 4 digitos numericos")
        errorCalleNumeroDIV.innerHTML = erroresNumeroCalleMSJ.join(', ')
        erroresNumeroCalleMSJ = []

    }

}

//Validar el correo electronico
const validarMail = (expresion, input) => {
    if (expresion.test(input.value)) {
        campos.mail = true;
        //erroresMailMSJ.push("el campo MAIL ingresado es Valido")
        //errorMailDIV.innerHTML = erroresMailMSJ.join(', ')
        errorMailDIV.innerHTML = ""
        erroresMailMSJ = []

    } else {
        campos.mail = false;
        erroresMailMSJ.push("el campo MAIL ingresado no es Valido. Por favor ingrese un correo electronico valido. Ej: test@stylebus.com")
        errorMailDIV.innerHTML = erroresMailMSJ.join(', ')
        erroresMailMSJ = []

    }

}

//Validar password
const validarPassword = (expresion, input) => {
    if (expresion.test(input.value)) {
        campos.password = true;
        //erroresPasswordMSJ.push("el campo PASSWORD ingresado es Valido")
        //errorPasswordDIV.innerHTML = erroresPasswordMSJ.join(', ')
        errorPasswordDIV.innerHTML = ""
        erroresPasswordMSJ = []

    } else {
        campos.mail = false;
        erroresPasswordMSJ.push("el campo PASSWORD ingresado no es Valido. La password debe tener al menos 7 caracteres. Puede incluis letras mayusculas, minusculas, numeros y simbolos.")
        errorPasswordDIV.innerHTML = erroresPasswordMSJ.join(', ')
        erroresPasswordMSJ = []

    }

}

//Validar NombreTarjeta
const validarNombreTarjeta = (expresion, input) => {
    if (expresion.test(input.value)) {
        campos.nombreEnTarjeta = true;
        //erroresNombreTarjetaCreditodMSJ.push("el campo Nombre tarjeta de credito es valido")
        //errorNombreTarjetaCreditoDIV.innerHTML = erroresNombreTarjetaCreditodMSJ.join(', ')
        errorNombreTarjetaCreditoDIV.innerHTML = ""
        erroresNombreTarjetaCreditodMSJ = []

    } else {
        campos.mail = false;
        erroresNombreTarjetaCreditodMSJ.push("el campo Nombre tarjeta de credito no es valido. En este campo solo pueden ingresarse letras y espacios")
        errorNombreTarjetaCreditoDIV.innerHTML = erroresNombreTarjetaCreditodMSJ.join(', ')
        erroresNombreTarjetaCreditodMSJ = []

    }

}

//Validar NumeroTarjeta
const validarNumeroTarjeta = (expresion, input) => {
    if (expresion.test(input.value)) {
        campos.numeroTarjeta = true;
        //erroresNumeroTarjetaCreditodMSJ.push("el campo Numero tarjeta de credito tiene formato valido")
        //errorNumeroTarjetaCreditoDIV.innerHTML = erroresNumeroTarjetaCreditodMSJ.join(', ')
        errorNumeroTarjetaCreditoDIV.innerHTML = ""
        erroresNumeroTarjetaCreditodMSJ = []

    } else {
        campos.mail = false;
        erroresNumeroTarjetaCreditodMSJ.push("el campo Numero tarjeta de credito no tiene formato valido. Deben ser 16 digitos numericos sin espacios ni guiones")
        errorNumeroTarjetaCreditoDIV.innerHTML = erroresNumeroTarjetaCreditodMSJ.join(', ')
        erroresNumeroTarjetaCreditodMSJ = []

    }

}


//Validar Mes Tarjeta
const validarMesTarjeta = (expresion, input) => {
    console.log("iv:" + input.value)
    if (input.value < 1 || input.value > 12) {
        campos.vencimientoTarjetaMes = false;
        console.log("el campo MES VENCIMIENTO no puede ser menor a 1 y mayor a 12")

        erroresVencimientoTarjetaCreditodMSJ.push("el campo MES VENCIMIENTO no puede ser menor a 1 o mayor a 12")
        errorVencimientoTarjetaCreditoDIV.innerHTML = erroresVencimientoTarjetaCreditodMSJ.join(', ')
        erroresVencimientoTarjetaCreditodMSJ = []
        return

    } else {

        if (expresion.test(input.value)) {
            campos.vencimientoTarjetaMes = true;
            errorVencimientoTarjetaCreditoDIV.innerHTML = ""
            //erroresVencimientoTarjetaCreditodMSJ.push("el campo MES VENCIMIENTO de credito tiene formato valido")
            //errorVencimientoTarjetaCreditoDIV.innerHTML = erroresVencimientoTarjetaCreditodMSJ.join(', ')
            erroresVencimientoTarjetaCreditodMSJ = []

        } else {
            campos.mail = false;
            erroresVencimientoTarjetaCreditodMSJ.push("el campo MES VENCIMIENTO de tarjeta de credito no tiene formato valido")
            errorVencimientoTarjetaCreditoDIV.innerHTML = erroresVencimientoTarjetaCreditodMSJ.join(', ')
            erroresVencimientoTarjetaCreditodMSJ = []

        }

    }


}

//Validar NumeroTarjeta
const validarañoTarjeta = (expresion, input) => {
    if (expresion.test(input.value)) {
        campos.vencimientoTarjetaAño = true;
        //erroresVencimientoTarjetaCreditodMSJ.push("el campo año VENCIMIENTO de tarjeta de credito tiene formato valido")
        //errorVencimientoTarjetaCreditoDIV.innerHTML = erroresVencimientoTarjetaCreditodMSJ.join(', ')
        errorVencimientoTarjetaCreditoDIV.innerHTML = ""
        erroresVencimientoTarjetaCreditodMSJ = []

    } else {
        campos.mail = false;
        erroresVencimientoTarjetaCreditodMSJ.push("el campo AÑO VENCIMIENTO de tarjeta de credito no tiene formato valido")
        errorVencimientoTarjetaCreditoDIV.innerHTML = erroresVencimientoTarjetaCreditodMSJ.join(', ')
        erroresVencimientoTarjetaCreditodMSJ = []

    }

}

//Validar CVV Tarjeta
const validarCVVTarjeta = (expresion, input) => {
    if (expresion.test(input.value)) {
        campos.cvvTarjeta = true;
        errorCVVTarjetaCreditoDIV.innerHTML = ""
        //erroresCVVTarjetaCreditodMSJ.push("el campo CVV de tarjeta de credito tiene formato valido")
        //errorCVVTarjetaCreditoDIV.innerHTML = erroresCVVTarjetaCreditodMSJ.join(', ')
        erroresCVVTarjetaCreditodMSJ = []

    } else {
        campos.cvvTarjeta = false;
        erroresCVVTarjetaCreditodMSJ.push("el campo CVV de tarjeta de credito no tiene formato valido. Debe ingresar los 3 digitos numericos de la clave de su tarjeta")
        errorCVVTarjetaCreditoDIV.innerHTML = erroresCVVTarjetaCreditodMSJ.join(', ')
        erroresCVVTarjetaCreditodMSJ = []

    }

}

//validar MercadoPago

//Validar el correo electronico mercadoPago
const validarMailMercadoPago = (expresion, input) => {
    if (expresion.test(input.value)) {
        campos.mailMercadoPago = true;
        errormailMercadoPagoDIV.innerHTML = ""
        //errormailMercadoPagodMSJ.push("el campo MAIL de Mercado Pago ingresado es Valido")
        //errormailMercadoPagoDIV.innerHTML = erroresMailMSJ.join(', ')
        errormailMercadoPagodMSJ = []

    } else {
        campos.mailMercadoPago = false;
        errormailMercadoPagodMSJ.push("el campo MAIL de MERCADO PAGO ingresado no es Valido. Debe ingresar un correo electronico valido. Ej: test@stylebus.com")
        errormailMercadoPagoDIV.innerHTML = errormailMercadoPagodMSJ.join(', ')
        errormailMercadoPagodMSJ = []

    }

}

//Validar el correo electronico de Mercado Pago
const validarPasswordMercadoPago = (expresion, input) => {
    if (expresion.test(input.value)) {
        campos.contraseñaMercadoPago = true;
        errorpasswordMercadoPagoDIV.innerHTML = ""
        //errorpasswordMercadoPagoMSJ.push("el campo CONTRASEÑA de Mercado Pago ingresado es Valido")
        //errorpasswordMercadoPagoDIV.innerHTML = errorpasswordMercadoPagoMSJ.join(', ')
        errorpasswordMercadoPagoMSJ = []

    } else {
        campos.contraseñaMercadoPago = false;
        errorpasswordMercadoPagoMSJ.push("el campo CONTRASEÑA de MERCADO PAGO ingresado no es Valido. Debe ser un minimo de 7 caracteres y puede contener letras minusculas, mayusculas, simbolos y numeros.")
        errorpasswordMercadoPagoDIV.innerHTML = errorpasswordMercadoPagoMSJ.join(', ')
        errorpasswordMercadoPagoMSJ = []

    }

}

//Validar el CBU de MercadoPago 
const validarCVUMercadoPago = (expresion, input) => {
    if (expresion.test(input.value)) {
        campos.CVUMercadoPago = true;
        errorNumCVUMercadoPagoDIV.innerHTML = ""
        //errorNumCVUMercadoPagoMSJ.push("el campo CVU DE MERCADO Pago ingresado es Valido")
        //errorNumCVUMercadoPagoDIV.innerHTML = errorNumCVUMercadoPagoMSJ.join(', ')
        errorNumCVUMercadoPagoMSJ = []

    } else {
        campos.CVUMercadoPago = false;
        errorNumCVUMercadoPagoMSJ.push("el campo  CVU DE MERCADO Pago ingresado no es Valido. Deben ser 22 digitos numericos")
        errorNumCVUMercadoPagoDIV.innerHTML = errorNumCVUMercadoPagoMSJ.join(', ')
        errorNumCVUMercadoPagoMSJ = []

    }

}











formulariocc.addEventListener('submit', e => {

    e.preventDefault();

    if (validarFormulario()) {
        alert("Usuario agregado correctamente!")
    } else {
        alert("Error al Agregar el usuario, por favor corrija los campos incorrectos")
    }


});




inputs.forEach((input) => {
    input.addEventListener('keyup', validarCampos);
    input.addEventListener('blur', validarCampos);
})