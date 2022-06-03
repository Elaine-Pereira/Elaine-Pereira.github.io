// deseha tabuleiro
function tabuleiro (){
    var canvas = document.getElementById('canvas');
    if(canvas.getContext){
        var pincel = canvas.getContext('2d');
    }
}
//função gera galavra
function palavrasAleatorias (palavras){
    var palavras= ['amor', 'felicidade', 'paz', 'gratidao','sucesso','inteligencia','musica'];
    var busca = palavras[Math.ceil(Math.random() * (palavras.length - 1))];
}
console.log(palavrasAleatorias())



//check se a palavra cabe no espaço
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

