/*62- Define una función llamada invierteCadena que tome una cadena de texto como
argumento y retorne una nueva cadena con los caracteres en orden inverso.*/
function invierteCadena (cadena) {
    let palabras = cadena.split(' '); //split divide en palabras
    let palabrasOrdenInverso = palabras.reverse();//invierte el orden de las palabras      
    return palabrasOrdenInverso.join(' ');// une las palabras invertidas en una cadena
    }  
    
console.log(invierteCadena("Instituto Superior Santa Rosa")); 

function invierteCadena2 (cadena){
    return cadena.split('').reverse().join('');
}
console.log(invierteCadena2("Hola Mundo"))
