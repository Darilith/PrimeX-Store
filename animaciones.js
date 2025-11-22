// Datos de productos para cada categoría
const productos = {
    monitores: [
        { nombre: 'Monitor 27"', subtitulo: 'PrimeX Gaming', imagen: './assets/logo/m1.png' },
        { nombre: 'Monitor Curvo 49"', subtitulo: 'PrimeX G9 Gaming', imagen: './assets/logo/m2.png' },
        { nombre: 'Monitor Curvo 49"', subtitulo: 'PrimeX Oled G9 Gaming', imagen: './assets/logo/m3.png' },
        { nombre: 'Monitor 34"', subtitulo: 'PrimeX G8 Gaming', imagen: './assets/logo/m4.png' }

    ],
    mouse: [
        { nombre: '', subtitulo: 'PrimeX G Pro Gaming', imagen: './assets/logo/m5-removebg-preview.png' },
        { nombre: '', subtitulo: 'PrimeX G600 Gaming', imagen: './assets/logo/m3-really.png' },
        { nombre: '', subtitulo: 'PrimeX X Gaming', imagen: './assets/logo/m4-removebg-preview.png' },
        { nombre: '', subtitulo: 'PrimeX X9 Gaming', imagen: './assets/logo/m2-removebg-preview.png' }
    ],
    audifonos: [
        { nombre: '', subtitulo: 'PrimeX A20 X', imagen: './assets/logo/A1.png' },
        { nombre: '', subtitulo: 'PrimeX A50', imagen: './assets/logo/A2.png' },
        { nombre: '', subtitulo: 'PrimeX Pro X', imagen: './assets/logo/A3.png' },
        { nombre: '', subtitulo: 'PrimeX A10', imagen: './assets/logo/A4.png' }
    ],
    teclados: [
        { nombre: '', subtitulo: 'PrimeX Strike', imagen: './assets/logo/T1.png' },
        { nombre: '', subtitulo: 'PrimeX Strike Pro', imagen: './assets/logo/T2.png' },
        { nombre: '', subtitulo: 'PrimeX Strike G6', imagen: './assets/logo/T3.png' },
        { nombre: '', subtitulo: 'PrimeX Strike G8', imagen: './assets/logo/T4.png' }
    ],
    sillas: [
        { nombre: '', subtitulo: 'PrimeX Strike', imagen: './assets/logo/S1.png' },
        { nombre: '', subtitulo: 'PrimeX Vortex', imagen: './assets/logo/S2.png' },
        { nombre: '', subtitulo: 'PrimeX Phantom', imagen: './assets/logo/S3.png' },
        { nombre: '', subtitulo: 'PrimeX Blaze', imagen: './assets/logo/S4.png' }
    ]
};

// Función para crear las tarjetas de productos
function crearTarjetasProducto(contenedorId, listaProductos) {
    const contenedor = document.getElementById(contenedorId);
    
    listaProductos.forEach(producto => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'product-card';
        
        tarjeta.innerHTML = `
            <div class="product-image">
                ${producto.imagen ? `<img src="${producto.imagen}" alt="${producto.nombre}">` : '[Imagen]'}
            </div>
            <div class="product-name">${producto.nombre}</div>
            ${producto.subtitulo ? `<div class="product-subtitle">${producto.subtitulo}</div>` : ''}
        `;
        
        contenedor.appendChild(tarjeta);
    });
}

// Inicializar productos para cada categoría cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    crearTarjetasProducto('monitores-products', productos.monitores);
    crearTarjetasProducto('mouse-products', productos.mouse);
    crearTarjetasProducto('audifonos-products', productos.audifonos);
    crearTarjetasProducto('teclados-products', productos.teclados);
    crearTarjetasProducto('sillas-products', productos.sillas);
});