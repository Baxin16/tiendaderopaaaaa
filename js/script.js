
// Recuperamos el valor permanente
let totalAcumulado = parseInt(localStorage.getItem('contadorPermanente')) || 0;

// Buscamos todas las etiquetas del contador que existan en la página actual
const contadoresVisibles = document.querySelectorAll('.contador-valor');

// Elementos del formulario (pueden no existir en todas las páginas)
const inputCantidad = document.getElementById('cantidad');
const btnSumar = document.getElementById('btn-sumar');
const btnReiniciar = document.getElementById('btn-reiniciar');

// Función para actualizar todas las etiquetas del contador a la vez
function actualizarPantalla() {
    contadoresVisibles.forEach(contador => {
        contador.textContent = totalAcumulado;
    });
}

// Pintamos el valor inicial al cargar la página actual
actualizarPantalla();

// Verificamos si el botón de sumar existe en ESTA página antes de asignarle el evento
if (btnSumar && inputCantidad) {
    btnSumar.addEventListener('click', () => {
        let cantidadNueva = parseInt(inputCantidad.value);
        if (isNaN(cantidadNueva)) cantidadNueva = 0;

        totalAcumulado += cantidadNueva;

        // Guardamos y actualizamos
        localStorage.setItem('contadorPermanente', totalAcumulado);
        actualizarPantalla();
    });
}

// Verificamos si el botón de reiniciar existe en ESTA página
if (btnReiniciar) {
    btnReiniciar.addEventListener('click', () => {
        totalAcumulado = 0;
        localStorage.setItem('contadorPermanente', totalAcumulado);
        actualizarPantalla();
        if (inputCantidad) inputCantidad.value = 1;
    });
}
