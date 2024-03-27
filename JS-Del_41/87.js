/*87. Crea una función llamada `calcularDescuento` que tome un precio y un porcentaje de
descuento como argumentos. La función debe calcular el precio final con descuento y mostrarlo en la consola.*/
function calcularDescuento(precio, descuento){
    let precio_final = precio - (precio*descuento);
    console.log(precio_final);
    return precio_final;
}
calcularDescuento(5000, 0.20);
