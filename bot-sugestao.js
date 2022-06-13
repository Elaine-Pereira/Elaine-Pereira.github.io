//BOTÃO SUGESTÃO
var adcPalavra = document.getElementById("bot2");
adcPalavra.addEventListener("click", function() {
    mostra();
    addPalavra();
})

function mostra(){
    var display = document.getElementById("container").style.display;
    if(display == "none"){
        document.getElementById("container").style.display = 'block';
    }
    else {
        document.getElementById("container").style.display = 'none';
    }
}

function addPalavra(){
    var novaPalavra = document.getElementById("adcpalavra");
        if(regEx.test(novaPalavra.value)) {
            palavras.push(novaPalavra.value);
            alert ("Palavra " + novaPalavra.value + " adicionada com sucesso.");
        } 
        novaPalavra.value = "";   
}

