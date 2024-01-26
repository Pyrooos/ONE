//1 Crea una lista vacía llamada "listaGenerica".
let listaGenerica=[];

//2 Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];
console.log(lenguagesDeProgramacion);
//3 Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push( 'Java', 'Ruby' ,'GoLang' );


//4 Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
console.log(lenguagesDeProgramacion);

//5 Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
console.log(lenguagesDeProgramacion.reverse());

//6 Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularPromedio(listaNumeros){
    let suma = listaNumeros.reduce((accumulator, numero) => accumulator + numero,0);
    let promedio = suma / listaNumeros.length;
    return promedio
}
let resultado= calcularPromedio([12,42,12,13])
console.log(resultado)


//7 Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function MaxMin1(listaNumeros){
    let maximo= Math.max(...listaNumeros);
    let minimo = Math.min(...listaNumeros);
    console.log(`El numero mas pequeno es: ${minimo}`)
    console.log(`El numero mas grande es: ${maximo}`)
}
function MaxMin2(listaNumeros){
    let max = listaNumeros[0];
    let min = listaNumeros[0];
    for (let i=1; i<listaNumeros.length; i++ ){
        if (min > listaNumeros[i]){
            min = listaNumeros[i];
        } else if (max < listaNumeros[i]){
            max = listaNumeros[i];
        }
    }
    console.log(`El numero mas pequeno es: ${min}`)
    console.log(`El numero mas grande es: ${max}`)
}
MaxMin1([111,45,12,9,65,34,87,43])
MaxMin2([13,5,322,1,67,5])

//8 Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaLista(listaNumeros){
    let suma = 0;
    for (let i=0; i < listaNumeros.length; i++ ){
        suma += listaNumeros[i];
        
    }return suma
}
console.log(sumaLista([1,5,2,62,1,1]));
//9 Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
//10 Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
//11 Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.