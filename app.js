// Lista donde se almacenarán los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validación con condicional
    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    // Evitar nombres repetidos
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya fue agregado.");
        input.value = "";
        return;
    }

    amigos.push(nombre); // Guardar en la lista
    mostrarLista(); // Actualizar en pantalla
    input.value = ""; // Limpiar campo
}

// Función para mostrar la lista en pantalla usando un loop
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar antes de renderizar

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];

    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
