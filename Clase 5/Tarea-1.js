//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

function mostrarDatos() {
  let nombreUsuario = document.getElementById("nombreUsuario").value.trim();
  let segundoNombreUsuario = document
    .getElementById("segundoNombreUsuario")
    .value.trim();
  let apellidoUsuario = document.getElementById("apellidoUsuario").value.trim();
  let edadUsuario = document.getElementById("edadUsuario").value.trim();

  if (nombreUsuario === "" || isNaN(nombreUsuario) === false) {
    alert("Por Favor Ingrese su Nombre");
  } else if (
    segundoNombreUsuario === "" ||
    isNaN(segundoNombreUsuario) === false
  ) {
    alert("Por Favor Ingrese su segundo Nombre");
  } else if (apellidoUsuario === "" || isNaN(apellidoUsuario) === false) {
    alert("Por Favor Ingrese su Apellido");
  } else if (edadUsuario === "" || isNaN(edadUsuario) === true) {
    alert("Por Favor Ingrese su Edad");
  } else {
    let bienvenida = (document.querySelector(
      ".datos"
    ).innerHTML = `Bienvenido ${nombreUsuario} ${segundoNombreUsuario} ${apellidoUsuario}!`);
    let mostrarDatos = (document.getElementById(
      "mostraDatosCompletos"
    ).innerHTML = `Hola,tu nombre es ${nombreUsuario} ${segundoNombreUsuario} ${apellidoUsuario} y tienes ${edadUsuario} años`);
  }
}
