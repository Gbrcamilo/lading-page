var setaDireita = window.document.getElementById("seta_direita")
var cardLeonardo = window.document.getElementById("card_leonardo")
var cardBruna = window.document.getElementById("card_bruna")
var cardSamantha = window.document.getElementById("card_samantha")
var setaEsquerda = window.document.getElementById("seta_esquerda");

function RolarParaDireita(){
    cardLeonardo.style = "display:none"
    cardBruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"
}

function RolarParaEsquerda(){
    cardLeonardo.style = "display: flex"
     cardBruna.style = "display:none"
    setaDireita.style = "display: flex"
    setaEsquerda.style = "display: none"
}