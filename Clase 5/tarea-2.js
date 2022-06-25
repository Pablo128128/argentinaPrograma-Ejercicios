//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

///////CREAR FORMULARIO CON FOR LOOP//////////////
const cantidad_Videos = 5;

function creacionFormulario() {
  for (let i = 0; i < cantidad_Videos; i++) {
    let nuevoFormulario = document.querySelector(".videos");
    //label
    let labelVideo = document.createElement("label");
    labelVideo.textContent = `Video ${i + 1}`;
    //input Video
    let inputHoraVideo = document.createElement("input");
    inputHoraVideo.type = "number";
    inputHoraVideo.id = `duracionVideo${i + 1}`;
    inputHoraVideo.placeholder = "Hora";
    //input Minutos
    let inputMinutosVideo = document.createElement("input");
    inputMinutosVideo.type = "number";
    inputMinutosVideo.id = `duracionMinutos${i + 1}`;
    inputMinutosVideo.placeholder = "Minutos";
    //input Segundos
    let inputSegundosVideo = document.createElement("input");
    inputSegundosVideo.type = "number";
    inputSegundosVideo.id = `duracionSegundos${i + 1}`;
    inputSegundosVideo.placeholder = "Segundos";
    //Espacio
    let espacio = document.createElement("br");

    //creacion de formulario
    nuevoFormulario.appendChild(labelVideo);
    nuevoFormulario.appendChild(inputHoraVideo);
    nuevoFormulario.appendChild(inputMinutosVideo);
    nuevoFormulario.appendChild(inputSegundosVideo);
    nuevoFormulario.appendChild(espacio);
  }
}

/////Calculo/////
function calcular() {
  let horas = 0;
  let minutos = 0;
  let segundos = 0;

  for (let i = 0; i < cantidad_Videos; i++) {
    let cantidadHoras = Number(
      document.querySelector(`#duracionVideo${i + 1}`).value
    );
    horas += cantidadHoras;

    let cantidadMinutos = Number(
      document.querySelector(`#duracionMinutos${i + 1}`).value
    );
    minutos += cantidadMinutos;

    let cantidadSegundos = Number(
      document.querySelector(`#duracionSegundos${i + 1}`).value
    );
    segundos += cantidadSegundos;
  }

  //////Segundos a Minutos/////
  segundosAMinutos = Math.trunc(segundos / 60);

  minutos += segundosAMinutos;
  segundos = Math.round((segundos / 60 - segundosAMinutos) * 60);

  /////Minutos a Horas/////
  minutosAHoras = Math.trunc(minutos / 60);

  horas += minutosAHoras;
  minutos = Math.round((minutos / 60 - minutosAHoras) * 60);

  /////Resultado/////
  let resultado = `La Cantidad de Tiempo es de: ${horas} horas, ${minutos} minutos, ${segundos} segundos`;

  let mostrarResultado = (document.querySelector("#resultado").innerHTML =
    resultado);
}

creacionFormulario();
