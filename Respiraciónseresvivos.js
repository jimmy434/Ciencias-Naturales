// Obtener todos los elementos <a> del documento
var enlaces = document.getElementsByTagName("a");

// Recorrer los elementos <a>
for (var i = 0; i < enlaces.length; i++) {
  // Obtener el elemento <h3> dentro del elemento <a>
  var titulo = enlaces[i].getElementsByTagName("h3")[0];

  // Comprobar si el texto del elemento <h3> es "Intercambio gaseoso"
  if (titulo.textContent == "Intercambio gaseoso") {
    // Asignar una función al evento de clic del elemento <a>
    enlaces[i].onclick = function() {
      // Mostrar un mensaje de alerta
      alert("Bienvenido a la evaluación de intercambio gaseoso");
    };
  }
}
