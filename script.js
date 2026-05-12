const tareaInput = document.getElementById('tareaInput');
const botonAñadir = document.getElementById('botonAñadir');
const listaTareas = document.getElementById('listaTareas');

// 1. Cargar tareas guardadas al abrir la página
document.addEventListener('DOMContentLoaded', () => {
    const tareasGuardadas = JSON.parse(localStorage.getItem('misTareas')) || [];
    tareasGuardadas.forEach(tarea => crearElementoTarea(tarea));
});

botonAñadir.addEventListener('click', () => {
    const texto = tareaInput.value.trim();
    if (texto !== '') {
        crearElementoTarea(texto);
        guardarTareas();
        tareaInput.value = '';
    }
});

function crearElementoTarea(texto) {
    const li = document.createElement('li');
    li.textContent = texto;
    
    // Botón para borrar (la X)
    const btnBorrar = document.createElement('button');
    btnBorrar.textContent = 'X';
    btnBorrar.style.marginLeft = '10px';
    btnBorrar.style.color = 'red';
    btnBorrar.style.cursor = 'pointer';
    
    btnBorrar.onclick = () => {
        li.remove();
        guardarTareas();
    };

    li.appendChild(btnBorrar);
    listaTareas.appendChild(li);
}

function guardarTareas() {
    const tareas = [];
    document.querySelectorAll('#listaTareas li').forEach(li => {
        // Guardamos solo el texto de la tarea
        tareas.push(li.firstChild.textContent);
    });
    localStorage.setItem('misTareas', JSON.stringify(tareas));
}
