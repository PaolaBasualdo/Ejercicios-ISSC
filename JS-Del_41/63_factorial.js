/*63- Crea una función llamada calcularFactorial que tome un número entero positivo como
argumento y retorne su factorial. El factorial de un número es el producto de todos los
números enteros positivos desde 1 hasta ese número.*/

function calcularFactorial(num) {
    let factorial = 1; 
    let i = 1; 

    
    while (i <= num) {
        factorial *= i; 
        i++; 
    }

    return factorial; 
}

console.log(calcularFactorial(5)); // Debería imprimir 120