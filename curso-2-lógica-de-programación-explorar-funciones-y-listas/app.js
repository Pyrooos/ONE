
let numeroSecreto = generarNumeroSecreto();
let contadorIntentos = 1;

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
    }else {
        if (numeroDeUsuario < numeroSecreto) {
        asignarTextoElemento("p", "El número es mayor")  
        }else {
            asignarTextoElemento("p", "El número es menor")
        } 
        contadorIntentos++;
    }
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;  
}
asignarTextoElemento('h1', "Juego del numero secreto");
asignarTextoElemento('p', "Indica un número del 1 al 10");
