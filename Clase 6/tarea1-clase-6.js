/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
let $botonIngresar = document.querySelector("#boton-ingresar");
let $botonReiniciar = document.querySelector("#boton-reiniciar");

$botonReiniciar.onclick = function () {
  let nodoPrincipal = document.querySelector("body");
  nodoPrincipal.removeChild(nuevoFormulario);
};

$botonIngresar.onclick = function () {
  $botonIngresar.disabled = true;
  let cantidadPersonas = document.querySelector("#cantidad-integrantes").value;
  if (cantidadPersonas === "" || cantidadPersonas === " ") {
    alert("Ingrese un numero por favor");
    $botonIngresar.disabled = false;
    return (cantidadPersonas.value = "");
  } else if (Math.sign(cantidadPersonas) === -1) {
    alert("Ingrese un numero que no sea NEGATIVO");
    $botonIngresar.disabled = false;
    return (cantidadPersonas.value = "");
  } else if (cantidadPersonas == 0) {
    alert("El numero CERO es Invalido, por favor ingrese un numero Real");
    $botonIngresar.disabled = false;
    return (cantidadPersonas.value = "");
  } else {
    let nuevoFormulario = document.querySelector("#formulario-nuevo");

    for (let i = 0; i < cantidadPersonas; i++) {
      let numeracion = i + 1;

      //Creacion del componente label
      let createLabel = document.createElement("label");
      createLabel.innerText = `Ingrese la edad del Integrante ${numeracion}`;
      createLabel.style.marginRight = "10px";
      //Creacion de input edad Integrante con su id y placeholder
      let inputIntegrante = document.createElement("input");
      inputIntegrante.type = "number";
      inputIntegrante.style.margin = "5px";
      inputIntegrante.id = `input-integrante-${numeracion}`;
      inputIntegrante.classList.add("edad");
      inputIntegrante.placeholder = "Ingresar Edad";
      //Espacio
      let espacio = document.createElement("br");
      //Armado de formulario
      nuevoFormulario.style.margin = "20px";
      nuevoFormulario.appendChild(createLabel);
      nuevoFormulario.appendChild(inputIntegrante);
      nuevoFormulario.appendChild(espacio);
    }

    let nodoPrincipal = document.querySelector("body");

    //Creacion de elementos pre-existentes//

    //Espacio
    const espacioElementos = document.createElement("br");

    //label Mayor Edad
    let labelMayorEdad = document.createElement("label");
    labelMayorEdad.innerText = "La Mayor Edad es:";
    labelMayorEdad.style.marginRight = "10px";
    nodoPrincipal.appendChild(labelMayorEdad);

    //Input Mayor Edad
    let inputMayorEdad = document.createElement("input");
    inputMayorEdad.id = "input-mayor-edad";
    inputMayorEdad.disabled = true;
    inputMayorEdad.style.margin = "5px";
    nodoPrincipal.appendChild(inputMayorEdad);

    //label Menor Edad
    let labelMenorEdad = document.createElement("label");
    labelMenorEdad.innerText = "La Menor Edad es:";
    labelMenorEdad.style.marginRight = "10px";
    nodoPrincipal.appendChild(labelMenorEdad);

    //Input Menor Edad
    let inputMenorEdad = document.createElement("input");
    inputMenorEdad.id = "input-menor-edad";
    inputMenorEdad.disabled = true;
    inputMenorEdad.style.margin = "5px";
    nodoPrincipal.appendChild(inputMenorEdad);

    //label Edad Promedio
    let labelEdadPromedio = document.createElement("label");
    labelEdadPromedio.innerText = "La Edad Promedio es:";
    labelEdadPromedio.style.marginRight = "10px";
    nodoPrincipal.appendChild(labelEdadPromedio);

    //Input Edad Promedio
    let inputEdadPromedio = document.createElement("input");
    inputEdadPromedio.id = "input-edad-promedio";
    inputEdadPromedio.disabled = true;
    inputEdadPromedio.style.margin = "5px";
    nodoPrincipal.appendChild(inputEdadPromedio);

    nodoPrincipal.appendChild(espacioElementos);

    //Creacion de Boton Calcular las edades y el promedio de edad de los integrantes del grupo familiar.//
    let botonCalculoIntegrantes = document.createElement("button");
    botonCalculoIntegrantes.innerText = "Calcular";
    nodoPrincipal.appendChild(botonCalculoIntegrantes);

    //Boton Calcular (Edad Mayor, Menor y Promedio).//
    botonCalculoIntegrantes.onclick = function () {
      botonCalculoIntegrantes.disabled = true;
      let edad = document.querySelectorAll("#formulario-nuevo > .edad");
      let edades = [];

      for (let i = 0; i < cantidadPersonas; i++) {
        edades.push(Number(edad[i].value));

        if (
          edad[i].value === "" ||
          edad[i].value === " " ||
          edad[i].value == 0 ||
          Math.sign(edad[i].value) === -1
        ) {
          alert(
            "Por favor verifique que haya ingresado un numero o un numero correcto que no sea CERO o NUMERO NEGATIVO"
          );
          inputEdadPromedio.value = "";
          inputMayorEdad.value = "";
          inputMenorEdad.value = "";
          botonCalculoIntegrantes.disabled = false;
          return (edad[i].value = "");
        } else {
          //Ordeno el Array de MENOR a MAYOR para que siempre tome el valor del index "0" como el mas bajo y el ultimo index como el mas alto.//
          let edadesOrdenadas = edades.sort(function (a, b) {
            return a - b;
          });
          //Promedio las edades.//
          let promedio = 0;
          for (let i = 0; i < edades.length; i++) {
            promedio = promedio + edadesOrdenadas[i];
          }
          promedio = Math.floor(promedio / edadesOrdenadas.length);
          //Muestro la Mayor y menor edad y el promedio de edades.//
          inputMenorEdad.value = edadesOrdenadas[0];
          inputMayorEdad.value = edadesOrdenadas[edadesOrdenadas.length - 1];
          inputEdadPromedio.value = promedio;
        }
      }
    };
  }
};
//////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
