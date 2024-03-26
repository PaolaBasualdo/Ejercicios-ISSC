function ordenarArray(array){
    let arrayDescendente =array.sort(function(a, b) {  
        return b-a; // estoy suponiendo que b es mayor que a entonces el ordenamiento sera ascendente
        })
return arrayDescendente;

}


console.log(ordenarArray([3, 1, 4, 1, 5, 9, 2, 6, 5])) ;