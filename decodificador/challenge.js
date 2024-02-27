function ajustarEstilos() {
    var textoInput = document.getElementById('texto');
    var areaDerechaTexto = document.querySelector('.areaDerechaTexto');
    
    var simboloLeyenda=document.querySelector('.simboloLeyenda');
    var botones = document.querySelector('.botones');
    var imagenNoTexto = document.getElementById('imagenNoTexto');
    var mensajeOutput=document.getElementById('mensajeOutput');
    var botonCopiar = document.getElementById('botonCopiar');
    var encriptar = document.querySelector('.encriptar')
    var desencriptar = document.querySelector('.desencriptar')
    

    if (window.innerWidth <= 768 & window.innerHeight <= 1174 & textoInput.value.trim()!= '') {
        
        imagenNoTexto.style.display = 'none';

        textoInput.style.maxHeight = '35%';
        simboloLeyenda.style.marginTop = '61%';
        botones.style.marginTop = '-1%'; 
        
        
        

        areaDerechaTexto.style.height = '30%'; 
        areaDerechaTexto.style.top = '83%';
        areaDerechaTexto.style.maxHeight ='25%';
        
        mensajeOutput.style.top = '31%';
        mensajeOutput.style.right = '1%';
        mensajeOutput.style.width = '93%';
        mensajeOutput.style.maxHeight ='40%';
        

        botonCopiar.style.height = '23%'
        botonCopiar.style.width = '93%'
    
        
        console.log('ajustar estilo activado');
        
    } 

    if (window.innerWidth <= 768 & window.innerHeight <= 1384 & textoInput.value.trim()!= '') {
        
        imagenNoTexto.style.display = 'none';

        textoInput.style.maxHeight = '40%';
        simboloLeyenda.style.marginTop = '74%';
        botones.style.marginTop = '-7%'; 
    
        
        

        areaDerechaTexto.style.height = '33%'; 
        areaDerechaTexto.style.top = '81%';
        areaDerechaTexto.style.maxHeight ='25%';
        
        mensajeOutput.style.top = '31%';
        mensajeOutput.style.right = '1%';
        mensajeOutput.style.width = '93%';
        mensajeOutput.style.maxHeight ='40%';
        
        botonCopiar.style.top = '73%'
        botonCopiar.style.height = '21%'
        botonCopiar.style.width = '94%'
    
        
        console.log('ajustar estilo activado');
        
    }
    if (window.innerWidth <= 375 &  textoInput.value.trim()!== '') {
        
        imagenNoTexto.style.display = 'none';

        textoInput.style.maxHeight = '80%';
        simboloLeyenda.style.marginTop = '54%';
        
        encriptar.style.top= '45%';
        desencriptar.style.top= '54%';
    
        
        

        areaDerechaTexto.style.height = '33%'; 
        areaDerechaTexto.style.top = '81%';
        areaDerechaTexto.style.maxHeight ='25%';
        
        mensajeOutput.style.top = '31%';
        mensajeOutput.style.right = '1%';
        mensajeOutput.style.width = '93%';
        mensajeOutput.style.maxHeight ='40%';
        
        botonCopiar.style.top = '73%'
        botonCopiar.style.height = '21%'
        botonCopiar.style.width = '94%'
    
        
        console.log('ajustar estilo activado');
        
    }
    
}
function habilitarBoton() {
    var textoInput = document.getElementById('texto');
    var botonDesencriptar = document.getElementById('desencriptar');

    if (textoInput.value.trim() !== '') {
        botonDesencriptar.removeAttribute('disabled');
    } else {
        botonDesencriptar.setAttribute('disabled', 'disabled');
    }
}
function ocultarBoton(){
    var mensajeOutput = document.getElementById('mensajeOutput');
    var botonCopiar = document.getElementById('botonCopiar');

    if (mensajeOutput.innerText.trim() !== '') {
        botonCopiar.style.display = 'block'; 
        document.querySelector('#desencriptar').removeAttribute('disabled')
    } else {
        botonCopiar.style.display = 'none';   
    }
}


function ocultarTexto(){
    var textoInput = document.getElementById('texto')
    var leyendaNoTexto = document.getElementById('leyendaNoTexto');
    var leyendaNoTexto2 = document.getElementById('leyendaNoTexto2');

        if (textoInput.value.trim()=== '' ){
            leyendaNoTexto.style.display = 'block';
            leyendaNoTexto2.style.display = 'block';

        } else {
            leyendaNoTexto.style.display = 'none' 
            leyendaNoTexto2.style.display = 'none'
    } 
    console.log('Función ocultarTexto ejecutada');
}

function ocultarImagen() {
    var textoInput = document.getElementById('texto');
    var imagenNoTexto = document.getElementById('imagenNoTexto');

    if (textoInput.value.trim() === '' ) {
        imagenNoTexto.style.display = 'block';
    } else {
        imagenNoTexto.style.display = 'none';
    }
    console.log('Función ocultarImagen ejecutada');
}

function manejarEventos(){
    ocultarBoton();
    ocultarImagen();
    ocultarTexto();
    ajustarEstilos()
}

function encriptar() {
    var textoInput = document.getElementById('texto').value;
    var resultado = encriptarMensaje(textoInput);

    document.getElementById('mensajeOutput').innerText = resultado.mensajeCodificado;
    manejarEventos();
    
}
function desencriptar() {
    var textoInput = document.getElementById('texto').value;
    var resultado = desencriptarMensaje(textoInput);
    document.getElementById('mensajeOutput').innerText = resultado.mensajeDescodificado;
    manejarEventos();
}



function encriptarMensaje(parrafo) {
    let modificado = parrafo.toLowerCase().replace(/[^a-z\s]+/g, ' ');

    const reglasPersonalizadas = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    modificado = modificado.replace(/[aeiou]/g, caracter => reglasPersonalizadas[caracter] || caracter);

    return { mensajeOriginal: parrafo, mensajeCodificado: modificado };
}


function desencriptarMensaje(parrafoCodificado) {
    let modificado = parrafoCodificado.toLowerCase().replace(/[^a-z\s]+/g, ' ');

    const reglasPersonalizadas = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    for (const secuencia in reglasPersonalizadas) {
        if (modificado.includes(secuencia)) {
            modificado = modificado.replace(new RegExp(secuencia, 'g'), reglasPersonalizadas[secuencia]);
        }
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





