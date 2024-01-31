//1 Crear una función que muestre "¡Hola, mundo!" en la consola.
function holaMundo(){
    console.log("Hola Mundo!");
}
holaMundo();

//2 Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludoNombre(nombre){
    console.log(`Hola, ${nombre}!`);
}
saludoNombre('Cooper');

//3 Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function elDobleDeUnNumero(numero){
    return numero*2;
}  
let resultado=elDobleDeUnNumero(Math.floor(Math.random()*10)+1);
console.log();
console.log(resultado);

//4 Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(valor1, valor2, valor3){
    return (valor1+valor2+valor3)/3
}
console.log(promedio(1,5,6));

//5 Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function mayorQue(x,y){
    return x > y ? x : y;
}
console.log(mayorQue(9,3));

//6 Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function potencia(x){
    return x * x
}
console.log(potencia(5))
console.log(potencia(Math.floor(Math.random()*10)+1))
