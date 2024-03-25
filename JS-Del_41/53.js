/*53. Crea una variable llamada `diaSemana` y asígnale el nombre de un día de la semana.
Utiliza una declaración `switch` para mostrar un mensaje que indique si es un "Día
laboral" o "Fin de semana" en función del valor de `diaSemana`.*/
let diaSemana = 'Lunes';
switch (diaSemana) {
    case 'Lunes':
    case 'Martes':
    case 'Miércoles':
    case 'Jueves':
    case 'Viernes':
        console.log('Día laborable');
        break;
    case 'Sábado':
    case 'Domingo':
        console.log('Fin de semana');
        break;
    default:
        console.log('Día inválido');
}
