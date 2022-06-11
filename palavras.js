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
            pincel.font = "30px Arial";
            pincel.fillText((event.key).toUpperCase(), 260 + (35 * i), 360);
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
        pincel.font = "30px Arial";
        pincel.fillText("Tentativas:" + tentativas.toUpperCase(), 500, 360);
    }
}
function verificaFimJogo(){
    if (quantidadedeErros >= 6){
        pincel.font = "30px Arial";
        pincel.fillText("VOCÊ PERDEU! A palavra era: " + palavraOculta, 200, 100);
        Window.onkeypress = null;
        return;
    }
    if(acertos == palavraOculta.length){
        pincel.font = "30px Arial";
        pincel.fillText("VOCÊ GANHOU!!!", 20, 100);
        Window.onkeypress = null;
        return;
    }
}

function desenhaBoneco(quantidadedeErros){
    switch (quantidadedeErros){
        case 1:
            cabeca();
        case 2:
            corpo();
        case 3:
            bracoE();
        case 4:
            bracoD();
        case 5:
            pernaE();
        case 6:
            pernaD();
        break;
    }
}
//BOTÃO SUGESTÃO
var adcPalavra = document.getElementById("bot2");
adcPalavra.addEventListener("click", function() {
    mostra();
    addPalavra();
})

function addPalavra(){
    var novaPalavra = document.getElementById("adcpalavra");
        if(regEx.test(novaPalavra.value)) {
            palavras.push(novaPalavra.value);
            alert("Palavra " + novaPalavra.value + " adicionada com sucesso.");
        } 
        novaPalavra.value = "";   
}

function mostra(){
    var display = document.getElementById("container").style.display;
    if(display == "none"){
        document.getElementById("container").style.display = 'block';
    }
    else {
        document.getElementById("container").style.display = 'none';
    }
}
