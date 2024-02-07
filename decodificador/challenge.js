

function codificador(parrafo) {
    let modificado = parrafo;

    if (parrafo.includes('a')) {
        parrafo = modificado.replace(/a/g, 'ai');
    } 

    if (parrafo.includes('e')) {
        
        parrafo = modificado.replace(/e/g, 'enter');
    }
    if (parrafo.includes('i')){
        parrafo = modificado.replace(/i/g, 'imes');
    }
    if (parrafo.includes('o')){
        parrafo = modificado.replace(/o/g, 'ober');
    }
    
    if (parrafo.includes('u')){
        parrafo = modificado.replace(/u/g, 'ufat');
    }
    return { original: parrafo, codificado: modificado };
}



function descodificador(parrafoCodificado) {
    let modificado = parrafoCodificado;

    if (parrafoCodificado.includes('ufat')) {
        modificado = modificado.replace(/ufat/g, 'u');
    }

    if (parrafoCodificado.includes('ober')) {
        modificado = modificado.replace(/ober/g, 'o');
    }

    if (parrafoCodificado.includes('imes')) {
        modificado = modificado.replace(/imes/g, 'i');
    }

    if (parrafoCodificado.includes('enter')) {
        modificado = modificado.replace(/enter/g, 'e');
    }

    if (parrafoCodificado.includes('ai')) {
        modificado = modificado.replace(/ai/g, 'a');
    }

    return { original: modificado, codificado: parrafoCodificado };
}
//hay que revisar la logica porque no esta codificando la primera parte


var resultado = codificador('felicidades por enfrentar este desafio y haberlo concluido con exito!');
console.log(resultado.codificado);
console.log(resultado.original);
var resultadoCodificacion = codificador('fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!');
console.log(resultadoCodificacion.codificado);

var resultadoDescodificacion = descodificador(resultadoCodificacion.codificado);
console.log(resultadoDescodificacion.original);