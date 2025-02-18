//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const inputNome = document.getElementById('amigo');
const ulListaAmigos = document.getElementById('listaAmigos');
const ulResultado = document.getElementById('resultado');
let nomes = [];


function adicionarAmigo() {
    if(ulResultado.innerHTML !== '') {
        ulResultado.innerHTML = '';
    }

    if(inputNome.value === '') {
        alert('Por favor, insira um nome');
    }else if(nomes.includes(inputNome.value)) {
        alert('Amigo já adicionado');
    }else {
        nomes.push(inputNome.value)
    }
    
    atualizarLista();

    inputNome.value = '';
}


function atualizarLista() {
    ulListaAmigos.innerHTML = '';
    for(let i = 0; i < nomes.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = nomes[i];
        ulListaAmigos.appendChild(li);
    }
}


function sortearAmigo() {
    const indiceAleatorio = Math.floor((Math.random() * nomes.length)); 

    if(nomes.length === 0) {
        alert('lista vazia');
    }else{
        const li = document.createElement('li');
        ulResultado.innerHTML = '';
        li.innerHTML = `Nome Sorteado: ${nomes[indiceAleatorio]}`;
        ulResultado.appendChild(li);
    }

    nomes = [];
    atualizarLista();
}