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



//Errores generales
var mensajesErrorcc = []
const errorcc = document.getElementById('errorcc')
errorcc.style.color = 'red';

//Inputs con valores


//importo los campos del input desde el DOM
const nombreccIn = document.getElementById('nombre')
const apellidoccIn = document.getElementById('apellido')
const direccionCalleIn = document.getElementById('calleNombre')
const direccionNumeroIn = document.getElementById('numDireccion')
const fechaNacIn = document.getElementById('fechaNac')
const mailIn = document.getElementById('mail')
const passwordIn = document.getElementById('password')


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
    password: /^.{5,20}$/, // 5 a 20 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    cbu: /^\d{0,10}$/, // 10 numeros.
    claveCard: /^\d{0,3}$/,
    numCalle: /^\d{1,4}$/, // 1 a 4 numeros.
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




function validarFormulario() {
    var formularioCompleto = true;
    //si no colocó el nombre

    /*
    if (nombreccIn.value.length == 0 || nombreccIn.value == null && apellidoccIn.value.length == 0 || apellidoccIn.value == null && direccionCalleIn.value.length == 0 || direccionCalleIn.value == null && direccionNumeroIn.value.length == 0 || direccionNumeroIn.value == null && fechaNacIn.value == "" || fechaNacIn.value == null && mailIn.value == null || mailIn.value.length == 0 && passwordIn.value.length == 0 || passwordIn.value == null) {
        alert("Formulario vacio, complete los campos para continuar")
        formularioCompleto = false
    }*/
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

//validar la altura de la calle
const validarDireccionAltura = (expresion, input) => {
    if (expresion.test(input.value)) {
        campos.direccion_numero = true;
        erroresNumeroCalleMSJ.push("el campo NUMERO DE CALLE ingresado es VALIDO")
        errorCalleNumeroDIV.innerHTML = erroresNumeroCalleMSJ.join(', ')
        erroresNumeroCalleMSJ = []

    } else {
        campos.direccion_calle = false;
        erroresNumeroCalleMSJ.push("el campo NUMERO DE CALLE ingresado es INVALIDO")
        errorCalleNumeroDIV.innerHTML = erroresNumeroCalleMSJ.join(', ')
        erroresNumeroCalleMSJ = []

    }

}

//Validar el correo electronico
const validarMail = (expresion, input) => {
    if (expresion.test(input.value)) {
        campos.mail = true;
        erroresMailMSJ.push("el campo MAIL ingresado es Valido")
        errorMailDIV.innerHTML = erroresMailMSJ.join(', ')
        erroresMailMSJ = []

    } else {
        campos.mail = false;
        erroresMailMSJ.push("el campo MAIL ingresado no es Valido")
        errorMailDIV.innerHTML = erroresMailMSJ.join(', ')
        erroresMailMSJ = []

    }

}

//Validar password
const validarPassword = (expresion, input) => {
    if (expresion.test(input.value)) {
        campos.password = true;
        erroresPasswordMSJ.push("el campo PASSWORD ingresado es Valido")
        errorPasswordDIV.innerHTML = erroresPasswordMSJ.join(', ')
        erroresPasswordMSJ = []

    } else {
        campos.mail = false;
        erroresPasswordMSJ.push("el campo PASSWORD ingresado no es Valido")
        errorPasswordDIV.innerHTML = erroresPasswordMSJ.join(', ')
        erroresPasswordMSJ = []

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
