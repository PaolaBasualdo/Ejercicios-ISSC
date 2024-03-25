/*58. Escribe una función llamada `esPar` que tome un número como argumento y retorne
`true` si es par o `false` si es impar. Luego, muestra el resultado en la consola.*/
function esPar(num) { 
    if (num%2===0){
    return true;
    } else {
        return false
    }       
};
let resultado = esPar(5);
console.log(resultado);