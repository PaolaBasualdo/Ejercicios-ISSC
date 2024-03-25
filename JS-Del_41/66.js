/*66- Crea una función llamada sumaDigitos que tome un número entero como argumento y
retorne la suma de sus dígitos. Por ejemplo, si el número es 123, la función debe retornar
6 (1 + 2 + 3).
*/
function sumarDigitos(num){
    let cadena = num.toString();
    let array = cadena.split('');
    let suma = 0;
    for (let num of array){
        let entero = parseInt(num);
        suma+=entero
   

    }
 return suma
}
console.log(sumarDigitos(5268));