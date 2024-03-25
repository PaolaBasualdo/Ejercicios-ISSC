/*61- Escribe una función llamada esPrimo que tome un número como argumento y retorne
true si es primo o false si no lo es. Un número primo es aquel que solo es divisible por 1 y
por sí mismo.*/
/* un número solo puede ser divisible por números entre 2 y su raíz cuadrada para no ser primo.*/

function esPrimo(num){
    let i = 2 
    while (i< Math.sqrt(num)){            
        let modulo = num % i 
        if (modulo === 0){
                console.log('El numero no es primo')
                return false
            }
        else {
            i ++
        }}
    console.log("El numero es primo");
    return true        

}
console.log(esPrimo(2547))