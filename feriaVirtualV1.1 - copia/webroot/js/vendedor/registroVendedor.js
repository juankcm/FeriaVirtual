window.onload = function () {
    inicializarPagina()
}

function inicializarPagina() {
    try {
        var btnRegistrarVendedor = document.querySelector(".botonRegistrarVendedor")

        btnRegistrarVendedor.addEventListener("click", function () {
            var resultadoValidacionFormularioVendedor = validarFormularioVendedor()

            

            if (resultadoValidacionFormularioVendedor == true) {
                enviarFormularioVendedor();
            }
        });
    } catch (error) { }

    try {
        cargarTablaProductos();
    } catch (error) { }

}

function validarFormularioVendedor() {

    //Variable para jalar el formulario del HTML
    var formulario = document.querySelector(".contenedorformularioVendedor form")

    //Variables que representen los datos de entrada:
    var inputIdVendedor = formulario.querySelector("input[name='_idVend']")
    var inputNombreVendedor = formulario.querySelector("input[name='nombreVend']")
    var inputPrimApellidoVendedor = formulario.querySelector("input[name='primerApellidoVend']")
    var inputSegApellidoVendedor = formulario.querySelector("input[name='seguApellidoVend']")
    var inputCorreoVendedor = formulario.querySelector("input[name='correoVend']")
    var inputContraseVendedor = formulario.querySelector("input[name='contraseVend']")
    var inputsubirArchivo = formulario.querySelector("input[id='subirArchivo']")
    

    //Variables que representen los spans de validación de cada entrda:
    var spanIdVendedor = formulario.querySelector("span[id='validarIDvend']")
    var spanNombreVendedor = formulario.querySelector("span[id='validarNombreVend']")
    var spanPrimeApellidoVendedor = formulario.querySelector("span[id='validarPrimeApellidoVend']")
    var spanSeguApellidoVendedor = formulario.querySelector("span[id='validarSeguApellidoVend']")
    var spanCorreoVendedor = formulario.querySelector("span[id='validarCorreoVend']")
    var spanContrVendedor = formulario.querySelector("span[id='validarContrVend']")
    var spanPermiso = formulario.querySelector("span[id='validarPermiso']")
    
    
    spanIdVendedor.computedStyleMap.display = 'none'
    spanNombreVendedor.computedStyleMap.display = 'none'
    spanPrimeApellidoVendedor.computedStyleMap.display = 'none'
    spanSeguApellidoVendedor.computedStyleMap.display = 'none'
    spanCorreoVendedor.computedStyleMap.display = 'none'
    spanContrVendedor.computedStyleMap.display = 'none'
    spanPermiso.computedStyleMap.display = 'none'

    var bordeNormal = "1px solid var(--primary-text)"
    inputIdVendedor.style.borderBottom = bordeNormal
    inputNombreVendedor.style.borderBottom = bordeNormal
    inputPrimApellidoVendedor.style.borderBottom = bordeNormal
    inputSegApellidoVendedor.style.borderBottom = bordeNormal
    inputCorreoVendedor.style.borderBottom = bordeNormal
    inputContraseVendedor.style.borderBottom = bordeNormal
    inputsubirArchivo.style.borderBottom = bordeNormal

    var resultadoValidacion = true

    var campoIdVendedor = inputIdVendedor.value
    if (campoIdVendedor.trim() === "") {
        spanIdVendedor.style.display = "block"
        spanIdVendedor.style.border = '2px solid red'
        resultadoValidacion = false
    }

    var campoNombreVendedor = inputNombreVendedor.value;
    if (campoNombreVendedor.trim() === "") {
        spanNombreVendedor.style.display = "block"
        spanNombreVendedor.style.border = '2px solid red'
        resultadoValidacion = false
    }
    var campoPrimApellidoVendedor = inputPrimApellidoVendedor.value;
    if (campoPrimApellidoVendedor.trim() === "") {
        spanPrimeApellidoVendedor.style.display = "block"
        spanPrimeApellidoVendedor.style.border = '2px solid red'
        resultadoValidacion = false
    }
    var campoSeguApellidoVendedor = inputSegApellidoVendedor.value;
    if (campoSeguApellidoVendedor.trim() === "") {
        spanSeguApellidoVendedor.style.display = "block"
        spanSeguApellidoVendedor.style.border = '2px solid red'
        resultadoValidacion = false
    }
    var campoCorreoVendedor = inputCorreoVendedor.value;
    if (campoCorreoVendedor.trim() === "") {
        spanCorreoVendedor.style.display = "block"
        spanCorreoVendedor.style.border = '2px solid red'
        resultadoValidacion = false
    }

    var campoContrVendedor = inputContraseVendedor.value;
    if (campoContrVendedor.trim() === "") {
        spanContrVendedor.style.display = "block"
        spanContrVendedor.style.border = '2px solid red'
        resultadoValidacion = false
    }

    var campoPermiso = inputsubirArchivo.value;
    if (campoPermiso.trim() === "") {
        spanPermiso.style.display = "block"
        spanPermiso.style.border = '2px solid red'
        resultadoValidacion = false
    }

    return resultadoValidacion
}

function limiteDigitos(input) {
    if (input.value.length > input.maxLength) {
      input.value = input.value.slice(0, input.maxLength);
    }
}

function soloLetras(event) {
    const pattern = /[a-zA-Z]/;
    const inputChar = String.fromCharCode(event.keyCode);
    if (!pattern.test(inputChar)) {
        event.preventDefault();
    }
}

function enviarFormularioVendedor() {
    Swal.fire({
        title: "¡Bienvenido, vendedor!",
        text: "¡Registro realizado con éxito!",
        icon: "success"
    });
}