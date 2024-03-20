// para abrir consola ctrl+shift+j
//alt+shift+a para comentarios multilinea
//console.log("Hola");

//declarar variables:
//console.log(miVariableLet);

/* var miVariable ="hola"; 
let miVariableLet = 1; 
console.log(miVariable);

console.log(miVariableLet); 
var miVariable = 2; */
// TYPEOF para saber que tipo de variable es
/* let precio = 5.99;
let apellido = 'Basualdo';
let esMenor = false;
let objetoNulo = null;
let indefinida; /*declarada pero no inicializada*/


/*console.log(typeof precio);
console.log (typeof apellido);
console.log(typeof esMenor);
console.log(typeof objetoNulo);
console.log(typeof indefinida); */

//operador de asignacion con incremento
/*let ahorro = 7000; 
console.log(ahorro);
ahorro+=3500;
console.log(ahorro);*/

//operador de suma como concatenador
/*let num1 = 2;
let num2 = "2";
console.log(num1+num2);*/
//se obtiene por consola 22

//operadores de comparacion
/*console.log(1==1); //true
console.log(1=="1"); //true
//igual estricto
console.log(1==="1");//compara un numero con una cadena*/

//diferente y difernte estricto
/*console.log("1" !=1); //false porque compara valores
console.log("1" !==1);//true porque compara tipos y uno es una cadena y el otro un numero
*/

//operadores logicos
/*let edad = 17;
let dni = !true;
console.log( edad>= 18 || dni == true);
*/

//PROMPT
/*var consulta = prompt("ingrese su consulta");
console.log (consulta);*/

//prompt solo devuelve cadenas, hay que convertir lo ingresado
/*console.clear();
var ingresaEdad = prompt("Cual es su edad? ");
var edad = parseInt(ingresaEdad);
console.log(edad += 10);*/

/*let num1Ingreso = prompt('Ingrese un numero: '); 
let num2Ingreso = prompt('Ingrese otro numero: ');
let num1 = parseInt(num1Ingreso);
let num2 = parseInt(num2Ingreso);
let suma = (num1 + num2);
let resultado = alert ('La suma es igual a ' + suma);
*/

//si no se convierten los numeros, se concatenan

/*let num1 = parseInt(prompt('Ingrese un numero: ')); 
let num2 = parseInt(prompt('Ingrese otro numero: '));
let suma = (num1+num2);
let resultado = alert ('La suma es igual a ' + suma);*/

//IF/ELSE

/*let mostrar = false; //defino la variable mostrar como booleano valor false

if(mostrar==true){
    console.log('Es verdadero'); 
    console.log(typeof mostrar);
}
else {
    console.log('Es falso');
}*/

// LOGIN
/*const userAdm = 'paola';
const passwordAdm = '1234';

const user = prompt('Ingrese nombre de usuario: ');
const password = prompt('Ingrese password: ');

if (user == userAdm && password == passwordAdm){
    alert('Bienvenido ' + user);
}
else{
    alert('Usuario invalido');
}*/

//SWITCH
//EJEMPLO 1
/*let diasDeLaSemana = parseInt(prompt('Ingrese el numero del dia de la semana: '));
switch (diasDeLaSemana){
    case 1 : 
        console.log('Hoy es Domingo');
        break;
    case 2 : 
        console.log('Hoy es Lunes');
        break;
    case 3 : 
        console.log('Hoy es Martes');
        break;
    case 4 : 
        console.log('Hoy es Miercoles');
        break;
    case 5 : 
        console.log('Hoy es Jueves');
        break;
    case 6 : 
        console.log('Hoy es Viernes');
        break;
    case 7 : 
        console.log('Hoy es Sabado');
        break;
    default: 
        console.log('Numero no valido');
    
    }*/
    //EJEMPLO 2
   /* let nota= parseInt(prompt('Ingrese su nota: '));
    switch (nota){
        case 10:
            calificacion = 'Sobresaliente';
            break;
        case 9:
        case 8:
            calificacion = 'Notable';
            break;
        case 7:
        case 6:
            calificacion = 'Bien';
            break;
        case 5:
            calificacion = 'Suficiente';
            break;
        case 4:
        case 3:
        case 2:
        case 1:
        case 0:
            calificacion = 'Insuficiente';
            break;
        default:
            calificacion = 'Nota invalida'

    }
    console.log('ha obtenido un ', calificacion);*/



//OPERADOR TERNARIO

/*let nota = parseInt(prompt('Ingrese su nota: '));
let calificacion = nota<5 ? 'Desaprobado':'Aprobado';
console.log('Usted esta ', calificacion);*/

//WHILE
//EJEMPLO 1
/*
let i=0;
while(i<=5){
    console.log(i);
    i++; 
}
console.log('Fin del bucle');*/
//EJEMPLO 2: mostrar impares hastael valor elegido
/*let numero=parseInt(prompt('Ingrese un numero'));
let contador= 1;
while(contador <=numero){
    if(contador%2 !=0){
        console.log(contador);
    }
    contador++;
}*/
//OTRA FORMA DE RESOLVERLO
/*let numero=parseInt(prompt('Ingrese un numero'));
let contador =1;
while(contador <=numero){
    console.log(contador);
    contador+=2
;
}*/

//EJEMPLO 3 le pide al usuario que ingrese numeros hasta que ingrese 0, ahi le devuelve la sumatoria de todos los numeros ingresados

/*let number;
let suma=0;
while (number !=0){
    number=parseInt(prompt('Ingrese un numero: '));
    suma+=number;
}
alert('La suma de todos los numeros ingresados es: '+ suma);*/

//EJEMPLO 4 le pide al usuario que ingrese numeros pares, en cuanto ingrese un impar le arroja la cantidad de todos los pares ingresados

/*let numero =0, total =0;
while(numero%2==0){
    numero=parseInt(prompt('Ingrese un numero: '));
    total++;
}
total--;
alert('Ha ingresado ' + total + ' numeros pares. ');*/

//DO-WHILE
//EJEMPLO 1
/*do{
    var tecla = prompt('Teclear la letra magica');
} while (tecla != 'A');
alert ('La has encontrado');*/

//EJEMPLO 2

/*let opcion = '';
do{
    opcion = prompt('Escoge una opcion:\n 1-Escribir\n 2-Leer\n 3-Salir');
    switch (opcion){
        case '1':
            alert('Eligio Escribir');
            break;
        case '2':
            alert('Eligio Leer'); 
            break;
        case '3':
            alert('Eligio Salir'); 
            break; 
        default:
            alert('Elija una opcion valida');
    }
    } while (opcion !='3');*/

    //EJEMPLO 3

    /*let num1, num2, repite;
    do{
        num1 = parseInt(prompt('Ingrese un numero'));
        num2=parseInt(prompt('Ingrese otro numero'));
        alert('La suma es ' + (num1 + num2));
        do{
            repite = prompt('Quiere repetir?(S-N)').toUpperCase();
            console.log(repite);
        }while (repite != 'S' && repite != 'N');
        }
    while (repite == 'S');*/

//FOR 

/*console.log('Imprimimos los numeros del 0 al 10');
for(let i=0; i<=10; i++){
    console.log(i);
}*/

//ARRAY

/*let arrayNum=[1,2,3,4,5];
console.log(arrayNum);*/

//NEW ARRAY
/* let array = new Array(1,2,3,4,5);
 console.log(array);*/

 //CON EL METODO SPLIT

/*let string1 = 'Hola Mundo desde JS';
let array = string1.split (' ');
console.log(array);*/
    

