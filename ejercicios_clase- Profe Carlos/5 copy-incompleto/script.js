/*5) Algoritmo para adivinar un número*/

    function comenzarJuego() {
      const mensajeContainer = document.getElementById("mensajeContainer");
      const limMax = parseInt(document.getElementById("limMax").value);

      if (isNaN(limMax)) {
        mensajeContainer.innerHTML += "<br>Por favor, ingresa un número válido.";
      } else {
        const numComputadora = Math.floor(Math.random() * limMax) + 1;
        let i = 1;
        while (i < 4) {
          const numJugador = parseInt(document.getElementById("numJugador").value);
          if (isNaN(numJugador) || numJugador < 1 || numJugador > limMax) {
            mensajeContainer.innerHTML += "<br>Por favor, ingresa un número válido.";
            i++;
          } else if (numJugador === numComputadora) {
            mensajeContainer.innerHTML += `<br>¡Felicitaciones! Has adivinado. El número es ${numComputadora}.`;
            mensajeContainer.innerHTML += `<br>Te llevó ${i} intentos.`;
            break;
          } else {
            mensajeContainer.innerHTML += "<br>Ese no es el número correcto. Inténtalo de nuevo.";
            if (i === 3) {
              mensajeContainer.innerHTML += `<br>Se acabaron los intentos. El número correcto era ${numComputadora}. ¡Has perdido!`;
            } else if (numJugador < numComputadora) {
              mensajeContainer.innerHTML += "<br>Una Pista! El número es mayor.";
            } else {
              mensajeContainer.innerHTML += "<br>Una pista! El número es menor.";
            }
            i++;
          }
        }
      }
    }

/*const mensajeContainer = document.getElementById("mensajeContainer");

mensajeContainer.innerHTML = "Juguemos un juego, la computadora piensa en un número y tienes que adivinarlo.";

while (true) {
  let limMax = parseInt(prompt("Entre 1 y qué número te gustaría adivinar?"));
  if (isNaN(limMax)) {
    mensajeContainer.innerHTML += "<br>Por favor, ingresa un número válido.";
  } else {
    const numComputadora = Math.floor(Math.random() * limMax) + 1;
    let i = 1;
    while (i < 4) {
      let numJugador = parseInt(prompt("¿Cuál es el número en que pensó la computadora?"));
      if (isNaN(numJugador) || numJugador < 1 || numJugador > limMax) {
        mensajeContainer.innerHTML += "<br>Por favor, ingresa un número válido.";
        i++;
      } else if (numJugador === numComputadora) {
        mensajeContainer.innerHTML += `<br>¡Felicitaciones! Has adivinado. El número es ${numComputadora}.`;
        mensajeContainer.innerHTML += `<br>Te llevó ${i} intentos.`;
        break;
      } else {
        mensajeContainer.innerHTML += "<br>Ese no es el número correcto. Inténtalo de nuevo.";
        if (i === 3) {
          mensajeContainer.innerHTML += `<br>Se acabaron los intentos. El número correcto era ${numComputadora}. ¡Has perdido!`;
        } else if (numJugador < numComputadora) {
          mensajeContainer.innerHTML += "<br>Una Pista! El número es mayor.";
        } else {
          mensajeContainer.innerHTML += "<br>Una pista! El número es menor.";
        }
        i++;
      }
    }
  }
}*/
