/*70- Escribe una función llamada calcularFibonacci que tome un número entero positivo
como argumento y retorne el n-ésimo término de la secuencia de Fibonacci. La secuencia
de Fibonacci comienza con 0 y 1, y cada término subsiguiente es la suma de los dos
términos anteriores*/
function calcularFiboncci(numero){
    let num1 = 0;
    let num2 = 1;
    let iteracion =2;
    let fibonacci = [num1, num2]
    while (iteracion<numero){
        let num3= num1+num2;
        num1 = num2;
        num2 = num3;
        fibonacci.push(num3);
        iteracion++
    }
    return fibonacci
}

console.log(calcularFiboncci(8));