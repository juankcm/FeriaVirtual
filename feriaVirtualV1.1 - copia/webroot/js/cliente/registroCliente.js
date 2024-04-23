window.onload = function () {
    inicializarPagina();
}

function inicializarPagina() {
    try {
        var btnRegistrarCliente = document.querySelector(".botonRegistrarCliente");

        btnRegistrarCliente.addEventListener("click", function () {
            var resultadoValidacionFormularioCliente = validarFormularioCliente();

            

            if (resultadoValidacionFormularioCliente == true) {
                enviarFormularioCliente();
            }
        });
    } catch (error) { }

    try {
        cargarTablaProductos();
    } catch (error) { }

}

function validarFormularioCliente () {

    var formulario = document.querySelector('.contenedorFormularioCliente form')

    var inputIdCliente = formulario.querySelector("input[name='_idCliente']")
    var inputNombreCliente = formulario.querySelector("input[name='nombreCliente']")
    var inputPrimApellidoCliente = formulario.querySelector("input[name='primerApellidoCliente']")
    var inputSegApellidoCliente = formulario.querySelector("input[name='seguApellidoCliente']")
    var inputCorreoCliente = formulario.querySelector("input[name='correoCliente']")
    var inputContraseCliente = formulario.querySelector("input[name='contraseCliente']")
    
    var spanIdCliente = formulario.querySelector("span[id='validarIDcliente']")
    var spanNombreCliente = formulario.querySelector("span[id='validarNombreCliente']")
    var spanPrimeApellidoCliente = formulario.querySelector("span[id='validarPrimeApellidoCliente']")
    var spanSeguApellidoCliente = formulario.querySelector("span[id='validarSeguApellidoCliente']")
    var spanCorreoCliente = formulario.querySelector("span[id='validarCorreoCliente']")
    var spanContrCliente = formulario.querySelector("span[id='validarContrCliente']")
    
    spanIdCliente.computedStyleMap.display = 'none'
    spanNombreCliente.computedStyleMap.display = 'none'
    spanPrimeApellidoCliente.computedStyleMap.display = 'none'
    spanSeguApellidoCliente.computedStyleMap.display = 'none'
    spanCorreoCliente.computedStyleMap.display = 'none'
    spanContrCliente.computedStyleMap.display = 'none'

    var bordeNormal = "1px solid var(--primary-text)"
    inputIdCliente.style.borderBottom = bordeNormal
    inputNombreCliente.style.borderBottom = bordeNormal
    inputPrimApellidoCliente.style.borderBottom = bordeNormal
    inputSegApellidoCliente.style.borderBottom = bordeNormal
    inputCorreoCliente.style.borderBottom = bordeNormal
    inputContraseCliente.style.borderBottom = bordeNormal

    var resultadoValidacion = true

    var campoIdCliente = inputIdCliente.value;
    if (campoIdCliente.trim() === "") {
        spanIdCliente.style.display = "block";
        spanIdCliente.style.border = '2px solid red'
        resultadoValidacion = false
    }

    var campoNombreCliente = inputNombreCliente.value;
    if (campoNombreCliente.trim() === "") {
        spanNombreCliente.style.display = "block"
        spanNombreCliente.style.border = '2px solid red'
        resultadoValidacion = false
    }

    var campoPrimApellidoCliente = inputPrimApellidoCliente.value;
    if (campoPrimApellidoCliente.trim() === "") {
        spanPrimeApellidoCliente.style.display = "block";
        spanPrimeApellidoCliente.style.border = '2px solid red'
        resultadoValidacion = false
    }

    var campoSeguApellidoCliente = inputSegApellidoCliente.value;
    if (campoSeguApellidoCliente.trim() === "") {
        spanSeguApellidoCliente.style.display = "block";
        spanSeguApellidoCliente.style.border = '2px solid red'
        resultadoValidacion = false
    }

    var campoCorreoCliente = inputCorreoCliente.value;
    if (campoCorreoCliente.trim() === "") {
        spanCorreoCliente.style.display = "block";
        spanCorreoCliente.style.border = '2px solid red'
        resultadoValidacion = false
    }

    var campoContrCliente = inputContraseCliente.value;
    if (campoContrCliente.trim() === "") {
        spanContrCliente.style.display = "block";
        spanContrCliente.style.border = '2px solid red'
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

function enviarFormularioCliente() {
    Swal.fire({
        title: "¡Bienvenido!",
        text: "¡Registro realizado con éxito!",
        icon: "success"
    });
}