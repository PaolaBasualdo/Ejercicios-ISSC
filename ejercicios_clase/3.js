/*
3) Calcular el máximo de tres números.
*/
function numMax(num1, num2, num3){
    if (num1>num2 && num1>num3){
        return num1;
    } else if (num2>num1&&num2>num3){
        return num2;
     } else { return num3}

}
console.log(numMax(5,10,3))