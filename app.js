const placar = {
    usuario: 0,
    computador: 0,
    partidas: 0
}

function alteraPlacar () {
   document.getElementById('placar-jogador').innerText    = placar.usuario; 
   document.getElementById('placar-computador').innerText = placar.computador;
   document.getElementById('numero-jogos').innerText      = placar.partidas;
}

function monitoraEscolhaDoUsuario () {
    let opcEscolhida = document.getElementById('combo-escolha').value;
    
    if (opcEscolhida == 'selecione') {
        document.getElementById('imgJogador1').src = "";
        return 0;
    }

    switch (opcEscolhida) {
        case 'pedra':
            document.getElementById('imgJogador1').src = "da-pedra-papel-tesoura/images/pedra.png";
        break;
        case 'papel':
            document.getElementById('imgJogador1').src = "da-pedra-papel-tesoura/images/papel.png"; 
        break;
        case 'tesoura':
            document.getElementById('imgJogador1').src = "da-pedra-papel-tesoura/images/tesoura.png";
        break;
    }

}

function sorteiaJogadaComputador () {
    const numeroSorteado = parseInt(Math.random() * (4 - 1) + 1)

    switch (numeroSorteado) {
        case 1:
            document.getElementById('imgComputador').src = "da-pedra-papel-tesoura/images/pedra.png";
            return 'pedra'
        case 2:
            document.getElementById('imgComputador').src = "da-pedra-papel-tesoura/images/papel.png"; 
            return 'papel'
        case 3:
            document.getElementById('imgComputador').src = "da-pedra-papel-tesoura/images/tesoura.png";
            return 'tesoura'
    }
}

function jogar() {
    placar.partidas++;
    const valorComputador = sorteiaJogadaComputador();
    const valorJogador    = document.getElementById('combo-escolha').value;
    
    setTimeout(function(){
    if (valorComputador == valorJogador) {
        alert('Empate');
    } else if (valorJogador == 'pedra' && valorComputador == 'tesoura') {
        alert('Jogador Venceu');
        placar.usuario++;
    } else if (valorJogador == 'papel' && valorComputador == 'pedra') {
        alert('Jogador Venceu');
        placar.usuario++;
    } else if (valorJogador == 'tesoura' && valorComputador == 'papel') {
        alert('Jogador Venceu');
        placar.usuario++;
    } else {
        alert('Computador Venceu');
        placar.computador++;
    }
    }, 50);
    alteraPlacar();
}

function reinicio () {
    placar.partidas = 0;
    placar.computador = 0;
    placar.usuario = 0;

    document.getElementById('imgComputador').src = '';
    document.getElementById('imgJogador1').src = '';
    document.getElementById('combo-escolha').value = 'selecione';
    alteraPlacar();
}

alteraPlacar();
