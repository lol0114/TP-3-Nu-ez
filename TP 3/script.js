let fila = [];

const inputNombre = document.getElementById("nombre");
const displayActual = document.querySelector("#actual");
const listaEspera = document.getElementById("listaClientes");
const panelEntrada = document.getElementById("panelEntrada");
const contador = document.getElementById("contador");

const btnAnotar = document.getElementById("anotar");
const btnSiguiente = document.getElementById("atender");
const btnPausa = document.getElementById("pausar");
const btnReset = document.getElementById("reiniciar");

btnAnotar.addEventListener("click", () => {

    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("Ingrese un nombre.");
        return;
    }

    // VALIDAR REPETIDOS
    if (fila.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    fila.push(nombre);

    inputNombre.value = "";

    actualizarLista();
});

btnSiguiente.addEventListener("click", () => {

    if (fila.length === 0) {
        alert("No hay clientes en espera.");
        displayActual.innerText = "---";
        return;
    }

    const confirmar = confirm("¿Atender al siguiente cliente?");

    if (confirmar) {

        const atendido = fila.shift();

        displayActual.innerText = atendido;

        actualizarLista();
    }
});

function actualizarLista() {

    listaEspera.innerHTML = "";

    fila.forEach(cliente => {

        const li = document.createElement("li");

        li.innerText = cliente;

        listaEspera.appendChild(li);
    });

    contador.innerText = fila.length;
}


btnPausa.addEventListener("click", () => {

    panelEntrada.classList.toggle("pausado");

    if (panelEntrada.classList.contains("pausado")) {

        btnPausa.innerText = "Reanudar Entrada";

    } else {

        btnPausa.innerText = "Pausar Entrada";
    }
});


btnReset.addEventListener("click", () => {

    const reiniciar = confirm("¿Seguro que desea reiniciar el día?");

    if (reiniciar) {
        location.reload();
    }
});