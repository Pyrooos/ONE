
let contadorIntentos = 0;
let listaNumerosSorteados = [];
let numeroSecreto = 0;
let numeroMaximoDeIntentos = 5;
let numeroMaximoPosible = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    
    console.log(`numero de usuario :${numeroDeUsuario}`);
    console.log(`numero de intentos: ${contadorIntentos}`);
    console.log(`Numero Maximo de intentos ${numeroMaximoDeIntentos}`)
    console.log(listaNumerosSorteados)

    while(contadorIntentos <= numeroMaximoDeIntentos){
        
        if (numeroDeUsuario === numeroSecreto) {
            asignarTextoElemento('p', `Acertaste el numero en ${contadorIntentos} ${contadorIntentos == 1 ? "intento" : 'intentos'}`);
            document.getElementById('reiniciar').removeAttribute("disabled");
        } else if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento("p", "El número es mayor");
            limpiarCaja();
            contadorIntentos++;
        } else {
            asignarTextoElemento("p", "El número es menor");
            limpiarCaja();
            contadorIntentos++;
        }
        
        if (contadorIntentos == numeroMaximoDeIntentos+1) {
            asignarTextoElemento('p', "Lo siento, alcanzaste el número máximo de intentos. \n Inténtalo de nuevo");
            document.getElementById('reiniciar').removeAttribute("disabled");
        }break;      
    }               
}

function condicionesIniciales(){
    
    asignarTextoElemento('h1', "Juego del numero secreto");
    asignarTextoElemento('p', `Indica un número del 1 al 10, solo tienes ${numeroMaximoDeIntentos} intentos`);
    numeroSecreto = generarNumeroSecreto();
    contadorIntentos = 1;
    console.log(`numero secreto: ${numeroSecreto}`)
    
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value="";
}

function generarNumeroSecreto() {
    if (listaNumerosSorteados.length == numeroMaximoPosible){
        asignarTextoElemento('p', 'todos los numeros posibles ya han sido usados')


    } else{
        let numeroGenerado = Math.floor(Math.random()*10)+1; 
        
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else { 
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }
}
function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio (numeros)
    condicionesIniciales();
    //generar numero aleatorio
    //deshabilitar boton de nuevo juego
    //inicializar el numero de intentos
    
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
