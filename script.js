const input = document.getElementById('tareaInput');
const boton = document.getElementById('botonAñadir');
const lista = document.getElementById('listaTareas');

boton.addEventListener('click', () => {
    const texto = input.value;

    if (texto !== "") {
        const li = document.createElement('li');
        
        li.innerHTML = `
            <span>${texto}</span>
            <button class="btn-borrar">Eliminar</button>
        `;

        lista.appendChild(li);
        input.value = "";

        li.querySelector('.btn-borrar').addEventListener('click', () => {
            li.remove();
        });
    } else {
        alert("Escribe algo, anda.");
    }
});

// Permitir dar al 'Enter' para añadir
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') boton.click();
});