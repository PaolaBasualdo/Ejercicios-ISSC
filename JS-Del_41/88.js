/*88. Escribe una función llamada `calcularFactorial` que tome un número entero como
argumento y calcule su factorial (por ejemplo, `5! = 5 * 4 * 3 * 2 * 1`). Muestra el resultado
en la consola.*/
let factorial = 1;
function calcularFactorial (numero){
    for (let i = 1; i<=numero; i++){
        factorial*=i;
    }   
    console.log(factorial);
    return factorial;   
}
calcularFactorial(5);

