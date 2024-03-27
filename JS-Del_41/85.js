/*85. Escribe una función llamada `revertirTexto` que tome una cadena de texto como
argumento y devuelva la cadena invertida.*/
function revertirTexto(cadena){
    let array = cadena.split(" "); // convierte la cadena en un array de palabras
    let arrayInvertida = array.reverse();
    return arrayInvertida;
}
console.log(revertirTexto("Tres tristes tigres comen trigo"))
