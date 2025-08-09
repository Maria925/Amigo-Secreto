// Almacena los nombres de los amigos agregados por el usuario
let amigos = [];

// Referencias a los elementos HTML que se van a manipular
const input = document.getElementById('idAmigo');
const resultadoSorteo = document.getElementById('resultadoSorteo');
const cuerpoTabla = document.getElementById('cuerpoTabla');

// Centraliza los colores para mantener un estilo visual consistente
const colores = { success: '#43a047', warning: '#f59a12', error: '#c10505' };

// Añade un nuevo amigo a la lista después de validar su nombre y evita duplicados con mensajes de error.
function agregarAmigo() {
    const nombreOriginal = input.value;
    if (!validarNombre(nombreOriginal)) return;

    const nombreLimpio = normalizarNombre(nombreOriginal);
    if (amigos.includes(nombreLimpio)) {
        limpiarInput();
        return mostrarMensajeAlerta("Este nombre ya fue agregado");

    }
    amigos.push(nombreLimpio);
    actualizarTabla();
    mostrarMensajeAlerta("El amigo se agregó correctamente", "success", "¡Hecho!");
    limpiarInput();
}

// Verifica que el nombre ingresado cumpla con las reglas
function validarNombre(nombre) {
    const nombreLimpio = normalizarNombre(nombre);
    const reglas = [
        { condicion: !nombre.trim(), mensaje: "Por favor, inserte un nombre" },
        { condicion: /\s{2,}/.test(nombre), mensaje: "No se permiten múltiples espacios seguidos" },
        { condicion: nombreLimpio.length < 2 || nombreLimpio.length > 30, mensaje: "El nombre debe tener entre 2 y 30 caracteres" },
        { condicion: !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombreLimpio), mensaje: "El nombre solo puede contener letras" },
        { condicion: nombreLimpio === nombreLimpio.toUpperCase(), mensaje: "No se permite usar todo el nombre en mayúscula" },
        { condicion: /^\s/.test(nombre), mensaje: "No se permiten espacios al inicio del nombre" }
    ];
    for (const regla of reglas) {
        if (regla.condicion) {
            mostrarMensajeAlerta(regla.mensaje);
            limpiarInput();
            return false;
        }
    }
    return true;
}

// Limpia el nombre eliminando espacios extra y los del inicio y final
function normalizarNombre(nombre) {
    return nombre.replace(/\s+/g, ' ').trim();
}

// Muestra la lista de amigos en una tabla con un botón para eliminar cada uno
function actualizarTabla() {
    cuerpoTabla.innerHTML = amigos.map((amigo, i) => `
        <tr>
            <td>${amigo}</td>
            <td class="accion">
                <button class="btn-eliminar" onclick="eliminarAmigo(${i})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                        <path d="M3 6h18v2H3V6zm2 3h14l-1.5 13h-11L5 9zm6-6h2v2h-2V3z"/>
                    </svg>
                    <strong style="font-size: 20px;">Eliminar</strong>
                </button>
            </td>
        </tr>
    `).join('');
    resultadoSorteo.innerHTML = '';
}

// Muestra un mensaje de confirmación antes de eliminar un amigo de la lista
function eliminarAmigo(index) {
    Swal.fire({
        title: '¿Estás seguro?',
        text: `Vas a eliminar a "${amigos[index]}" de la lista de amigos`,
        icon: 'warning',
        iconColor: colores.warning,
        showCancelButton: true,
        cancelButtonText: '<strong>No, cancelar</strong>',
        confirmButtonText: '<strong>Sí, eliminar</strong>',
        confirmButtonColor: colores.success,
        cancelButtonColor: colores.error,
        color: '#000000',
        customClass: {
            htmlContainer: 'alert-text',
            confirmButton: 'alert-confirm-button',
            cancelButton: 'alert-cancel-button'
        },
        reverseButtons: true
    }).then(({ isConfirmed }) => {
        if (isConfirmed) {
            amigos.splice(index, 1);
            actualizarTabla();
            mostrarMensajeAlerta("El amigo se eliminó correctamente", "success", "¡Hecho!");
        } else {
            mostrarMensajeAlerta("No se eliminó ningún amigo", "success", "¡Cancelado!");
        }
    });
}

// Realiza el sorteo de "Amigo Secreto" mezclando la lista de amigos
function sortearAmigo() {
    if (amigos.length < 2) {
        return mostrarMensajeAlerta("Se necesitan al menos 2 amigos para realizar el sorteo", "warning", "¡Atención!");
    }
    const seleccionAleatoria = [...amigos].sort(() => Math.random() - 0.5);
    const asignaciones = generarAsignacionesAmigos(seleccionAleatoria);
    mostrarAsignacionesAmigos(asignaciones);
}

// Crea las parejas de "quién regala a quién" de forma circular
function generarAsignacionesAmigos(lista) {
    return lista.map((regala, i) => {
        const recibe = lista[(i + 1) % lista.length];
        return `<div class="asignacion-item">🎁 <strong>${regala}</strong> le regala a <strong>${recibe}</strong></div>`;
    }).join('');
}

// Muestra las asignaciones en una ventana emergente usando SweetAlert
function mostrarAsignacionesAmigos(asignaciones) {
    Swal.fire({
        title: '🎉 Resultados del Sorteo Amigo Secreto',
        color: '#f36c05',
        html: `<div class="asignaciones-container">${asignaciones}</div>`,
        icon: 'success',
        iconColor: colores.success,
        background: '#fffaf0',
        confirmButtonText: '<strong>Confirmar Sorteo',
        confirmButtonColor: colores.success,
        showCloseButton: true,
        customClass: {
            confirmButton: 'alert-confirm-button'
        }
    }).then(() => {
        Swal.fire({
            icon: 'success',
            iconColor: colores.success,
            title: 'Sorteo Finalizado con Éxito',
            html: '<p class="mensaje-final">¡Todos los amigos ya tienen a quién regalar!</p>',
            confirmButtonText: '<strong>Concluir Sorteo</strong>',
            confirmButtonColor: colores.success,
            background: '#fffaf0',
            color: '#f36c05',
            customClass: {
                confirmButton: 'alert-confirm-button'
            }
        });
    });
}

// Limpia la lista de amigos y actualiza la tabla
function limpiarListaAmigos() {
    amigos = [];
    actualizarTabla();
    limpiarInput();
    mostrarMensajeAlerta("La lista de amigos se limpió correctamente", "success", "¡Hecho!");
}

// Centraliza la creación de alertas con SweetAlert para evitar código repetido
function mostrarMensajeAlerta(texto, tipo = 'warning', titulo = '¡Atención!') {
    Swal.fire({
        icon: tipo,
        title: `<span class="alert-title">${titulo}</span>`,
        html: `<p class="alert-text">${texto}</p>`,
        color: '#000000',
        iconColor: colores[tipo] || '#000000',
        confirmButtonText: '<strong>Entendido</strong>',
        confirmButtonColor: colores[tipo] || colores.success,
        customClass: {
            confirmButton: 'alert-confirm-button'
        }
    });
}

// Deja en blanco el campo de entrada
function limpiarInput() {
    input.value = "";
}