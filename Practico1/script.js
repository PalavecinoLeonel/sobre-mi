//Esta funcion se ejecuta al darle click al btn calcular
function calcular(){
    //Obtengo los datos que ingresan desde el front
    let num1 = parseFloat(document.getElementById("primerNumero").value);
    let num2 = parseFloat(document.getElementById("segundoNumero").value);
    let opc = document.getElementById("operacion").value;
    let res;
    //Acá sucede toda la magia
    if (num1 === "" || num2 === "") {
        //ésto es lo único que no me funciona, aunque cuando dejo vacio los input, y aprieto calcular, no me arroja ningún NaN
        alert("Los campos no pueden estar vacios");
    }
    else {
    switch (opc){
        case "+" :
            res = num1 + num2;
            break
        case "-" :
            res = num1 - num2;
            break
        case "x" :
            res = num1 * num2;
            break
        case "%" :
            if (num2 == 0) {
                alert("La operación no es valida"); 
            }
            else {
                res = num1 / num2;
            }
            break
        default:
            alert("Debe elegir una operación primero");
    }
    }
    
    if (res > 10000000000000000 || res < -10000000000000000) {
        //despues de esa cifra, te empieza a poner ceros de más y si seguimos agregando cifras aparece la típica "e"
        alert("El resultado no puede ser mayor que 10.000.000.000.000.000 ni menor que -10.000.000.000.000.000");
    }
    else {
        document.getElementById("resultado").value = res;    
    }
            

}
//Esta funcion se ejecuta al darle click al btn borrar
function borrar() {
    document.getElementById("primerNumero").value = "";
    document.getElementById("segundoNumero").value = "";
    document.getElementById("resultado").value = "";
}