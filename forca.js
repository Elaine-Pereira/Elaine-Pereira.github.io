
var listaDepalavras = ['AMOR','GRATIDÃO','SUCESSO','PAZ','INTELIGÊNCIA','UNIAO','FELICIDADE' ];
var palavraOculta = listaDepalavras[Math.floor(Math.random() * listaDepalavras.length)]

// deseha tabuleiro
const canvas = document.getElementById('tabuleiro');
const pincel = canvas.getContext('2d');
pincel.fillStyle ="white";
pincel.fillRect(0,0,800,600);

//função adiciona tracinhos/
function desenhaTracos(){
    for (var i = 0; i < palavraOculta.length; i++){
            pincel.beginPath();
            pincel.moveTo(230 + (35 * i), 360);
            pincel.lineTo(260 + (35 * i), 360);
            pincel.stroke();        
}
}
console.log(palavraOculta)
//forca//
function desenhaForca(){
    pincel.strokeStyle = "black"
    pincel.beginPath();
    pincel.moveTo(50, 30);
    pincel.lineTo(50, 350);
    pincel.lineWidth = 20;
    pincel.stroke();
    pincel.beginPath();
    pincel.moveTo(50, 44)
    pincel.lineTo(180, 44);
    pincel.lineWidth = 12;
    pincel.stroke();
    pincel.beginPath();
    pincel.strokeStyle = "black"
    pincel.moveTo(44, 120);
    pincel.lineTo(134, 41);
    pincel.lineWidth = 20;
    pincel.stroke();
    pincel.beginPath()
    pincel.strokeStyle = "#7a6f61";
    pincel.moveTo(180, 49);
    pincel.lineTo(180, 85);
    pincel.lineWidth = 5;
    pincel.stroke();
    pincel.beginPath()
    pincel.strokeStyle = "black"; 
    pincel.moveTo(30, 350);
    pincel.lineTo(170, 350);
    pincel.lineWidth = 14;
    pincel.stroke(); 
    }


//Cabeça//
function cabeca(){
    pincel.fillStyle = 'black'
    pincel.beginPath();
    pincel.arc(180, 108, 23, 0, Math.PI * 2, true);
    pincel.fill()
}

//corpo//
function corpo(){
    pincel.strokeStyle = 'black';
    pincel.beginPath();
    pincel.moveTo(180, 130);
    pincel.lineTo(180, 235);
    pincel.lineWidth = 5.5;
    pincel.stroke();
}

//braço direito//
function bracoD(){
    pincel.beginPath();
    pincel.strokeStyle = 'black';
    pincel.moveTo(180, 139);
    pincel.lineTo(220, 155);
    pincel.lineWidth = 5.5;
    pincel.stroke();
}

//braço esquerdo//
function bracoE(){
    pincel.beginPath();
    pincel.strokeStyle = 'black';
    pincel.moveTo(180, 139);
    pincel.lineTo(140, 155);
    pincel.lineWidth = 5.5;
    pincel.stroke();
}

// perna direita//
function pernaD(){
    pincel.beginPath();
    pincel.strokeStyle = 'black';
    pincel.moveTo(180, 233);
    pincel.lineTo(220, 280);
    pincel.lineWidth = 5.5;
    pincel.stroke();
}

//perna esquerda//
function pernaE(){
    pincel.beginPath();
    pincel.strokeStyle = 'black';
    pincel.moveTo(180, 233);
    pincel.lineTo(140, 280);
    pincel.lineWidth = 5.5;
    pincel.stroke(); 
}

    

 

