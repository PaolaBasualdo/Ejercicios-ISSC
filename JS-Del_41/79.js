/*79. Escribe una función que imprima la tabla de multiplicar de un número específico
utilizando un bucle `for`.*/

function calcularTabla(num){
    let tabla = [];
    for (let i=1; i<=10; i++){ 
        let producto = num*i;
        tabla.push(producto);
    }
return tabla
}
console.log(calcularTabla(8));
