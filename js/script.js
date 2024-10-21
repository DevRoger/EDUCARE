// Intervalo imagenes
var imagenes = ["images/home_home_1.jpg", "images/home_home_2.jpg","images/home_home_3.jpg"];
var indiceImagenActual = 0;

function cambiarImagen() {
  indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;
  document.getElementById('imagenPrincipal').src = imagenes[indiceImagenActual];
}

// Cambio automático cada 3 segundos (3000 milisegundos)
setInterval(cambiarImagen, 3000);

// Funcion correo automatico
function guardarCorreo(){
  var correo = document.getElementById("correo").value;
  localStorage.setItem("correo", correo);
}
function autocompletarCorreo(){
  var storedCorreo = localStorage.getItem("correo");
  document.getElementById("correo").value = storedCorreo;
}
autocompletarCorreo();

// Click actividades
function redirigir() {
  window.location.href = "https://www.google.com";
}








