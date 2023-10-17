// Agregar un evento de clic a los enlaces para abrirlos en una nueva pestaña.
const links = document.querySelectorAll('a');
for (const link of links) {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    window.open(link.getAttribute('href'), '_blank');
  });
}

// Agregar un evento de clic a las imágenes para mostrar una descripción.
const images = document.querySelectorAll('img');
for (const image of images) {
  image.addEventListener('click', (event) => {
    alert(image.alt);
  });
}

// Agregar un evento de clic al encabezado h1 para cambiar el color de fondo.
const h1 = document.querySelector('h1');
h1.addEventListener('click', (event) => {
  h1.style.backgroundColor = 'red';
});
