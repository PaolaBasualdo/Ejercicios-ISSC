/*8-Desarrolla una función llamada calcularFactorial que tome un número como parámetro y devuelva su factorial. Utiliza un ciclo for para realizar la multiplicación iterativa.*/
/*function calcularFactorial(num) {
    let factorial = 1; 
    let i = 1; 

    
    while (i <= num) {
        factorial *= i; 
        i++; 
    }

    return factorial; 
}

console.log(calcularFactorial(5)); // Debería imprimir 120*/
function calcularFactorial(num) {
    let factorial = 1; 
    for (let i= 1; i<=num; i++ ){
        factorial*=i

    }
return factorial
}


console.log(calcularFactorial(5))
