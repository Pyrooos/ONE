//1 Descarga otro proyecto haciendo clic en este enlace y ábrelo en Visual Studio Code. 
// se esta trabajando sobre los documentos proporcionados

//2 Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
let horaDelDesafio = document.querySelector("h1");
horaDelDesafio.innerHTML='Hora del desafío';

//3 Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function clickConsole(){
    console.log("El botón fue clicado")
}

//4Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. 
//Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function ciudad(){
    nombreCiudad= prompt("Nombra una ciudad de Brasil");
    alert(`Estuve en ${nombreCiudad} y me acordé de ti`);
}
//5 Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function ilove(){
    alert("Yo amo JS");
}

//6 Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function suma(){
    primerDigito=parseInt(prompt("Por favor ingresa el primer digito para una suma"));
    segundoDigito=parseInt(prompt("Introduce el segundo digito"));
    resultado = primerDigito + segundoDigito;
    alert(`El resultado de ${primerDigito} + ${segundoDigito} es igual a ${resultado} `)
}