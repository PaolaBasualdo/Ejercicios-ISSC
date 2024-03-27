/*3-Implementa una función llamada duplicarCaracteres que tome una cadena de texto como parámetro y devuelva una nueva cadena donde cada carácter se duplique. Utiliza un ciclo for para iterar sobre la cadena original.*/
function duplicarCaracter(cadena){
    let cadenaCaracterDoble = ""
    for (let i = 0; i < cadena.length; i++){
        cadenaCaracterDoble += cadena[i]+cadena[i]
    }
 return cadenaCaracterDoble

}

console.log(duplicarCaracter("Hola Mundo"))