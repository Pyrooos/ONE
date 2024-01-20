/*
Desafíos:

1 Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
2 Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
3 Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
4 Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
5 Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
*/
//1
let diaDeSemana = prompt("Que dia de la semana es?");
if (diaDeSemana === "sábado"|diaDeSemana ==="Sábado"|diaDeSemana ==="Domingo"||diaDeSemana ==="domingo"){
    alert("Buen fin de semana!")
} else{
    alert("Buena semana!")
}
//2
let esPositivoONegativo = prompt("Ingresa un numero");
if (esPositivoONegativo >0){
    alert("Este numero es positivo")
} else if (esPositivoONegativo <0){
    alert("ESte numero es negativo")
} else{
    alert("Logro desbloqueado: encontraste un secreto del universo o escogiste cero")
}
//3
let areyouwinningson = prompt("Ingresa tu puntuación");
if (areyouwinningson >= 100){
    alert("Felicidades, has ganado!")
} else{
    alert("Sigue participando")
}

//4
let cuenta= 500;
alert(`El saldo de la cuenta es ${cuenta}`)

//5
let usuario= prompt("Por favor, reportese, que usuario esta accediendo")
alert(`Bienvenido usuario ${usuario}`)