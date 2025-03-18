# Amigo Secreto

## Descrição do Projeto
Este é um projeto simples de **Amigo Secreto** desenvolvido com **HTML**, **CSS** e **JavaScript**. Ele permite que os usuários adicionem nomes de amigos, visualize-os em uma lista, e façam o sorteio dos pares para o jogo de Amigo Secreto diretamente no navegador.

---

## Funcionalidades

- **Adicionar nomes**: O usuário pode digitar os nomes dos amigos no campo de texto e adicioná-los à lista.
- **Validar entrada**: Caso o campo de texto esteja vazio, o sistema exibe um aviso solicitando um nome válido.
- **Sortear amigos**: Após adicionar os nomes, o usuário pode sortear os pares, garantindo que cada pessoa receba um amigo secreto.
- **Exibição dos resultados**: O resultado do sorteio é exibido como uma lista mostrando quem tirou quem.

---

## Tecnologias Utilizadas

- **HTML**: Para a estrutura da página.
- **CSS**: Para estilizar o layout.
- **JavaScript**: Para adicionar as funcionalidades dinâmicas como adicionar nomes e sortear os amigos.

---

## Como Executar o Projeto

1. **Clone o repositório** ou baixe os arquivos:
   ```bash
   git clone https://github.com/seu-usuario/amigo-secreto.git
   ```
2. Abra o arquivo `index.html` em qualquer navegador:
   ```bash
   cd amigo-secreto
   open index.html
   ```

---

## Estrutura do Projeto

```plaintext
.
├── index.html       # Arquivo principal do projeto (estrutura da página)
├── style.css        # Estilização da página
├── app.js           # Lógica e funcionalidades do projeto
├── assets/          # Imagens e ícones usados no projeto
└── README.md        # Documentação do projeto
```

---

## Funcionalidades em Detalhes

### 1. Adicionar Amigos
- O usuário digita o nome no campo de texto e clica no botão **"Adicionar"**.
- O sistema:
  - Valida se o campo não está vazio.
  - Adiciona o nome à lista de amigos.
  - Exibe o nome na tela.

### 2. Sortear Amigos
- O botão **"Sortear amigo"** embaralha a lista de nomes e gera pares para o Amigo Secreto.
- Os pares são exibidos na tela em uma nova lista.
- Se houver menos de dois amigos na lista, o sistema exibe um alerta informando que é necessário adicionar mais nomes.

---

## Exemplo de Uso

1. Digite os nomes dos amigos no campo de entrada.
2. Clique no botão **Adicionar** para inserir cada nome na lista.
3. Quando todos os nomes forem adicionados, clique no botão **Sortear amigo**.
4. Veja o resultado do sorteio exibido na tela.

---

## Melhorias Futuras

- Adicionar opção para **excluir amigos** da lista.
- Implementar **restrições de sorteio** (exemplo: impedir que uma pessoa tire a si mesma).
- Estilizar o resultado com animações ou transições visuais.

---

## Licença

Este projeto é de uso livre e pode ser modificado conforme a necessidade.

---

Desenvolvido com ❤ por Renê!

