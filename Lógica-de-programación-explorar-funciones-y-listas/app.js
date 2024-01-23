
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function intentoDeUsuario(){
    alert("click");
}
asignarTextoElemento('h1', "Juego del numero secreto");
asignarTextoElemento('p', "Indica un número del 1 al 100");
