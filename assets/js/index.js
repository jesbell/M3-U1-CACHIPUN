// Paso 1: Solicitar datos
var cantidad = +prompt("Ingresa la cantidad de jugadas:");
var n = 0;
// Jugadas 1: Piedra 2: Papel 3: Tijeras

// Paso 2: operacion

while(n < cantidad){
    alert("Jugada Nº: "+ (n+1));
    var jugador = +prompt("Ingresa su jugada. 1: Tijeras, 2: Piedra, 3: Papel \n (SOLO número del 1 al 3)");
    var maquina = Math.floor(Math.random() * 3) + 1;

    alert("Opción maquina: "+ maquina);

    if(jugador == maquina){
        alert("Has EMPATADO!")
    }
    else if (
        (jugador == 1 && maquina === 3) ||
        (jugador == 2 && maquina == 1) ||
        (jugador == 3 && maquina == 2)){
        alert("Ganaste 😎");
    } else {
        alert("Pierdes 🙁");
    }

    n++;
}

alert("Gracias por jugar 😎")