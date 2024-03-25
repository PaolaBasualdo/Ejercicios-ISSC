/*10-Crea una función llamada contarLetrasMayusculas que tome una cadena de texto como parámetro y devuelva la cantidad de letras mayúsculas que contiene. Utiliza un ciclo for para recorrer la cadena y un condicional if para verificar si cada carácter es una letra mayúscula.*/
function contarLetrasMayusculas(cadena){
    let mayusculas = "";
    for (let i = 0; i< cadena.length;i++ ){
    let mayuscula = cadena[i]
    if (mayuscula === cadena[i].toUpperCase() && mayuscula !== cadena[i].toLowerCase()){
    mayusculas+=mayuscula}
     }
return mayusculas.length
 }
console.log(contarLetrasMayusculas("Las Olas y el Viento"))