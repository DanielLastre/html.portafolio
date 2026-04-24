// cambiar texto
function toggleInfo() {
    // 1. Intentamos encontrar el elemento por su ID
    var info = document.getElementById("extra-info");
    var boton = document.querySelector(".btn");

    // 2. Verificamos si el elemento existe antes de cambiarlo
    if (info) {
        if (info.style.display === "none" || info.style.display === "") {
            info.style.display = "block";       // Lo muestra
            boton.textContent = "MOSTRAR MENOS"; // Cambia el texto
        } else {
            info.style.display = "none";        // Lo oculta
            boton.textContent = "MOSTRAR MÁS";  // Vuelve al original
        }
    } else {
        console.log("Error: No encontré el ID 'extra-info'");
    }
}
// mensaje de bienvenido
window.onload = function(){
    this.alert("bienvenido a mi portafolio")
};