/*80. Define un arreglo de números y utiliza un bucle `for` para encontrar el número más grande en el arreglo y mostrarlo en la consola.*/
let array = [5, 8, 6, 10, 12];
let max = array[0];
for(let i= 0; i< array.length; i++){
    if(array[i] > max) {
            max = array[i]; 
        }
    }
console.log("El número más grande en el arreglo es:", max);  


   