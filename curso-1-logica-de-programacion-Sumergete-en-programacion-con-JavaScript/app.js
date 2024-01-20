//Variables
let numeroMaximoPosible=100
let numeroSecreto=Math.floor(Math.random()*10)+1;
let numeroUsuario=0;
let intentos = 1;
let maximosIntentos=5;
//se utiliza para ver en consola el numero y agilizar el proceso de aprendizaje, no es necesario implementar en una version final
console.log(numeroSecreto)

while (numeroSecreto != numeroUsuario){
    let numeroUsuario = parseInt(prompt(`Me indicas un numero entre el 0 y ${numeroMaximoPosible} por favor:`));
    console.log(numeroUsuario);

//aqui se realiza la comparación
    if (numeroUsuario == numeroSecreto){
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'intento':'intentos' }`);
        break;
     //condicionales para evaluar si es mayor o menor en cada intento del ciclo while   
    } else{
        if (numeroSecreto > numeroUsuario){
            alert("Lo siento, el numero secreto es mayor")
        }
        else if (numeroSecreto < numeroUsuario){
            alert("Lo siento, el numero secreto es menor")
        }

        //Se incrementa el numero de intentos cada vez que no acertamos 
        intentos++;

        if (intentos> maximosIntentos){
            alert(`lo siento, utilizaste tus ${maximosIntentos} intentos`);
            break;
        }
    }
}
