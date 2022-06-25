//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let lista = document.querySelectorAll("#listaNumeros > li");
let numeros = [];

//////Obtener los valores de la lista y colocarlos en un nuevo Array llamado "numeros"///////
for (let i = 0; i < lista.length; i++) {
  numeros.push(Number(lista[i].textContent));
}
//////Ordenar el Array "numeros" de Menor a Mayor y colocarlo en un Array nuevo llamado "numerosOrdenados"///////
let numerosOrdenados = numeros.sort(function (a, b) {
  return a - b;
});

function calcular() {
  //////Promedio//////
  let promedio = 0;
  for (let i = 0; i < numeros.length; i++) {
    promedio = Math.floor((promedio + numeros[i]) / numeros.length);
  }
  let numeroPromedio = document.querySelector("#numPromedio");
  numeroPromedio.innerHTML = `<em>El promedio es:</em> ${promedio}`;

  //////Numero Mas Pequeño//////
  let numeroPequenio = document.querySelector("#numeroPequeño");
  numeroPequenio.innerHTML = `<em>El número más pequeño es:</em> ${numerosOrdenados[0]}`;
  //////Numero Mas Grande//////
  let numeroGrande = document.querySelector("#numeroGrande");
  numeroGrande.innerHTML = `<em>El número más grande es:</em> ${
    numerosOrdenados[numerosOrdenados.length - 1]
  }`;
  //////Numero Repetido//////
  let numerosUnicos = [];
  let numerosRepetidos = [];
  let contador = 1;

  for (let i = 0; i < numerosOrdenados.length; i++) {
    if (numerosOrdenados[i + 1] === numerosOrdenados[i]) {
      let numeroFrecuente = document.querySelector("#numeroRepetido");
      numeroFrecuente.innerHTML = `<em>El número más frecuente es: ${numerosOrdenados[i]}</em>`;
      contador++;
    } else {
      numerosUnicos.push(numerosOrdenados[i]);
      numerosRepetidos.push(contador);
      contador = 1;
    }
  }
}
