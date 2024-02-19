// Paso 1: Solicitar datos
// Jugadas 1: Piedra 2: Papel 3: Tijeras
var jugador = 1;
var cantidad = 2;
var maquina = Math.random(1, 3);

// Paso 2: operacion

// For // While
if (
  (jugador === "1 piedra" && maquina === "3 tijeras") ||
  (jugador === "2 papel" && maquina === "1 piedra") ||
  (jugador === "3 tijeras" && maquina === "1 papel")
) {
  console.log("Ganaste");
} else {
  console.log("Pierdes");
}