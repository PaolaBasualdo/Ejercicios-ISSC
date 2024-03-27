/*84. Crea una función llamada `calcularPromedio` que acepte un arreglo de números como
argumento y devuelva el promedio de esos números.*/
function calcularPromedio(array){
    let sumatoria = 0;
    for(let i=0; i< array.length ; i++){
        sumatoria += array[i]        
}
    let promedio = sumatoria/array.length
    return promedio
}

console.log (calcularPromedio([5,6,8,1]));