//Inicializo los contadores
let partidasGanadas = 0;
let partidasPerdidas = 0;

//Obtengo los datos que ingresan desde el front
function piedra() {
    let nom = document.getElementById("nombre").value;
    let imgCpu = document.getElementById("jugadaCpu");
    let random = Math.floor(Math.random()*(3 - 0));
    let res = document.getElementById("resultado");
    //valido y genero numeros random para la jugada de la compu
    if (nom != "") {
        switch (random){
            case 0:
                imgCpu.src = "piedra.png";
                res.value = "Empataste"+" "+nom;
                break
            case 1:
                imgCpu.src = "Papel.png";
                res.value = "Perdiste"+" "+nom+"...";
                partidasPerdidas++;
                break
            case 2:
                imgCpu.src = "Tijera.png";
                res.value = "¡Ganaste"+" "+nom+"!";
                partidasGanadas++;
                break 
        }
        //se grafican las jugadas
        document.getElementById("win").value = partidasGanadas;
        document.getElementById("lose").value = partidasPerdidas;
    }
    else {
        alert("Se debe ingresar un nombre primero"); 
    }
    //se muestran las ventanas emergentes cuando uno gane
    if (partidasGanadas == 3){
        document.getElementById("winJugarDeNuevo").style.display="block";
    }
    else {
        if (partidasPerdidas == 3){
            document.getElementById("loseJugarDeNuevo").style.display="block";
        }
    }
}

//The same...

function papel() {
    let nom = document.getElementById("nombre").value;
    let imgCpu = document.getElementById("jugadaCpu");
    let random = Math.floor(Math.random()*(3 - 0));
    let res = document.getElementById("resultado");
    if (nom != "") {
        switch (random){
            case 0:
                imgCpu.src = "piedra.png";
                res.value = "¡Ganaste"+" "+nom+"!";
                partidasGanadas++;
                break
            case 1:
                imgCpu.src = "Papel.png";
                res.value = "Empataste"+" "+nom;

                break
            case 2:
                imgCpu.src = "Tijera.png";
                res.value = "Perdiste"+" "+nom+"...";
                partidasPerdidas++;
                break 
        }
        document.getElementById("win").value = partidasGanadas;
        document.getElementById("lose").value = partidasPerdidas;
    }
    else {
        alert("Se debe ingresar un nombre primero"); 
    }
    if (partidasGanadas == 3){
        document.getElementById("winJugarDeNuevo").style.display="block";
    }
    else {
        if (partidasPerdidas == 3){
            document.getElementById("loseJugarDeNuevo").style.display="block";
        }
    }
}

function tijera() {
    let nom = document.getElementById("nombre").value;
    let imgCpu = document.getElementById("jugadaCpu");
    let random = Math.floor(Math.random()*(3 - 0));
    let res = document.getElementById("resultado");
    if (nom != "") {
        switch (random){
            case 0:
                imgCpu.src = "piedra.png";
                res.value = "Perdiste"+" "+nom+"...";
                partidasPerdidas++;
                break
            case 1:
                imgCpu.src = "Papel.png";
                res.value = "¡Ganaste"+" "+nom+"!";
                partidasGanadas++;
                break
            case 2:
                imgCpu.src = "Tijera.png";
                res.value = "Empataste"+" "+nom;
                break 
        }
        document.getElementById("win").value = partidasGanadas;
        document.getElementById("lose").value = partidasPerdidas;
    }
    else {
        alert("Se debe ingresar un nombre primero"); 
    }
    if (partidasGanadas == 3){
        document.getElementById("winJugarDeNuevo").style.display="block";
    }
    else {
        if (partidasPerdidas == 3){
            document.getElementById("loseJugarDeNuevo").style.display="block";
        }
    }
}

//Botón que borra para jugar de nuevo
function jugarDeNuevo(){
    let imgCpu = document.getElementById("jugadaCpu");
    let res = document.getElementById("resultado");

    imgCpu.src = "Titulo.png";
    partidasGanadas = 0;
    partidasPerdidas = 0;
    document.getElementById("win").value = "";
    document.getElementById("lose").value = "";
    res.value = "";
    document.getElementById("winJugarDeNuevo").style.display="none";
    document.getElementById("loseJugarDeNuevo").style.display="none";
}
