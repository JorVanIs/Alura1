
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
var encriptaMensaje = document.querySelector("#input-texto");
var btnEncripta = document.querySelector("#btn-encriptar");
var btnDesencripta = document.querySelector("#btn-desencriptar");
var btnCopia = document.querySelector("#btn-copy");
var respuesta = document.querySelector("#msg");
encriptaMensaje.focus();

function encriptar () {
    var eMensaje = encriptaMensaje.value;
    var reemplazar1 = eMensaje.replace(/["e"]/g, "enter");
    var reemplazar2 = reemplazar1.replace(/["i"]/g, "imes");
    var reemplazar3 = reemplazar2.replace(/["a"]/g, "ai");
    var reemplazar4 = reemplazar3.replace(/["u"]/g, "ufat");
    var reemplazar5 = reemplazar4.replace(/["o"]/g, "ober");
    respuesta.value = reemplazar5;
}

function desencriptar () {
    var dMensaje = encriptaMensaje.value;
    const enter = /enter/g;
    const imes = /imes/g;
    const ai = /ai/g;
    const ufat = /ufat/g;
    const ober = /ober/g;
    var reemplazar1 = dMensaje.replace(enter, "e");
    var reemplazar2 = reemplazar1.replace(imes, "i");
    var reemplazar3 = reemplazar2.replace(ai, "a");
    var reemplazar4 = reemplazar3.replace(ufat, "u");
    var reemplazar5 = reemplazar4.replace(ober, "o");
    respuesta.value = reemplazar5;
    
    //lo hago con constantes ya que estaba tomando cada letra de la palabra y la cambiaba por vocal
    //por ej.  enter lo cambiaba por eeeee (5 veces la letra "e").  Validar con:  console.log(reemplazar5);
}

function copiarTexto(){
    var resultado = respuesta.value;
    navigator.clipboard.writeText(resultado);
    respuesta.select();
}

btnEncripta.onclick = encriptar;
btnDesencripta.onclick = desencriptar;
btnCopia.onclick = copiarTexto;

