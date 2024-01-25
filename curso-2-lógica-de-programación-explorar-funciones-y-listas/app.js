
let numeroSecreto = generarNumeroSecreto();
let contadorIntentos;
let contadorMaximoIntentos =5;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    console.log(numeroDeUsuario);
    console.log(contadorIntentos);
    
        if (numeroDeUsuario === numeroSecreto){
            asignarTextoElemento('p', `Acertaste el numero en ${contadorIntentos} ${contadorIntentos == 1 ? "intento" : 'intentos'} `)
            document.getElementById('reiniciar').removeAttribute("disabled")
        } else {
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
    let numeroGenerado =  Math.floor(Math.random()* 10 )+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
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