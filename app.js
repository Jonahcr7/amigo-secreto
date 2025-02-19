// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let inputAmigo = document.getElementById('amigo');
let listaDeAmigos = document.getElementById('listaAmigos');
let amigoSorteado = document.getElementById('resultado');
let arrayAmigos = [];

/* Esta función nos permite agregar el amigo que se ha escrito en el input, nuestros jugadores verán los nombres
en una lista, mientas que nosotros los iremos guardando en un array*/
const agregarAmigo = () => {
    let nombreAmigo = inputAmigo.value;
    if (nombreAmigo != '') {
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = nombreAmigo;
        listaDeAmigos.appendChild(nuevoAmigo); // Mostramos el amigo agregado en forma de lista
        arrayAmigos.push(nombreAmigo); // Guardamos el nombre del amigo en un array
        inputAmigo.value = '';
    } else { alert('Escribe un nombre'); }
    return;
}

const sortearAmigo = () => {
    if (arrayAmigos.length != 0) {
        let indiceAleatorio = Math.floor(Math.random() * arrayAmigos.length);
        return amigoSorteado.innerHTML = `El amigo sorteado es ${arrayAmigos[indiceAleatorio]}`;
    } else { alert('No existe ningún amigo en tu lista'); }
}
