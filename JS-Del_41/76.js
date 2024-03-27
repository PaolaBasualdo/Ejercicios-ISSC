/*76. Crea un arreglo de palabras y utiliza un bucle `for` para concatenar todas las palabras
en una sola cadena y mostrarla en la consola.*/
let cadena = ""
let array =['Es', 'algo', 'raro', 'de', 'hacer']
for (let i=0; i<array.length; i++){
    let elemento = array[i];
    cadena+=elemento +' ';
    }
console.log(cadena);