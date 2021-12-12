function mudarCor(novaCor) {
    var cor2
    novaCor =  document.getElementById('cor1').value;
    cor2 = document.getElementById('cor2').value;

    document.body.style.backgroundColor = novaCor;

    var element = document.getElementsByClassName("branco");
    var e;
    for (e = 0; e < element.length; e++) {
    element[e].style.backgroundColor = novaCor;}
    
    var dote = document.getElementsByClassName("dot");
    dote[0].style.background = novaCor;

    var dote = document.getElementsByClassName("dot");
    dote[1].style.background = cor2;

    var x = document.getElementsByClassName("traco");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = cor2;}

    var textao = document.getElementsByClassName("texto");
    textao[0].style.color = cor2;
  }

function mudaTudo() {
    var x = document.getElementsByClassName("traco");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.transform= 'rotate(-90deg)';}

    for (i = 0; i < x.length; i++) {
    x[i].style.height= '400px';}

    for (i = 0; i < x.length; i++) {
    x[i].style.width= '25px';}

    x[0].style.margin = '45px 194px';
    x[1].style.margin = '0px 194px';
    x[2].style.margin = '-45px 194px';
}

function original() {
    var x = document.getElementsByClassName("traco");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.transform= 'rotate(-29deg)';}

    // for (i = 0; i < x.length; i++) {
    // x[i].style.height= '400px';}

    for (i = 0; i < x.length; i++) {
    x[i].style.width= '65px';}

    x[0].style.margin = '237px 0px 0px 66px';
    x[0].style.height = '75px'

    x[1].style.margin = '167px 0px 0px 145px';
    x[1].style.height = '150px'

    x[2].style.margin = '88px 0px 0px 224px';
    x[2].style.height = '235px'
}