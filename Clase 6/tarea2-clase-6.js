/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.
Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

//////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////NODO PRINCIPAL/////
let nodoPrincipal = document.querySelector("body");
/////Botones/////
let $botonAgregar = document.querySelector("#boton-agregar");
let $botonQuitar = document.querySelector("#boton-quitar");
let $botonCalcular = document.querySelector("#boton-calcular");
let $reiniciarFormulario = document.querySelector("#reiniciar-formulario");
/////Formulario//////
let inputIntegrante = document.createElement("input");
let $cantidadIntegrantes = document.querySelector(
  "#cantidad-integrantes-parrafo"
);
let $mayorSalarioAnual = document.querySelector("#input-mayor-salario-anual");
let $menorSalarioAnual = document.querySelector("#input-menor-salario-anual");
let $salarioAnualPromedio = document.querySelector("#salario-anual-promedio");
let $salarioMensualPromedio = document.querySelector(
  "#salario-mensual-promedio"
);
/////contador de integrantes agregados/////
let contadorIntegrantes = 0;
////Contenedor de Inputs Agregados/////
let $formularioContainer = document.createElement("div");
$formularioContainer.id = "formulario-container";
nodoPrincipal.appendChild($formularioContainer);
/////Crear Label/////
function nuevoLabel() {
  let labelSalario = document.createElement("label");
  labelSalario.classList.add("salario-label");
  labelSalario.innerText = "Salario Anual";

  $formularioContainer.appendChild(labelSalario);
}
/////Crear Input/////
function nuevoInput() {
  let inputIntegrante = document.createElement("input");
  inputIntegrante.type = "number";
  inputIntegrante.classList.add("salario-value");
  inputIntegrante.placeholder = "Salario Anual";
  inputIntegrante.style.margin = "3px";
  inputIntegrante.min = "1";

  $formularioContainer.appendChild(inputIntegrante);
}
/////Borrar Input/////
function removerInput() {
  $formularioContainer.removeChild($formularioContainer.lastElementChild);
  $formularioContainer.removeChild($formularioContainer.lastElementChild);
}

/////Boton Agregar Integrante/////
$botonAgregar.onclick = function () {
  nuevoLabel();
  nuevoInput();
  contadorIntegrantes++;
  $cantidadIntegrantes.innerText = `Cantidad de Integrantes:${contadorIntegrantes}`;
};
/////Boton Quitar Integrante/////
$botonQuitar.onclick = function () {
  removerInput();
  contadorIntegrantes--;
  $cantidadIntegrantes.innerText = `Cantidad de Integrantes:${contadorIntegrantes}`;
};
/////Boton Calcular los Salarios/////
$botonCalcular.onclick = function () {
  let inputs = document.querySelectorAll(".salario-value");
  let inputsArray = [];

  for (let i = 0; i < inputs.length; i++) {
    inputsArray.push(inputs[i].value);
  }
  /////Ordena el array de menor a mayor/////
  inputsArray = inputsArray.sort(function (a, b) {
    return a - b;
  });
  /////Filtar los numeros para quitar los que sean de valor "0"//////
  function filtrarArray(numero) {
    return numero > 0;
  }
  inputsArray = inputsArray.filter(filtrarArray);

  //////Promedio de Salarios//////
  let promedioAnual = 0;
  for (let i = 0; i < inputsArray.length; i++) {
    promedioAnual = promedioAnual + Number(inputsArray[i]);
  }

  promedioAnual = Math.floor(promedioAnual / inputsArray.length);

  $menorSalarioAnual.value = inputsArray[0];
  $mayorSalarioAnual.value = inputsArray[inputsArray.length - 1];
  $salarioAnualPromedio.value = promedioAnual;
  $salarioMensualPromedio.value = Math.floor(promedioAnual / 12);
};

//////Boton Reiniciar Formulario/////
$reiniciarFormulario.onclick = function () {
  $menorSalarioAnual.value = "";
  $mayorSalarioAnual.value = "";
  $salarioAnualPromedio.value = "";
  $salarioMensualPromedio.value = "";
  $cantidadIntegrantes.innerText = "Cantidad de Integrantes:0";

  for (let i = contadorIntegrantes; i > 0; i--) {
    let nuevoLabel = document.querySelector(".salario-label");
    let nuevoInput = document.querySelector(".salario-value");
    nuevoLabel.remove();
    nuevoInput.remove();
  }

  contadorIntegrantes = 0;
};
