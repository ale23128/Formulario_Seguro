let mensaje = document.getElementById("precioSeguro");

document.getElementById("basico").onclick = function(){
    mensaje.innerHTML = "¡El valor del seguro básico es de $ 500!";
}

document.getElementById("intermedio").onclick = function(){
    mensaje.innerHTML = "¡El valor del seguro intermedio es de $ 1000!";
}

document.getElementById("premium").onclick = function(){
    mensaje.innerHTML = "¡El valor del seguro premium es de $ 1500!";
}

