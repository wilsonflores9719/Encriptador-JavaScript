
function Encriptar(){
    var texto = document.getElementById("TxtEncriptado").value.toLowerCase();

    var textoEncriptado = texto.replace(/e/img,"enter");
    textoEncriptado = textoEncriptado.replace(/o/img,"ober");
    textoEncriptado = textoEncriptado.replace(/i/img,"imes");
    textoEncriptado = textoEncriptado.replace(/a/img,"ai");
    textoEncriptado = textoEncriptado.replace(/u/img,"ufat");

    document.getElementById("resultadoEncriptado").innerHTML=textoEncriptado;
    document.getElementById("imgFondo").style.display="none";
    document.getElementById("btnCopiar").style.display="block";
    document.getElementById("h4").innerHTML="Su mensaje encriptado es:";
}

function Desencriptar(){
    var texto = document.getElementById("TxtEncriptado").value.toLowerCase();

    var textoEncriptado = texto.replace(/enter/img,"e");
    textoEncriptado = textoEncriptado.replace(/ober/img,"o");
    textoEncriptado = textoEncriptado.replace(/imes/img,"i");
    textoEncriptado = textoEncriptado.replace(/ai/img,"a");
    textoEncriptado = textoEncriptado.replace(/ufat/img,"u");

    document.getElementById("resultadoEncriptado").innerHTML=textoEncriptado;
    document.getElementById("imgFondo").style.display="none";
    document.getElementById("btnCopiar").style.display="block";
    document.getElementById("h4").innerHTML="Su mensaje desencriptado es:";
}

function copiar(){
    var ContenidoCopiar = document.querySelector('#resultadoEncriptado');
    ContenidoCopiar.select();
    document.execCommand("copy");
}