/*68- Define una función llamada esPalindromo que tome una cadena de texto como
argumento y determine si es un palíndromo. Un palíndromo es una palabra o frase que se
lee igual de izquierda a derecha y de derecha a izquierda, ignorando espacios y signos de
puntuación.

function esPalindromo(cadena){
    let cadenaMinuscula = cadena.toLowerCase();
    let array = cadenaMinuscula.split(' ');
    
    let arrayInvertida = array.slice().reverse()
    console.log(array);    
    console.log(arrayInvertida);
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== arrayInvertida[i]) {
            return false;
        }
    }
    return true;

}
console.log( esPalindromo('Buen dia cordoba')); 
console.log( esPalindromo('Anita lava la tina')); */