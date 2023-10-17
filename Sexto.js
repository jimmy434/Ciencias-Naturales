// Selecciona el elemento h1 con el id "titulo"
  var titulo = d3.select("#titulo");
  // Crea una escala de color que va desde el azul al rojo
  var color = d3.scaleLinear().domain([0, 10]).range(["blue", "red"]);
  // Crea una variable para controlar el estado de la animación
  var animando = true;
  // Crea una función que cambia el color del texto cada segundo
  function cambiarColor() {
    // Genera un número aleatorio entre 0 y 10
    var numero = Math.floor(Math.random() * 10);
    // Asigna el color correspondiente al texto según la escala
    titulo.style("color", color(numero));
    // Si el color es blanco, detiene la animación
    if (color(numero) === "white") {
      animando = false;
    }
    // Si la animación está activa, repite la función cada segundo
    if (animando) {
      setTimeout(cambiarColor, 1000);
    }
  }
  // Llama a la función inicialmente
  cambiarColor();


  // Crea una escala secuencial que usa d3.interpolateRainbow
  var color = d3.scaleSequential(d3.interpolateRainbow)
    .domain([0, 2 * Math.PI]); // El dominio son los ángulos en radianes
  // Selecciona el círculo y le asigna un atributo de color según el ángulo
  d3.select("circle")
    .attr("stroke", function(d, i) {
      return color(i / 360 * 2 * Math.PI); // Convierte los grados a radianes
    });

    