# Juego del Amigo Secreto

📝**Descripción General**

Amigo Secreto es una aplicación web interactiva diseñada para facilitar la organización de sorteos de amigo secreto. Permite a los usuarios ingresar los nombres de sus amigos, validar los datos ingresados, evitar duplicados y realizar un sorteo aleatorio para asignar quién regala a quién. Además, permite eliminar participantes y limpiar la lista para iniciar un nuevo sorteo.
La interfaz es amigable, visualmente atractiva y utiliza animaciones, además de mensajes de alerta personalizados con SweetAlert2 para mejorar la experiencia del usuario.

✨**Características Principales**

- **Agregar amigos:** Permite ingresar nombres que se validan para evitar errores comunes como nombres vacíos, uso excesivo de espacios, caracteres inválidos, nombres en mayúsculas completas, etc.

- **Validación avanzada:** Se asegura que los nombres tengan entre 2 y 30 caracteres y solo contengan letras y espacios.

- **Prevención de duplicados:** No permite agregar el mismo nombre más de una vez.

- **Mostrar lista dinámica:** Los nombres ingresados se muestran en una tabla con opción de eliminar individualmente.

- **Confirmación antes de eliminar:** Usa SweetAlert2 para confirmar la eliminación de un amigo.

- **Sorteo circular:** Realiza un sorteo aleatorio que asigna a cada amigo otra persona a la que regalar, garantizando que nadie se regale a sí mismo.

- **Mensajes de alerta personalizados:** Utiliza SweetAlert2 con colores y estilos personalizados para informar acciones al usuario.

- **Interfaz responsiva y estilizada:** Uso de CSS moderno con variables, flexbox y estilos claros para una buena usabilidad.

- **Boton:** Opciones para limpiar la lista y comenzar desde cero.

👨‍💻**Tecnologías Utilizadas**

- **HTML5** para la estructura básica del contenido.

- **CSS3** con variables CSS (:root), Flexbox y animaciones (con Animate.css).

- **JavaScript** para la lógica de interacción, validación y manipulación del DOM.

- **SweetAlert2** para modales y alertas estilizadas.

- **Google Fonts (Inter y Merriweather)** para una tipografía atractiva y legible.

- **CDN** para Animate.css y SweetAlert2 para optimizar recursos.

📁**Estructura del Proyecto**

- **index.html:** Archivo principal que contiene la estructura y elementos visuales de la aplicación.

- **style.css:** Estilos personalizados para la interfaz, organización de la disposición, colores y animaciones.

- **app.js:** Código JavaScript encargado de toda la lógica de la aplicación: validación, manejo de eventos, actualización del DOM y uso de SweetAlert2.

- **assets/:** Carpeta que contiene imágenes usadas en la UI (íconos y banner).
  
🎮**Funcionamiento del Proyecto**

**1. Agregar Amigos**
- El usuario escribe el nombre en el campo de texto.

- Al hacer clic en el botón "Añadir", se ejecuta la función agregarAmigo().

- Se valida el nombre con validarNombre().

- Si pasa la validación y no está duplicado, se añade al arreglo amigos y se actualiza la tabla.

- Se muestra un mensaje de éxito o error según corresponda.

**2. Mostrar Lista**
   
- La función actualizarTabla() actualiza la tabla en el DOM mostrando los nombres.

- Cada fila incluye un botón "Eliminar" con un ícono SVG.

- Al eliminar, se confirma la acción con un modal SweetAlert2.

**3. Sortear Amigo Secreto**
   
- Al hacer clic en "Sortear amigo", se ejecuta sortearAmigo().

- Solo permite sorteo si hay 2 o más amigos.

- Se mezclan aleatoriamente los nombres y se asignan en forma circular (cada persona regala a la siguiente).

- El resultado se muestra en un modal elegante con animaciones y colores personalizados.

- Al cerrar el resultado, se muestra un mensaje final de confirmación.

**4. Limpiar Lista**
   
- El botón "Limpiar Lista" vacía el arreglo y limpia la tabla y el input, mostrando un mensaje de confirmación.

**5. Validaciones Implementadas**

- No permitir nombres vacíos.

- No permitir múltiples espacios seguidos.

- No permitir nombres con menos de 2 o más de 30 caracteres.

- No permitir caracteres que no sean letras o espacios.

- No permitir nombres completamente en mayúsculas.

- No permitir espacios al inicio.

- No permitir nombres duplicados en la lista.

🧠**Detalles Técnicos Importantes**

- El uso de SweetAlert2 permite una mejor experiencia que los alert() tradicionales, con botones estilizados, colores y confirmaciones.

- Se usan variables CSS para mantener un esquema de colores consistente.

- La tabla se actualiza usando .innerHTML con Array.map para eficiencia y claridad.

- La función normalizarNombre limpia y estandariza los nombres para comparaciones y almacenamiento.

- El sorteo es circular: el último amigo regala al primero, asegurando que todos participen sin repetir.

- El diseño es responsive gracias al uso de flexbox y estilos adaptativos.

🔧**Rendimiento**

- **Carga rápida:** Archivos ligeros sin dependencias externas.
  
- **Ejecución fluida:** Optimizado para navegadores modernos.
  
- **Memoria eficiente:** Limpieza automática de elementos DOM.
  
🔒**Privacidad y Seguridad**

- **Sin almacenamiento:** No guarda datos en servidores.
  
- **Ejecución local:** Todo funciona en el navegador.


💻**Cómo Instalar y Configurar el Proyecto**

**Requisitos:**

- Navegador web moderno (Chrome, Firefox, Safari, Edge).

- No requiere instalación de software adicional.

**Ejecucion:**

- Descargar o clonar el repositorio completo.

- Asegurarse de mantener la estructura de carpetas para que las imágenes se carguen correctamente.

- Abrir el archivo index.html en cualquier navegador moderno (Chrome, Firefox, Edge, Safari).

- Ingresar nombres, agregar, eliminar, y hacer sorteos directamente desde la interfaz.

- No se requiere servidor, todo funciona con archivos locales.

🔄**Posibles Mejoras Futuras**

- Guardar la lista de amigos en almacenamiento local (localStorage) para persistencia entre sesiones.

- Agregar opción para exportar el resultado del sorteo (PDF o texto).

- Permitir asignar restricciones (ejemplo: no regalar a familiares o pareja).

- Mejorar accesibilidad y compatibilidad con lectores de pantalla.

- Añadir animaciones personalizadas en la tabla y botones.

- Traducción y soporte multilenguaje.

🎯**Desafíos del Proyecto**

Este proyecto me permitio practicar:

- Validaciónes rigurosa de nombres.
  
- Prevención de duplicados en la lista.
  
- Generar un sorteo justo y circular.
  
- Mejorar la interfaz para que sea más clara y accesible.
  
- Manejo eficiente del DOM.
  
- Confirmaciones y mensajes claros.

📞**Soporte**

Para reportar problemas o sugerencias:

- Verifica la sección de Solución de Problemas.
  
- Revisa que todos los archivos estén en la misma carpeta.
  
- Asegúrate de usar un navegador actualizado.

🙏**Agradecimientos**

- Gracias a Alura y Oracle ONE por el desafío y las oportunidades de aprendizaje.

👨‍💻**Autor**

- Proyecto desarrollado por María Fernanda Hernández Solano.

📱**Demostración del Proyecto:**

- **Jugar:** https://maria925.github.io/Juego-Secreto/


