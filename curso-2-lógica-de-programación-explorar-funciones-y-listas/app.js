
let numeroSecreto = generarNumeroSecreto();
let contadorIntentos = 0;
let contadorMaximoIntentos =5;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
/*function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    console.log(numeroDeUsuario);
    console.log(contadorIntentos);
    
        if (numeroDeUsuario === numeroSecreto){
            asignarTextoElemento('p', `Acertaste el numero en ${contadorIntentos} ${contadorIntentos == 1 ? "intento" : 'intentos'} `)
            document.getElementById('reiniciar').removeAttribute("disabled")
        }else {
            //El usuario no acerto
            if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento("p", "El número es mayor")  
            }else {
                asignarTextoElemento("p", "El número es menor")
            }
            limpiarCaja(); 
            contadorIntentos++;
        }
    return;
}
*/

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    while(numeroDeUsuario !== numeroSecreto){
        if (numeroDeUsuario === numeroSecreto){
          
            asignarTextoElemento('p', `Acertaste el numero en ${contadorIntentos} ${contadorIntentos == 1 ? "intento" : 'intentos'} `)
            document.getElementById('reiniciar').removeAttribute("disabled")
        }else {
            if(numeroDeUsuario > numeroSecreto){
                asignarTextoElemento('p', 'El numero secreto es menor')
            } else if ( numeroDeUsuario < numeroSecreto){
                asignarTextoElemento('p', 'El numero secreto es mayor')
        }
        limpiarCaja(); 
    contadorIntentos++;
    }if (contadorIntentos === contadorMaximoIntentos){
        asignarTextoElemento('p', 'Lo siento, agotaste tus intentos. Intentalo de nuevo')
        break;

        

    }
    }
    
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', "Juego del numero secreto");
    asignarTextoElemento('p', "Indica un número del 1 al 10");
    numeroSecreto = generarNumeroSecreto();
    contadorIntentos = 1;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value="";
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;  
}
function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio (numeros)
    condicionesIniciales();
    //generar numero aleatorio
    //deshabilitar boton de nuevo juego
    
    //inicializar el numero de intentos
    condicionesIniciales
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();