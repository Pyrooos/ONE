

function codificador(parrafo) {
    let modificado = parrafo.toLowerCase();
    

    if (parrafo.includes('a')) {
        modificado = modificado.replace(/a/g, 'ai');
    } 

    if (modificado.includes('e')) {
        
        modificado = modificado.replace(/e/g, 'enter');
    }
    if (parrafo.includes('i')){
        modificado = modificado.replace(/i/g, 'imes');
    }
    if (parrafo.includes('o')){
        modificado = modificado.replace(/o/g, 'ober');
    }
    
    if (parrafo.includes('u')){
        modificado = modificado.replace(/u/g, 'ufat');
    }
    return { mensajeOriginal: parrafo, mensajeCodificado: modificado };
}



function descodificador(parrafoCodificado) {
    let modificado = parrafoCodificado.toLowerCase();

    const reglasReemplazo = {
        'ufat': 'u',
        'ober': 'o',
        'imes': 'i',
        'enter': 'e',
        'ai': 'a'
    };

    for (const clave in reglasReemplazo) {
        if (parrafoCodificado.includes(clave)) {
            modificado = modificado.replace(new RegExp(clave, 'g'), reglasReemplazo[clave]);
        }
    }

    return { mensajeDescodificado: modificado, mensajeCodificado: parrafoCodificado };
}


//hay que revisar la logica porque no esta codificando la primera parte


var resultado = codificador('Hola Soy Cristian Mucho GuSto');
console.log('este es un mensaje codificado: \n', resultado.mensajeCodificado);
console.log('este es un mensaje original: \n', resultado.mensajeOriginal);
var resultadoDescodificacion = descodificador(resultado.mensajeCodificado);
console.log('este es el mensaje ya decodificado: \n',resultadoDescodificacion.mensajeDescodificado)
console.log('este es un mensaje codificado original: \n',resultadoDescodificacion.mensajeCodificado)


