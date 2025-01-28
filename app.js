// Array que armazena os nomes dos amigos
let amigos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value.trim();

    // Validar se o campo não está vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adicionar o nome ao array e atualizar a lista exibida
    amigos.push(nomeAmigo);

    let listaAmigos = document.getElementById("listaAmigos");
    let novoItem = document.createElement("li");
    novoItem.textContent = nomeAmigo;
    novoItem.classList.add("name-item"); // Classe para estilização no CSS
    listaAmigos.appendChild(novoItem);

    // Limpar o campo de entrada
    inputAmigo.value = "";
}

// Função para sortear amigo secreto
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    // Validar se há amigos suficientes para sortear
    if (amigos.length < 2) {
        alert("Você precisa adicionar pelo menos 2 amigos para realizar o sorteio.");
        return;
    }

    // Embaralhar a lista de amigos para o sorteio
    let sorteados = [...amigos];
    sorteados.sort(() => Math.random() - 0.5);

    // Criar a lista de pares (quem tirou quem)
    let pares = [];
    for (let i = 0; i < sorteados.length; i++) {
        let amigo = sorteados[i];
        let amigoSorteado = sorteados[(i + 1) % sorteados.length];
        pares.push(`${amigo} tirou ${amigoSorteado}`);
    }

    // Exibir o resultado no HTML
    resultado.innerHTML = ""; // Limpar resultados anteriores
    pares.forEach(par => {
        let itemResultado = document.createElement("li");
        itemResultado.textContent = par;
        resultado.appendChild(itemResultado);
    });
}