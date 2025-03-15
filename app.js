// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Array para almacenar los nombres de amigos

let amigos = [];

//Funcion para agregar un amigo
function agregarAmigo() {
    let input = document.getElementById('amigo');

    //Validar que el campo no esté vacio
    if (input.value !== '') {
        amigos.push(input.value);
        actualizarListaAmigos();
    } else {
        alert("Por favor, inserte un nombre.");
    }
    input.value = '';

    //Validar que el nombre no esté repetido
    if(amigos.includes(nombreAmigo)){
        alert("Este nombre ya está en la lista");
    }

}

//Funcion para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Clear the list
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

//Funcion para sortear un amigo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, añade al menos un amigo antes de sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo sorteado es <li>${amigoSorteado}</li>`;
}
