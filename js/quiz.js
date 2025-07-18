// Arquivo: quiz.js
// Descrição: Este código implementa um quiz interativo em JavaScipt, onde o usuário responde perguntas de múltiplas escolhas. O código é didatico e disponibiliza um feedback ao usuário sobre suas respostas. O quiz é composto por perguntas sobre o Brasil, e ao finalizar o quiz, o usuário recebe um resultado com a quantidade de acertos. O código é disponível para ser utilizado em um projeto de aprendizado ou entrega de exercícios.
// Autor: [Carlos Eduardo] 
// Data: 2025-04-07
// Versão: 1.0.0
//Licença: MIT


// PARTE 1: Lista de perguntas e respostas
perguntas = [
    {
      "pergunta": "Qual a capital do Brasil?",
      "respostas": [
        { "opcao": "SÃO PAULO", "correto": false },
        { "opcao": "BRASÍLIA", "correto": true },
        { "opcao": "RIO DE JANEIRO", "correto": false }
      ]
    },
    {
      "pergunta": "Qual é a maior cidade do Brasil em população?",
      "respostas": [
        { "opcao": "RIO DE JANEIRO", "correto": false },
        { "opcao": "SALVADOR", "correto": false },
        { "opcao": "SÃO PAULO", "correto": true }
      ]
    },
    {
      pergunta: "Quantos estados há no Brasil",
      respostas: [
        { opcao: "21", correto: false },
        { opcao: "26", correto: true },
        { opcao: "24", correto: false}
      ]
    },
    {
       pergunta: "Qual festival possui grande significancia no Brasil?",
      respostas: [
        { opcao: "CARNAVAL", correto: true },
        { opcao: "HALLOWEEN", correto: false },
        { opcao: "DIA DOS MORTOS", correto: false}
      ]
  },
  {
      pergunta: "Em qual dia é comemorado a independência do Brasil?",
      respostas: [
        { opcao: "04 de Abril", correto: false },
        { opcao: "07 de Setembro", correto: true },
        { opcao: "24 de Agosto", correto: false}
      ]
    }
  ]
  
  
  // PARTE 2: Pegando os elementos do HTML
  const perguntaElemento = document.querySelector(".pergunta");
  const respostasElemento = document.querySelector(".respostas");
  const progressoElemento = document.querySelector(".progresso");
  const textoFinal = document.querySelector(".fim span");
  const conteudo = document.querySelector(".conteudo");
  const conteudoFinal = document.querySelector(".fim");
  
  // PARTE 3: Variáveis para controle do jogo
  let indiceAtual = 0; // Índice da pergunta atual
  let acertos = 0; // Contador de acertos
  
  // PARTE 4: Função para carregar uma nova pergunta
  function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta
  
    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores
  
    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
      // Pega a resposta atual com base no índice 'i'
      const resposta = perguntaAtual.respostas[i];
      // Cria um novo elemento 'button' (botão)
      const botao = document.createElement("button");
      // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
      botao.classList.add("botao-resposta");
      // Define o texto do botão com a opção de resposta (resposta.opcao)
      botao.innerText = resposta.opcao;
      // Adiciona um evento de clique no botão
      botao.onclick = function () {
        // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
        if (resposta.correto) {
          acertos++; // Incrementa o contador de acertos
        }
  
        // Avança para a próxima pergunta
        indiceAtual++;
  
        // Se ainda houver perguntas, carrega a próxima pergunta
        if (indiceAtual < perguntas.length) {
          carregarPergunta(); // Carrega a próxima pergunta
        } else {
          // Se não houver mais perguntas, finaliza o jogo
          finalizarJogo();
        }
      };
  
      // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
      respostasElemento.appendChild(botao);
    }
  }
  
  // PARTE 5: Função para mostrar a tela final
  function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
  }
  
  // PARTE 6: Iniciando o jogo pela primeira vez
  carregarPergunta();  