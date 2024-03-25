/*65- Define una función llamada esPangrama que tome una cadena de texto como
argumento y determine si es un pangrama. Un pangrama es una frase que contiene todas
las letras del alfabeto al menos una vez.*/
function esPangrama (cadena) { 
    let cadenaMinuscula = cadena.toLowerCase();
    let arregloCadena = cadenaMinuscula.split('');
    let alfabeto = "abcdefghijklmnopqrstuvwxyz".split('');


    for (let letra of alfabeto) {
        if (!arregloCadena.includes(letra)) {
            return false; 
        }  }

    return true; 
}

console.log(esPangrama("abcde fghijk lmnop qrstuvw xyz"));