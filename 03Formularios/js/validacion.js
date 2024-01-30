/**
 * JS es un lenguaje interpretado, por lo cual debemos entender que el manejo de variables es no tipado
 * 
 * JS maneja var para cadenas, enteros, dobles, flotante, etc
 * 
 * JS es un lenguaje bajo multiparadigma 
 */



function validar(formulario){
    if(formulario.nombre.value.length < 3){
        alert("Escriba por lo menos mas de 3 caracteres en el campo nombre");
        formulario.nombre.focus();
    }
}