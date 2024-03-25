/*55. Crea una variable llamada `color` y asígnale el nombre de un color. Utiliza una serie
de declaraciones `if...else if` para determinar si el color es "Rojo," "Verde," o "Azul," y
muestra un mensaje correspondiente en la consola.*/
let color;

if (color === undefined) {
    console.log('La variable color no está definida');
} else {
    switch (color) {
        case 'Rojo':
        case 'Verde':
        case 'Azul':
            console.log('El color es ' + color);
            break;
        default:
            console.log('El color no es Rojo, ni Verde, ni Azul');
    }
}