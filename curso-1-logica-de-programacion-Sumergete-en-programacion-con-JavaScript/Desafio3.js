/*
1 Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
2 Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
3 Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
4 Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
*/

///1
let contador= 1;

while (contador <=10){

    console.log(`${contador}`)
    contador = contador +1
}
//2

contador= 10;
while (contador >=0){
    //si se pone contador, dentro del ciclo while, puede crearse una superNova(dependiendo de la potencia de tu pc)
    console.log(`${contador}`)
    contador = contador -1;
}
//3 
let numeroCuentaRegresiva=prompt("Por favor, ingrese un numero");
contador=0
while ( numeroCuentaRegresiva >= contador){
    console.log(`${numeroCuentaRegresiva}`);
    numeroCuentaRegresiva--;
}


//4 

let numeroCuentaProgresiva=prompt("Por favor, ingrese un numero");
contador=0
while (contador <= numeroCuentaProgresiva){
    console.log(`${contador}`);
    contador= contador +1;
}