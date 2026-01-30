let listaAmigosHTML = document.getElementById("lista-amigos");
let listaDeAmigos = [];
let listaParaEmbaralhar = [];

function adicionar() {
    let nomeAmigoGetId = document.getElementById("nome-amigo");
    let nomeAmigo = nomeAmigoGetId.value;

    if (nomeAmigo == "") {
        alert("Parece que você não adicionou o nome de nenhum amigo à lista, por favor, tente novamente.");
        return;
    };

    if (listaDeAmigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado à lista de amigos a serem sorteados, caso esse seja outro amigo, favor adicionar mais algum nome para distingui-lo.");
        return;
    };

    listaDeAmigos.push(nomeAmigo);
    listaParaEmbaralhar.push(nomeAmigo);

    listaAmigosHTML.innerHTML = listaDeAmigos.join(", ");

    nomeAmigoGetId.value = "";
};

function sortear() {
    let listaEmbaralhada = misturarOsNomes(listaParaEmbaralhar);
    console.log(listaEmbaralhada);


    if (verificarRepeticoes(listaDeAmigos, listaEmbaralhada) === true) {
        return sortear();
    }

    
    //imprimir nome por nome na nova arra
}



function verificarRepeticoes(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            console.log(`Nesse sorteioNesse sorteio ${array1[i]} se escolheu, refazendo sorteio...`);
            return true;
        };
    };
    return false;
};

function misturarOsNomes(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  };
  return array;
}
