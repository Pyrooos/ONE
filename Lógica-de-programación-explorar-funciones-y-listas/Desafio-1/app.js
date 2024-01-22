//1 se esta trabajando sobre los documentos proporcionados

//2
let horaDelDesafio = document.querySelector("h1");
horaDelDesafio.innerHTML='Hora del desafío';

//3
function clickConsole(){
    console.log("El botón fue clicado")
}

//4
function ciudad(){
    nombreCiudad= prompt("Nombra una ciudad de Brasil");
    alert(`Estuve en ${nombreCiudad} y me acordé de ti`);
}
//5
function ilove(){
    alert("Yo amo JS");
}

//6
function suma(){
    primerDigito=parseInt(prompt("Por favor ingresa el primer digito para una suma"));
    segundoDigito=parseInt(prompt("Introduce el segundo digito"));
    resultado = primerDigito + segundoDigito;
    alert(`El resultado de ${primerDigito} + ${segundoDigito} es igual a ${resultado} `)
}