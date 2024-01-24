//1 Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calcularIMC (peso, altura){
    let imc =  peso/(altura * altura)
    return imc
}
//2 Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function numeroFactorial(numero){
if (numero === 0 || numero ===1){
    return 1;
} else {
    return numero * numeroFactorial(numero - 1)}
    
}
console.log(numeroFactorial(6))

//3 Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales
//(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function DollarToReal(amount){
    return amount * (4.80)
    
}
console.log(DollarToReal(2));
function clickConsole(){
    prompt('ingresa un numero')
    console.log("El botón fue clicado")
}