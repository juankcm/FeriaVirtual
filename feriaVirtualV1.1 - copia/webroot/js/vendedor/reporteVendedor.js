
function rangoFechas() {
    var fechaInicial = document.querySelector(".drop-fechainicial1 #fechaInicial").value;
    var fechaFinal = document.querySelector(".drop-fechafinal1 #fechaFinal").value;
    
    if (fechaInicial && fechaFinal && fechaInicial > fechaFinal) {
        alert("La fecha inicial no puede ser mayor que la fecha final.");
        document.querySelector(".drop-fechainicial1 #fechaInicial").value = "";
    }
}