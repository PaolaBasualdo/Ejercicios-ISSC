/*4-Desarrolla una función llamada invertirNumero que tome un número como parámetro y devuelva el número invertido. Por ejemplo, si se pasa el número 123, la función debería devolver 321. Utiliza un ciclo for para invertir el número.*/
function invertirNumero(num) {
    let cadena = num.toString();
    let cadenaInvertida = '';

    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += cadena[i];
    }

    let numInvertido = parseInt(cadenaInvertida);
    return numInvertido;
}
console.log(invertirNumero(123))






