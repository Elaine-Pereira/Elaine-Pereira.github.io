const regEx = new RegExp("^[A-Z]+$");
var botaoJogar = document.getElementById('bot1');
botaoJogar.addEventListener('click', function(){
    desenhaForca();
    desenhaTracos();
});

//função novo jogo//
function jogar(){

    document.addEventListener('keypress', check);
    erros = 0;
    acertos = 0;
    letrasCertas = [];
    letrasErradas = [];
} 

//check se a palavra cabe no espaço//
function check(espaço, palavras){
    for (let i = 0; i < espaço.length; i++){
        if(espaço[i] !== '-' && espaço[i] !== palavras[i]){
            return false;
        } //se não couber  
        }
        return true;  //se couber no espaço
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
