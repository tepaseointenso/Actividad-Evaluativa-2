let formulario:any=document.getElementById("formulario");
let rut:any=document.getElementById("rut");
let cel:any=document.getElementById("cel");
let descripcion:any=document.getElementById("descripcion");
let limpiar:any=document.getElementById("limpair");

formulario.addEventListener("submit",function(event:any){
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');

    if(checkboxes.length == 0) {
    alerta.innerHTML ="Por favor seleccione al menos una opción"
    }
    else{
        formulario.style.display="none";
        mensaje.innerHTML ="Hemos recibido sus datos, pronto nos estaremos comunicando con usted";
        alert("Su formulario se ha enviado correctamente")
    }


    event.preventDefault();
});

cel.addEventListener("change", function () {
    var celStr = cel.value.toString();
    var numero = /^\(?([0-9]{9})$/;
    if (celStr.match(numero)) {
        verifFono.style.display="none";
    }
    else{
        verifFono.style.display="initial";
        verifFono.innerHTML ="Por favor ingrese un numero válido"
        cel.value="null";
            }
});

rut.addEventListener("change", function () {
    var comparar = /^(\d{7,9}-[\dkK])$/;
    if (rut.value.match(comparar)) {
        verifRUT.style.display="none";
    }
    else{
        verifRUT.style.display="initial";
        verifRUT.innerHTML ="Por favor ingrese un rut válido"
        rut.value="";
        }
});


descripcion.addEventListener("keyup", function () {
    
    var lengthTexto = descripcion.value.length;
    verifDESC.innerHTML = 300-lengthTexto + " caracteres restantes.";

});

limpiarDatos(){
    
}

// limpiar.addEventListener("onclick", function () {
//     verifDESC.innerHTML = 300 + " caracteres restantes.";
// })

