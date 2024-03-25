/*2-Crea una función llamada contarCaracteres que tome una cadena de texto y un carácter como parámetros, y devuelva la cantidad de veces que el carácter aparece en la cadena. Utiliza un ciclo for para recorrer la cadena.*/
function contarCaracteres(cadena, caracter) {
    let cantidad = 0;
    cadena = cadena.toLowerCase(); 

    for (let i = 0; i < cadena.length; i++) { 
        if (cadena[i] === caracter) {
            cantidad += 1; 
        }
    }

    if (cantidad === 0) {
        console.log("El caracter no se encuentra en la cadena");
    }

    return cantidad; 
}

console.log(contarCaracteres("Al pan, pan y al vino, vino", "a")); 

