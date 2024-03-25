/*64- Escribe una función llamada contarPalabras que tome una cadena de texto como
argumento y retorne el número de palabras en esa cadena. Supón que las palabras están
separadas por espacios.*/
function contarPalabras (cadena){
    let arrayCadena = cadena.split(' ');
    console.log(arrayCadena);
    let cantidad = arrayCadena.length;
return cantidad;
}

console.log(contarPalabras("Ser o no ser esa es la cuestion"));