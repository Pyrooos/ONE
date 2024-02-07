

function codificador(parrafo){
    var textoModificado=parrafo.replace(/a/g,'Er' );
    return { original: parrafo, modificado: textoModificado };
}

var resultado= codificador('agua de horchata')
console.log(codificador(resultado.modificado));
console.log(codificador(resultado.original));
