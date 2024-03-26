/*5) Algoritmo para adivinar un número*/
alert("Juguemos un juego, la computadora piensa en un número y tienes que adivinarlo.");
while (true){
  let limMax = parseInt( prompt("Entre 1 y que numero te gustaria adivinar?"))
  if (isNaN(limMax) ){
    alert("Por favor, ingresa un número válido.")
  } else {   
  const numComputadora = Math.floor(Math.random() * limMax) + 1;//Math.floor lo redondea
  let i = 1;
  while  (i <4) {
    let numJugador = parseInt( prompt("Cual es el numero en que penso la computadora?"))
    if (isNaN(numJugador) || numJugador < 1 || numJugador > limMax) {
      alert("Por favor, ingresa un número válido.")
      i++;  
    }
    else if   (numJugador === numComputadora) {
      alert(`¡Felicitaciones! Has adivinado. El número es ${numComputadora}.`);
      alert(`Te llevó ${i} intentos.`);
      break 
    }
    else{ 
      alert  ("Ese no es el número correcto.");
        if (i === 3) {
        alert(`Se acabaron los intentos. El número correcto era ${numComputadora}. ¡Has perdido!`);
        } 
        else if (numJugador < numComputadora){
        alert (" Inténtalo de nuevo. Una Pista! El numero es mayor.")
        } else {
        alert("Inténtalo de nuevo. Una pista! El numero es menor.")
        }
        i++;
  } 
}
 
}
}
