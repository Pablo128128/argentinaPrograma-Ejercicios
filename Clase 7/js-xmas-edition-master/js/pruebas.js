function probarValidarNombre() {
  console.assert(
    validarNombre("") === "Este campo debe tener al menos 1 caracter",
    "Validar nombre no validó que el nombre no sea vacío"
  );

  console.assert(
    validarNombre(
      "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    ) === "Este campo debe tener menos de 50 caracteres",
    "Validar nombre no validó que el nombre sea menor a 50 caracteres"
  );
}

function probarValidarCiudad() {
  console.assert(
    validarCiudad("") === "Por favor indique la Ciudad donde vive",
    "Validar Ciudad no valido, el campo no puede quedar vacio"
  );
}

function probarValidarDescripcionRegalo() {
  console.assert(
    validarDescripcionRegalo("") ===
      "Este campo debe tener al menos 1 caracter",
    "Validar descripcion-Regalo no validó que el campo Regalo no sea vacío"
  );

  console.assert(
    validarDescripcionRegalo(
      "11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    ) === "Este campo debe tener menos de 100 caracteres",
    "Validar descripcion-Regalo no validó que la descripcion sea menor a 100 caracteres"
  );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
