/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema.*/
let amigos = [];
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombre);
  actualizarAmigos();
  input.value = "";
}

function actualizarAmigos() {
  const lista = document.getElementById("listaAmigos");

  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (amigos.length === 0) {
    alert("La lista está vacía. Agrega al menos un nombre antes de sortear.");
    return;
  }
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSorteado}</strong> </li>`;
}
