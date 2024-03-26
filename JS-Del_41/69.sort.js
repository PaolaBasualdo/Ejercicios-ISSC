/*69- Crea una función llamada ordenarArray que tome un arreglo de números como
argumento y retorne un nuevo arreglo con los números ordenados de manera
ascendente.*/


function ordenarArray(array){
    let arrayAscendente =array.sort(function(a, b) {  
        return a - b; // estoy suponiendo que a es menor que b entonces el ordenamiento sera ascendente
        })
return arrayAscendente;

}


console.log(ordenarArray([3, 1, 4, 1, 5, 9, 2, 6, 5])) ;

// sintaxis : arr.sort([compareFunction])
// compareFuction : define el metodo de ordenamiento.Si se omite ordena segun unicode
// compareFunction (firstEl, seconEl)
//Si compareFunction(a, b) es menor que 0, se sitúa a en un indice menor que b. Es decir, a viene primero.
//Si compareFunction(a, b) retorna 0, se deja a y b sin cambios entre ellos, pero ordenados con respecto a todos los elementos diferentes. 
//Si compareFunction(a, b) es mayor que 0, se sitúa b en un indice menor que a.
//compareFunction(a, b) siempre debe retornar el mismo valor dado un par especifico de elementos a y b como sus argumentos. Si se retornan resultados inconsistentes entonces el orden de ordenamiento es indefinido.
