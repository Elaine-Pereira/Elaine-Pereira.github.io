const regEx = new RegExp("^[A-Z]+$");
let palavras = ["amor", "felicidade", "paz", "gratidao","sucesso","inteligencia","musica"];
var palavraOculta = '';
var erros = 0;
letrasCertas = [];
letrasErradas = [];

var botaoJogar = document.querySelector('bot1');
botaoJogar.addEventListener('click', jogar);

//função novo jogo//
function jogar(){
    desenhaForca();
    document.addEventListener('keypress', check);
    erros = 0;
    acertos = 0;
    letrasCertas = [];
    letrasErradas = [];
} 
//check se a palavra cabe no espaço//
function check(espaço, palavras){
    if(espaço.length !== palavras.length){
        return false;
    } for (let i = 0; i < espaço.length; i++){
    if(espaço[i] !== '-' && espaço[i] !== palavras[i]){
        return false;
    } //se não couber  
    }
    return true;  //se couber no espaço
}
//função gera galavra//
function palavraAleatoria(){
    palavra = palavras.length
    var busca = [Math.floor(Math.random() * palavras.length )];
    palavraOculta = palavras[busca];
    return palavraOculta;
}
console.log(palavrasAleatorias(palavraOculta));

var adcPalavra = document.getElementById("bot2");
adcPalavra.addEventListener("click", fClick )

function addPalavra() {
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
    }}
    function fClick(){
        mostra();
        addPalavra();
    }