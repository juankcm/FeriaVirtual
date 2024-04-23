
function rangoFechas() {
    var fechaInicial = document.getElementById("fechaInicial").value;
    var fechaFinal = document.getElementById("fechaFinal").value;
    
    if (fechaInicial && fechaFinal && fechaInicial > fechaFinal) {
        alert("La fecha inicial no puede ser mayor que la fecha final.");
        document.getElementById("fechaInicial").value = "";
    }
}