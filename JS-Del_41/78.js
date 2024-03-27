/*78. Crea un bucle `while` que genere números aleatorios entre 1 y 10 hasta que se
genere un 7. Muestra los números generados en la consola*/
while (true){
    let numComputadora = Math.floor(Math.random()* 10) + 1;
        console.log(numComputadora)
        if (numComputadora === 7){
            console.log("El numero generado es 7");
            break;
        } 
    }