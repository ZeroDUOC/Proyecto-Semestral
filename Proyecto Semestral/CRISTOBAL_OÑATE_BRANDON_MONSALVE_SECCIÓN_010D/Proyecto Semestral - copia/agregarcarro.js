$('.agregar-carrito').click(function() {
    var nombreProducto = $(this).data('nombre');
    var cantidadProducto = $(this).data('cantidad');
    var precioProducto = $(this).data('precio');
    var producto = { nombre: nombreProducto, cantidad: cantidadProducto, precio: precioProducto };
    
    // Guardar el producto en el localStorage para simular un carrito
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));

    alert(nombreProducto + " agregado al carrito");
  });