/*6-Crea una función llamada contarDigitos que tome un número como parámetro y devuelva la cantidad de dígitos que tiene. Utiliza un ciclo for para contar los dígitos.*/

function contarDigitos(numero) {
    let cadena = numero.toString();
    let cantidad = 0;

    for (let i = 0; i < cadena.length; i++) {
        cantidad += 1;
    }

    return cantidad;
}

console.log(contarDigitos(123456));