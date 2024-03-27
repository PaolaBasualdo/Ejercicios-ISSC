/*7-Implementa una función llamada reemplazarVocales que tome una cadena de texto como parámetro y devuelva una nueva cadena donde todas las vocales se reemplacen por un guion bajo (_). Utiliza un ciclo for para iterar sobre la cadena original.*/
function reemplazarVocales(cadena){
    cadena = cadena.toLowerCase(); 
    let sinVocales='';
    let vocales = "aeiou";
    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];
        if (vocales.includes(caracter)){
            sinVocales += '-'}
          else  {
            sinVocales += caracter;
          }

        }        
    return sinVocales ;    
    }
console.log(reemplazarVocales("No hay plata"));

