function ocultarImagen() {
    var textoInput = document.getElementById('texto');
    var imagenNoTexto = document.getElementById('imagenNoTexto');

    if (textoInput.value.trim() !== '') {
        imagenNoTexto.style.display = 'none';
    } else {
        imagenNoTexto.style.display = 'block';
    }
}



function encriptar(parrafo) {
    let parrafo = document.getElementById('texto').value;
    let modificado = parrafo.toLowerCase().replace(/[^a-z\s]/g, '');
    
    

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
    ocultarImagen()
    return { mensajeOriginal: parrafo, mensajeCodificado: modificado };
}  



function desencriptar(parrafoCodificado) {
    let parrafoCodificado = document.getElementById('mensajeOutput').innerText;
    let modificado = parrafoCodificado.toLowerCase().replace(/[^a-z\s]/g, '');
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
    ocultarImagen();
    return { mensajeDescodificado: modificado, mensajeCodificado: parrafoCodificado };
}


//hay que revisar la logica porque no esta codificando la primera parte


var resultado = encriptar('Ho==la S=-=oy Cristian Mucho GuSto');
console.log('este es un mensaje codificado: \n', resultado.mensajeCodificado);
console.log('este es un mensaje original: \n', resultado.mensajeOriginal);
var resultadoDescodificacion = desencriptar(resultado.mensajeCodificado);
console.log('este es el mensaje ya decodificado: \n',resultadoDescodificacion.mensajeDescodificado)
console.log('este es un mensaje codificado original: \n',resultadoDescodificacion.mensajeCodificado)


