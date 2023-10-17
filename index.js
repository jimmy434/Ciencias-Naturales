// Seleccionamos el elemento que contiene el texto
var texto = document.getElementById("titulo");

// Creamos una función para dividir el texto en letras
function dividirTexto() {
  // Obtenemos el contenido del texto
  var contenido = texto.innerHTML;

  // Creamos un array vacío para guardar las letras
  var letras = [];

  // Recorremos el contenido y añadimos cada letra al array
  for (var i = 0; i < contenido.length; i++) {
    letras.push(contenido[i]);
  }

  // Vaciamos el contenido del texto
  texto.innerHTML = "";

  // Creamos un elemento span por cada letra y lo añadimos al texto
  for (var i = 0; i < letras.length; i++) {
    var span = document.createElement("span");
    span.innerHTML = letras[i];
    texto.appendChild(span);
  }
}

// Creamos una función para hacer que las letras caigan como lluvia
function lluviaTexto() {
  // Obtenemos todos los elementos span dentro del texto
  var spans = texto.getElementsByTagName("span");

  // Recorremos los spans y les aplicamos un efecto de lluvia
  for (var i = 0; i < spans.length; i++) {
    // Generamos una posición aleatoria entre -300 y 300 para el eje x
    var x = Math.floor(Math.random() * 600) - 300;

    // Generamos una posición aleatoria entre -300 y -100 para el eje y
    var y = Math.floor(Math.random() * 200) - 300;

    // Generamos una rotación aleatoria entre -90 y 90 grados
    var r = Math.floor(Math.random() * 180) - 90;

    // Cambiamos el estilo del span para que se mueva a la posición (x, y) y rote r grados
    spans[i].style.transform = "translate(" + x + "px, " + y + "px) rotate(" + r + "deg)";

    // Generamos tres números aleatorios entre 0 y 255 para los colores rojo, verde y azul
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // Cambiamos el color del span a un color aleatorio usando los valores de rojo, verde y azul
    spans[i].style.color = "rgb(" + r + "," + g + "," + b + ")";
  }

  // Quitamos el evento onmouseover al elemento para evitar que se repita el efecto
  texto.onmouseover = null;

  // Añadimos el evento onmouseout al elemento para quitar el efecto lluvia
  texto.onmouseout = volverTexto;
}

// Creamos una función para devolver las letras a su posición original
function volverTexto() {
  // Obtenemos todos los elementos span dentro del texto
  var spans = texto.getElementsByTagName("span");

  // Recorremos los spans y les quitamos el efecto de lluvia
  for (var i = 0; i < spans.length; i++) {
    // Cambiamos el estilo del span para que se quede en la posición (0, 0) y no rote
    spans[i].style.transform = "translate(0px, 0px) rotate(0deg)";

    // Cambiamos el color del span a blanco
    spans[i].style.color = "white";
  }

   // Quitamos el evento onmouseout al elemento para evitar que se repita el efecto
   texto.onmouseout = null;

   // Añadimos el evento onmouseover al elemento para volver a aplicar el efecto lluvia
   texto.onmouseover = lluviaTexto;
}

// Dividimos el texto en letras al cargar la página
window.onload = dividirTexto;

// Añadimos el evento onmouseover al elemento para aplicar el efecto lluvia
texto.onmouseover = lluviaTexto;
