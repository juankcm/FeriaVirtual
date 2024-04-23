function rangoFechas() {
    var fechaInicial = document.querySelector(".filtrosReporteComprador .FechaInicialC").value;
    var fechaFinal = document.querySelector(".filtrosReporteComprador .FechaFinalC").value;
    
    if (fechaInicial && fechaFinal && fechaInicial > fechaFinal) {
        alert("La fecha inicial no puede ser mayor que la fecha final.");
        document.querySelector(".filtrosReporteComprador .FechaInicialC").value = "";
    }
}