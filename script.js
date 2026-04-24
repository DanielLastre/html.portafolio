//* --- MENSAJE DE BIENVENIDA (TASK 5) --- */
// Esta función se ejecuta automáticamente cuando la página termina de cargar
window.onload = function() {
    alert("¡Bienvenido a mi portafolio, Jair Lastre!");
};

/* --- INTERACTIVIDAD DINÁMICA: MOSTRAR/OCULTAR Y CAMBIO DE TEXTO --- */
// Función que controla la visibilidad de la información extra y modifica los textos
function toggleInfo() {
    // Selección de elementos del DOM mediante sus IDs y clases
    const extraInfo = document.getElementById("extra-info"); // Párrafo oculto inicialmente
    const principal = document.getElementById("texto-principal"); // Párrafo de introducción
    const btn = document.querySelector(".btn"); // Botón que activa la función

    /* --- LÓGICA DE INTERCAMBIO (TOGGLE) --- */
    if (extraInfo.style.display === "none") {
        // ACCIÓN: Mostrar el contenido y actualizar mensajes
        extraInfo.style.display = "block";
        btn.textContent = "Mostrar menos";
        
        // Cambio dinámico del texto del párrafo principal
        principal.textContent = "¡Gracias por interesarte en mi perfil!";
    } else {
        // ACCIÓN: Ocultar el contenido y restablecer textos originales
        extraInfo.style.display = "none";
        btn.textContent = "Mostrar más";
        
        // Retorno al texto base del párrafo principal
        principal.textContent = "Soy una persona en constante crecimiento, enfocada en mejorar cada día tanto a nivel personal como profesional.";
    }
}
