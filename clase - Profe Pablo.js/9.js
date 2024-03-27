/*9-Escribe una función llamada imprimirPares que tome un número como parámetro e imprima todos los números pares desde 1 hasta ese número utilizando un ciclo for.*/
function imprimePares(num){
    for(let i = 1; i <num; i++)
     if (i%2===0){
        console.log(i); 
     }
}
console.log(imprimePares(20))

