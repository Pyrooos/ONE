function ocultarImagen() {
    var textoInput = document.getElementById('texto');
    var imagenNoTexto = document.getElementById('imagenNoTexto');

    if (textoInput.value.trim() === '' || /[0-9!@#$%^&*(),.?":{}|<>]/.test(textoInput.value)) {
        imagenNoTexto.style.display = 'block';
    } else {
        imagenNoTexto.style.display = 'none';
    }
}

function encriptar() {
    textoInput = document.getElementById('texto').value;
    var resultado = encriptarMensaje(textoInput);
    document.getElementById('mensajeOutput').innerText = resultado.mensajeCodificado;
    ocultarImagen();
    // Habilitar el botón de desencriptar
    document.querySelector('#desencriptar').removeAttribute('disabled')
}
function desencriptar(){
    var textoOutput= document.getElementById('mensajeOutput').innerText;
    var resultado = desencriptarMensaje(textoOutput);
    document.getElementById('mensajeOutput').innerText = resultado.mensajeDescodificado;
    ocultarImagen()
}


function encriptarMensaje(parrafo) {
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
    return { mensajeOriginal: parrafo, mensajeCodificado: modificado };
}  
function desencriptarMensaje(parrafoCodificado) {
    
    let modificado = parrafoCodificado.toLowerCase().replace(/[^a-z\s]/g, '');
   
    if (modificado.includes('ai')) {
        modificado = modificado.replace(/ai/g, 'a');
    }

    if (modificado.includes('enter')) {
        modificado = modificado.replace(/enter/g, 'e');
    }

    if (modificado.includes('imes')) {
        modificado = modificado.replace(/imes/g, 'i');
    }

    if (modificado.includes('ober')) {
        modificado = modificado.replace(/ober/g, 'o');
    }

    if (modificado.includes('ufat')) {
        modificado = modificado.replace(/ufat/g, 'u');
    }
    
    return { mensajeDescodificado: modificado, mensajeCodificado: parrafoCodificado };
}
function copiarMensaje() {
        
        var elemento = document.getElementById('mensajeOutput');
    
        var rango = document.createRange();
        rango.selectNode(elemento);
        window.getSelection().removeAllRanges(); 
        window.getSelection().addRange(rango);
    
        try {
            document.execCommand('copy');
            console.log('Texto copiado exitosamente');
        } catch (err) {
            console.error('Error al intentar copiar el texto', err);
        }
        window.getSelection().removeAllRanges();
    }




//hay que revisar la logica porque no esta codificando la primera parte

