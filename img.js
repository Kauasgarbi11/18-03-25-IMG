var img = document.getElementById("img")

img.classList.add("img"); // esta linha adiciona a classe img (bootstrap) ao elemento img

// img.classList.add("bg-dark"); 

img.classList.add("img-fluid");

img.classList.add("rounded");

img.classList.add("mx-auto");

img.classList.add("d-block");

//img.calssList.remove("img"); // esta lnha remove a classe img (bootstrap) ao elemento img

var rotacao = 0;

function girarHorario() {
    let txtGraus = document.getElementById("txtGraus");
    let graus = parseInt (txtGraus.value);

    if (isNaN(graus)) {
        rotacao++;
    } else {
        if (graus <= 0) {
            alert("Para girar no sentido horário, é necessario digitar um  número maior que zero");
            return;
        }

        if (graus > 360) {
            txtGraus.value = 360;
    }
    
    let rotacaoTemp = rotacao + graus;

    if (rotacaoTemp <= 360) {
        rotacao += graus;
    } else {
        rotacao = rotacaoTemp - 360;
    }
}  

    img.style.transform = "rotate(" + rotacao + "deg)";
}

function girarAntiHorario() {
    let txtGraus = document.getElementById("txtGraus");

    if (txtGraus.value > 0) {
        rotacao -= parseInt(txtGraus.value);
    } else {
        rotacao--;
    }

    img.style.transform = "rotate(" + rotacao + "deg)";
}

function MoverDireita() {
    let txtPixels = document.getElementById("txtGraus");

    if (txtPixels.value > 0) {
        rotacao -= parseInt(txtPixels.value);
    } else {
        rotacao--;
    }

    img.style.transform = "rotate(" + rotacao + "deg)";
}

