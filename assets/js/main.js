function esMayorDeEdad(){
    var edad = Number(document.getElementById("edad").value);
    var edadInput = document.getElementById("edad");
    if (edad <= 0){
        alert("La edad debe ser mayor a 0")
    }
    else if (edad >= 18){
        alert(`Usted es mayor de edad (${edad})`);
    }
    else{
        alert(`usted es menor de edad (${edad})`)
    }
    edadInput.value="";
}