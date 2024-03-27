/*
4) Calculadora de IMC.*/
function calcularIMC(peso, altura){
    let imc = peso/(altura*altura)
    return imc
}
console.log(calcularIMC(90, 1.63))
