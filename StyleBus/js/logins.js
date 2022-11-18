let listUsuarios = [
  { mail: 'administrador@stylebus.com', password: 'admin1234', nombre: 'administrador', apellido: 'administrador,', domicilio: 'admin 785', DNI: '36000000', fechaNacimiento: '27091991', nombreTarjetadeCredito: 'Visa', numeroTarjetaDeCredito: '1111-1111-1111-1111', claveTarjetaDeCredito: '123' },

  { mail: 'makzofx@gmail.com', password: 'test1234', nombre: 'Maximiliano', apellido: 'Sanchez,', domicilio: 'Buschiazzo 785', DNI: '36293754', fechaNacimiento: '27091991', nombreTarjetadeCredito: 'Visa', numeroTarjetaDeCredito: '1111-1111-1111-1111', claveTarjetaDeCredito: '123' }

]

//busco los campos desde el html del archivo login.html

const usuarioLogin = document.getElementById('emailInput')
const passwordLogin = document.getElementById('PasswordInput')
const formularioLogin = document.getElementById('formularioLogin')



//acá hago las variables y metodos de login

const errorLogin = document.getElementById('error')
errorLogin.style.color = 'red';


var mensajesErrorLogin = []


//console.log(mensajesError)

function validarFormularioLogin() {
  //si pone usuario vacio
  if (usuarioLogin.value.length == 0) {
    mensajesErrorLogin.push('Por favor ingrese su usuario')
  }
  //si pone password vacia
  else if (passwordLogin.value.length == 0) {
    mensajesErrorLogin.push('Por favor ingrese su Password')
  }
  //veo si existe user y password
    else if (listUsuarios.some(us => us.mail === usuarioLogin.value && us.password == passwordLogin.value)) {
      alert("Bienvenido: " + usuarioLogin.value)
    mensajesErrorLogin.push('Login correcto!')

    //si existe el usuario pero la password es inccorta
  } else if (listUsuarios.some(us => us.mail === usuarioLogin.value && us.password != passwordLogin.value)) {
    mensajesErrorLogin.push('User o password incorrecto')

    //si el usuario ingresado no existe
  }else if (listUsuarios.some(us => us.mail != usuarioLogin.value)){
    mensajesErrorLogin.push('El usuario ingresado no existe')
  }



  //ahora voy a convertir el arreglo de mensajes de error en una cadena o texto para mostrarlo con el inner
  errorLogin.innerHTML = mensajesErrorLogin.join(', ')
  //vacio el array de mensajes para que no me los vuelva a mostrar
  mensajesErrorLogin = []
  //el siguiente return false es para que el formulario no se envie por defecto, tambien lo agrego en el onclick del form, para retornar el VALOR de la funcion validar Formulario
  //funciona igual que el event.preventDefault
  return false;

}



//ya la logica del login funciona, hay que probar para que recorra el array de usuarios reales y compruebe por user y password del mismo usuario


