// Obtener el elemento de imagen del documento
var imagen = document.getElementById("imagen");

// Asignar una función al evento de clic del elemento
imagen.onclick = function() {
  // Agregar la clase animated al elemento
  imagen.classList.add("animated");
};
