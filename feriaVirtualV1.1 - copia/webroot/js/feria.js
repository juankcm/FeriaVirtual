var listaProductos = [
    { nombre: 'Atún', _id: 'ID00', precio: 1800, imagen: '/imgProductos/atun.png', cantidad: 10, },
    { nombre: 'Carne de res', _id: 'ID01', precio: 4300, imagen: '/imgProductos/carne.png', cantidad: 15 },
    { nombre: 'Aguacate', _id: 'ID02', precio: 200, imagen: '/imgProductos/aguacate.png', cantidad: 5 },
    { nombre: 'Aceite de oliva', _id: 'ID03', precio: 3000, imagen: '/imgProductos/aceiteOliva.png', cantidad: 4 },
    { nombre: 'prueba1', _id: 'ID02', precio: 200, imagen: '/imgProductos/aguacate.png', cantidad: 5 },
    { nombre: 'prueba2', _id: 'ID03', precio: 3000, imagen: '/imgProductos/aceiteOliva.png', cantidad: 4 },
    { nombre: 'prueba2', _id: 'ID03', precio: 3000, imagen: '/imgProductos/aceiteOliva.png', cantidad: 4 },
    { nombre: 'Aguacate', _id: 'ID02', precio: 200, imagen: '/imgProductos/aguacate.png', cantidad: 5 },
    { nombre: 'prueba2', _id: 'ID03', precio: 3000, imagen: '/imgProductos/aceiteOliva.png', cantidad: 4 },
    { nombre: 'prueba2', _id: 'ID03', precio: 3000, imagen: '/imgProductos/aceiteOliva.png', cantidad: 4 },
    { nombre: 'Aguacate', _id: 'ID02', precio: 200, imagen: '/imgProductos/aguacate.png', cantidad: 5 },
    { nombre: 'prueba2', _id: 'ID03', precio: 3000, imagen: '/imgProductos/aceiteOliva.png', cantidad: 4 },
    { nombre: 'prueba2', _id: 'ID03', precio: 3000, imagen: '/imgProductos/aceiteOliva.png', cantidad: 4 },
    { nombre: 'Aguacate', _id: 'ID02', precio: 200, imagen: '/imgProductos/aguacate.png', cantidad: 5 },
    { nombre: 'prueba2', _id: 'ID03', precio: 3000, imagen: '/imgProductos/aceiteOliva.png', cantidad: 4 },
    { nombre: 'prueba2', _id: 'ID03', precio: 3000, imagen: '/imgProductos/aceiteOliva.png', cantidad: 4 },
    { nombre: 'Aguacate', _id: 'ID02', precio: 200, imagen: '/imgProductos/aguacate.png', cantidad: 5 },
    { nombre: 'prueba2', _id: 'ID03', precio: 3000, imagen: '/imgProductos/aceiteOliva.png', cantidad: 4 },
    { nombre: 'prueba2', _id: 'ID03', precio: 3000, imagen: '/imgProductos/aceiteOliva.png', cantidad: 4 },
    { nombre: 'prueba4', _id: 'ID03', precio: 3000, imagen: '/imgProductos/aceiteOliva.png', cantidad: 4 }
  ]
  
  var carritoCompras = []
  /* cada objeto del carrito de compras es:
      {
      idProducto: "@referencia a Productos._id",
      cantidadComprada: 0
      }
  */
  
  function cargarMosaicoProductos () {
    var contenedorProductos = document.querySelector('section.mosaicoProductos')
  
    contenedorProductos.innerHTML = ''
  
    for (var producto of listaProductos) {
      var productoArticulo = `
      <article class="articulo">
              <h1> ${producto.nombre} </h1>
  
              <input  type=hidden value=${producto._id}>
  
              <label>Cantidad</label> 
  
              <input id="inpProducto" name="${producto._id}" type="number"
                  value="0"
                  min="1"
                  max="${producto.cantidad}"><br>
  
              <label>Disponibles:  </label>${producto.cantidad}<br>
              <label>Precio  </label>${producto.precio} CRC<br>
              <a href="/html/cliente/tiendaCliente.html"> Tienda </a><br>
              <img class="imgProducto" src="${producto.imagen}">
              
              <button id="btnAgregar" onclick="agregarProducto('${producto._id}')"
              >Agregar al carrito</button>
  
          </article>`
  
      // Esto es para no caerle encima a mis artículos anteriores
      contenedorProductos.innerHTML += productoArticulo
    }
  }
  
  function vaciarCarrito () {
    carritoCompras = []
    sessionStorage.setItem('carrito', null)
    location.reload()
  }
  
  function agregarProducto (idProducto) {
    var casillaComprar =
      document.querySelector(`"input[name='${idProducto}']"`)
    var cantidad = parseInt(casillaComprar.value)
    var producto = {
      // eslint-disable-next-line object-shorthand
      idProducto: idProducto,
      cantidadComprada: cantidad
    }
    carritoCompras.push(idProducto)
  }
  
  function verCarrito () {
    var carritoComprasString = JSON.stringify(carritoCompras)
    sessionStorage.setItem('carrito', carritoComprasString)
    location.href = '/ventas/registrar/carrito.html'
  }
  
  function mostrarCarrito () {
    var contenedorCarrito = document.querySelector('.contenedorCarrito')
  
    var elCarritoGuardado = sessionStorage.getItem('carrito')
    if (elCarritoGuardado != null) {
      carritoCompras = JSON.parse(elCarritoGuardado)
    }
  
    var encabezadoFactura = '<h2>Factura </h2><hr>'
    contenedorCarrito.innerHTML = encabezadoFactura
  
    var total = 0
    for (var linea of carritoCompras) {
      var textoLinea = `<label>${linea.idProducto} x ${linea.cantidadComprada}</label>
      <hr><input type='button' value='Eliminar del carrito'>`
      total = +1
  
      contenedorCarrito.innerHTML += textoLinea
    }
  
    var lineaTotales = 'Total de la compra: &#8353;.' + total
    contenedorCarrito.innerHTML += lineaTotales
  
    contenedorCarrito.innerHTML += lineaTotales
  }
  
  window.onload = function () {
    /* codigo para indexVentas */
    try {
      cargarMosaicoProductos()
    } catch (error) { }
  
    /* codigo para carrito */
    try {
      mostrarCarrito()
    } catch (error) { }
  }