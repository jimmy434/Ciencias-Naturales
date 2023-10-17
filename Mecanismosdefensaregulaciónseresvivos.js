function changeImage() {
  var images = ["imgoctavou4/1.png", "imgoctavou4/2.png", "imgoctavou4/3.png", "imgoctavou4/4.png", "imgoctavou4/5.png", "imgoctavou4/6.png"];
  var index = Math.floor(Math.random() * images.length);
  document.getElementById("image").src = images[index];
}