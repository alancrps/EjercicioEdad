function esMayorDeEdad(){
    var edad = Number(document.getElementById("edad").value);
    var edadInput = document.getElementById("edad");

    var nombre = document.getElementById("nombre").value;
    var nombreInput = document.getElementById("nombre");

    if (edad <= 0){
        alert("La edad debe ser mayor a 0")
    }
    else if (edad >= 18){
        alert(`Hola, ${nombre} sos mayor de edad (${edad})`);
    }
    else{
        alert(`Hola, ${nombre} sos menor de edad (${edad})`)
    }
    edadInput.value="";
    nombreInput.value = "";
}