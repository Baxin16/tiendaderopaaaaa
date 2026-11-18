
// Recuperamos el valor permanente del carrito
let totalAcumulado = parseInt(localStorage.getItem('contadorPermanente')) || 0;

// Buscamos todas las etiquetas del contador de la página actual
const contadoresVisibles = document.querySelectorAll('.contador-valor');

// Elementos del formulario
const inputCantidad = document.getElementById('cantidad');
const btnSumar = document.getElementById('btn-sumar');
const btnReiniciar = document.getElementById('btn-reiniciar');

// Función para actualizar todos los contadores
function actualizarPantalla() {
    contadoresVisibles.forEach(contador => {
        contador.textContent = totalAcumulado;
    });
}

// Mostramos el valor guardado al cargar la página
actualizarPantalla();

// Verificamos si existe el botón de agregar al carrito
if (btnSumar && inputCantidad) {

    btnSumar.addEventListener('click', () => {

        const cantidadNueva = Number(inputCantidad.value);

        // Validamos la cantidad ingresada
        if (!Number.isInteger(cantidadNueva) || cantidadNueva < 1) {
            alert('Ingresa una cantidad válida, mayor que cero.');
            inputCantidad.focus();
            return;
        }

        // Sumamos los productos al carrito
        totalAcumulado += cantidadNueva;

        // Guardamos el nuevo total
        localStorage.setItem('contadorPermanente', totalAcumulado);

        // Actualizamos el contador visible
        actualizarPantalla();

        // Restablecemos la cantidad a 1
        inputCantidad.value = 1;

        alert('¡Producto agregado al carrito!');
    });
}

// Verificamos si existe el botón para reiniciar
if (btnReiniciar) {

    btnReiniciar.addEventListener('click', () => {

        totalAcumulado = 0;

        localStorage.setItem('contadorPermanente', totalAcumulado);

        actualizarPantalla();

        if (inputCantidad) {
            inputCantidad.value = 1;
        }
    });
}
