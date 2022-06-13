const regEx = new RegExp("^[A-Z]+$"); 
var quantidadedeErros = 0;
var acertos = 0;
var tentativas = '';
var botaoJogar = document.getElementById('bot1');
botaoJogar.addEventListener('click', function(){
    desenhaForca();
    desenhaTracos();
});

window.onkeypress = jogar;
//função novo jogo//
function jogar() {
    if(!tentativas.includes(event.key) && palavraOculta.includes((event.key).toUpperCase())){
        adicionaTentativa();
    for (var i = 0; i < palavraOculta.length; i++){
        if (palavraOculta[i] == (event.key).toUpperCase()){
            pincel.fillStyle ="black"
            pincel.font = "30px Arial";
            pincel.fillText((event.key).toUpperCase(), 230 + (34 * i), 360);
            acertos++;
          }
          }
        console.log(event.key);
    }else{
        adicionaTentativa();
        quantidadedeErros++;
        desenhaBoneco(quantidadedeErros);
    }
    verificaFimJogo();
    }

function adicionaTentativa(){
    if(!tentativas.includes(event.key)){
        tentativas = tentativas + event.key;
        pincel.fillStyle ="black"
        pincel.font = "30px Arial";
        pincel.fillText("Tentativas:" + tentativas.toUpperCase(), 500, 200);
    }
}
function verificaFimJogo(){
    if (quantidadedeErros >= 6){
        pincel.fillStyle ="black"
        pincel.font = "30px Arial";
        pincel.fillText("VOCÊ PERDEU! A palavra era: " + palavraOculta, 300, 100);
        Window.onkeypress = null;
        return;
    }
    if(acertos == palavraOculta.length){
        pincel.fillStyle ="black"
        pincel.font = "30px Arial";
        pincel.fillText("VOCÊ GANHOU!!!", 300, 100);
        Window.onkeypress = null;
        return;
    }
}

function desenhaBoneco(quantidadedeErros){
    switch (quantidadedeErros){
        case 1:
            cabeca();
            break;
        case 2:
            corpo();
            break;
        case 3:
            bracoE();
            break;
        case 4:
            bracoD();
            break;
        case 5:
            pernaE();
            break;
        case 6:
            pernaD();
        break;
    }
}
