//1 Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calcularIMC (peso, altura){
    //implementar cuadro de texto
    return peso/(altura * altura)
}
console.log(calcularIMC(90,1.80));
//2 Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function numeroFactorial(numero){
if (numero === 0 || numero ===1){
    return 1;
} else {
    return numero * numeroFactorial(numero - 1);
}
}
console.log(numeroFactorial(6));

//3 Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales
//(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function DollarToReal(amount){
    return (`El resultado de convertir ${amount} dolares da como resultado ${amount * (4.80)} reales con tipo de cambio 4.80`);
}
console.log(DollarToReal(Math.floor(Math.random()*100)+1));
 
//4 Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function areaYPerimetro(alto, ancho){
    return (`El area de una sala rectangular con medidas ${alto} de alto y de ${ancho} ancho es de ${alto * ancho} \n
El perimetro es de la misma figura es igual a ${(alto*2)+(ancho*2)} `);
}
console.log(areaYPerimetro(5,7));

//5 Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function AreayPerimetroCirculo(radio){
    return (`El area de un circulo con un radio igual a ${radio} es igual a ${(2*Math.PI)*radio } `);    
}
console.log(AreayPerimetroCirculo(5));

//6 Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaDeMultiplicar(numero){
    for (let i = 1; i <= 10; i++ ){
       console.log(`${i} * ${numero} = ${i*numero}`);
    }
}
tablaDeMultiplicar(Math.floor(Math.random()*10)+1);