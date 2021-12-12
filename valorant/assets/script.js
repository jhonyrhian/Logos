function mudarCor(novaCor) {
    var cor2
    novaCor =  document.getElementById('cor1').value;
    cor2 = document.getElementById('cor2').value;

    document.body.style.backgroundColor = novaCor;

    var element = document.getElementsByClassName("blank");
    var e;
    for (e = 0; e < element.length; e++) {
    element[e].style.backgroundColor = novaCor;}


    var x = document.getElementsByClassName("traco");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = cor2;}

    var u = document.getElementsByClassName("ltraco");
    var m;
    for (m = 0; m < u.length; m++) {
    u[m].style.backgroundColor = cor2;}

    document.getElementById('otraco').style.borderColor = cor2;
  }
