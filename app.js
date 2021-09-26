// Constante placar, sempre inicia em 0.
const placar = {
    usuario: 0,
    empates: 0,
    computador: 0,
    partidas: 0,
    resultado: 0
}

// Função que busca o elemento pelo ID dos spans do valor do placar, e aplica um innerText (o que modifica texto) e atribui o valor deles a constante criada acima.
function alteraPlacar() {
   document.getElementById('placar-jogador').innerText    = placar.usuario;
   document.getElementById('placar-empates').innerText    = placar.empates;
   document.getElementById('placar-computador').innerText = placar.computador;
   document.getElementById('numero-jogos').innerText      = placar.partidas;
   document.getElementById('resultadoTexto').innerText    = placar.resultado;
}

// Função para mudar a imagem da tela no monitor do usuário. Basicamente chama (let), cria uma variável com base no valor ID do combo-escolha, que é o Select. Após, cria um if para denominar
// a imagem quando o valor dele for "selecione", que é o que quando entramos na tela. E aí por último cria um switch, que poderia ser um if também. Basicamente diz, opcEscolhida quando seu
// valor for 'pedra', aplique isso. "Isso" seria o destino da foto.
function monitoraEscolhaDoUsuario() {
    let opcEscolhida = document.getElementById('combo-escolha').value;

    if (opcEscolhida == 'selecione') {
        document.getElementById('imgJogador1').src = "";
        return 0;
    }

    switch (opcEscolhida) {
        case 'pedra':
            document.getElementById('imgJogador1').src = "https://github.com/lobofoltran/da-pedra-papel-tesoura/blob/main/images/pedra.png?raw=true";
        break;
        case 'papel':
            document.getElementById('imgJogador1').src = "https://github.com/lobofoltran/da-pedra-papel-tesoura/blob/main/images/papel.png?raw=true"; 
        break;
        case 'tesoura':
            document.getElementById('imgJogador1').src = "https://github.com/lobofoltran/da-pedra-papel-tesoura/blob/main/images/pedra.png?raw=true";
        break;
    }

}

// Função que sorteia a jogada do computador, pego pela documentação do JS. Criamos a constante que gera um parseInt, apenas inteiros da função Math.random * (número max - número min) + número min
// sorteado. Já abaixo cria a função para alterar na tela a jogada do bot com base no valor que a função gerou.
function sorteiaJogadaComputador() {
    const numeroSorteado = parseInt(Math.random() * (4 - 1) + 1)

    switch (numeroSorteado) {
        case 1:
            document.getElementById('imgComputador').src = "https://github.com/lobofoltran/da-pedra-papel-tesoura/blob/main/images/pedra.png?raw=true";
            return 'pedra'
        case 2:
            document.getElementById('imgComputador').src = "https://github.com/lobofoltran/da-pedra-papel-tesoura/blob/main/images/papel.png?raw=true"; 
            return 'papel'
        case 3:
            document.getElementById('imgComputador').src = "https://github.com/lobofoltran/da-pedra-papel-tesoura/blob/main/images/pedra.png?raw=true";
            return 'tesoura'
    }
}

// Função jogar, aplicada no botão. Começando, assim que ela for clicada, vai validar se o select tem algum dado, se não tiver, cai no if e emite um alerte e retorna falso, anulando tudo.
// Após, valor de partidas do placar vai subir em 1. Cria duas constantes, uma com o valor de jogada do computador e outro com o valor de jogada do computador. 
// A função serve para dar o resultado, vai comparar elas em um if e atribuir o valor para o resultado, que possui innerText e altera na hora. E aumenta o valor do placar em 1.
// Após, chama a função de aparecer a divisão e a de atualizar o placar.
function jogar() {
    let escolha = document.getElementById('combo-escolha').value;
    if (escolha == "") {
        alert('Faça uma escolha!');
        return false;
    }

    placar.partidas++;
    const valorComputador = sorteiaJogadaComputador();
    const valorJogador    = document.getElementById('combo-escolha').value;
    
    if (valorComputador == valorJogador) {
        placar.resultado = "Empatou!";
        placar.empates++;
    } else if (valorJogador == 'pedra' && valorComputador == 'tesoura') {
        placar.resultado = "Você venceu!";
        placar.usuario++;
    } else if (valorJogador == 'papel' && valorComputador == 'pedra') {
        placar.resultado = "Você venceu!";
        placar.usuario++;
    } else if (valorJogador == 'tesoura' && valorComputador == 'papel') {
        placar.resultado = "Você venceu!";
        placar.usuario++;
    } else {
        placar.resultado = "Computador venceu!";
        placar.computador++;
    }
    alteraPlacar();
    apareceDiv();
}

// Função de reiniciar, ao clicar, altera os dados de volta ao padrão como iniciamos.
function reinicio() {
    placar.partidas = 0;
    placar.empates = 0;
    placar.computador = 0;
    placar.usuario = 0;

    document.getElementById('resultadoTexto').style.display = 'none';
    document.getElementById('imgComputador').src = '';
    document.getElementById('imgJogador1').src = '';
    document.getElementById('combo-escolha').value = '';
    alteraPlacar();
}

// Função que esconde o span de acordo com o resultado do placar resultado. Ela alera o estilo do display do ID.
function escondeDiv() {
    if (placar.resultado == 0) {
        document.getElementById('resultadoTexto').style.display = 'none';
    } 
}

// Função que faça o span aparecer. 
function apareceDiv() {
        document.getElementById('resultadoTexto').style.display = 'flex';
}

// Chamada das funções no carregamento da tela.
escondeDiv();
alteraPlacar();
