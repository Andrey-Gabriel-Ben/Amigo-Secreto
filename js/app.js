let listaDeAmigos = [];
let listaAmigosHTML = document.getElementById("lista-amigos");
let listaEmbaralhada;

function adicionar() {
    let nomeAmigo = document.getElementById("nome-amigo").value;

    if (nomeAmigo == "") {
        alert("Parece que você não adicionou o nome de nenhum amigo à lista, por favor, tente novamente.");
        return;
    };

    if (listaDeAmigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado à lista de amigos a serem sorteados, caso esse seja outro amigo, favor adicionar mais algum nome para distingui-lo.");
        return;
    };

    listaDeAmigos.push(nomeAmigo);

    listaAmigosHTML.innerHTML = listaDeAmigos.join(", ");
};

function sortear() {
    
    listaEmbaralhada = misturarOsNomes(listaDeAmigos);
    console.log(listaEmbaralhada);



    // criar uma função que embaralhe os nomes escolhidos
    // verificar se a pessoa não se escpolheu
    //armazenar a nova ordem em uma array
    //imprimir nome por nome na nova arra
}


function misturarOsNomes(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
/*
sugestão para embaralhar

metodo pitagoras

definir um numero que embaralhe a array original e exiba os novos na ordem, tal qual a sifra de cesar

metodo mais arrisaco e diferente

definir um mathrandom que imprima aleatoriamente um .lenth para sortear uma pessoa diferente



*/