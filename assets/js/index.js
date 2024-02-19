// Paso 1: Solicitar datos
var cantidad = +prompt("Ingresa la cantidad de jugadas:");
var n = 0; //Será nuestro contador, ira incrementando

// Jugadas a elegir por el usuario:
// 1: Piedra, 2: Papel, 3: Tijeras


// Paso 2: operacion
while(n < cantidad){
    //Indica el número de jugada
    alert("Jugada Nº: "+ (n+1));
    //Pidiendo al usuario que elija su jugada
    var jugador = +prompt("Ingresa su jugada. 1: Tijeras, 2: Piedra, 3: Papel \n (SOLO número del 1 al 3)");
    
    var maquina = Math.floor(Math.random() * 3) + 1;

    if(jugador == maquina){
        alert("¡HAS EMPATADO!")
    }
    else if (
        (jugador == 1 && maquina === 3) ||
        (jugador == 2 && maquina == 1) ||
        (jugador == 3 && maquina == 2)){
        alert("¡¡ GANASTE 😎 !!");
    } else {
        alert("Perdiste 🙁");
    }

    n++;
}

alert("Gracias por jugar 😎")