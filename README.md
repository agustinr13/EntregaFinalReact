# PROYECTO FINAL - REACT JS - CODERHOUSE

¡Bienvenido! Este proyecto simula una tienda virtual creada con React Js. Fue realizado para la entrega final del curso de React Js de CODERHOUSE.

![gif final](https://user-images.githubusercontent.com/113479367/228060240-1678c1e1-4ec6-4f19-8092-c6f1b317fbef.gif)

En el enlace se puede ver un gif en el que se observa la funcionalidad de la aplicación.

# Características

-Catálogo de productos generado a partir de una base de datos generada en Firestore
-Filtrado por categoría
-Acceso a sección de detalles por ID
-Carrito de compras
-Formulario de pago y subida de orden a Firestore

# Instalación

-Clonar el repositorio
-Instalar las dependencias mediante el comando "npm install"
-Configutar
-Inicializar con el comando "npm start"

# Uso de la app

-En la Landing Page encontrará un botón para acceder al catálogo de productos.
-En la barra de navegación se puede acceder tanto al catálogo completo, asi como a el filtrado por categorías.
-En el poducto deseado al presionar el botón de Detalles accederá a una tarjeta del producto.
-Presionar "Agregar al carrito" en el producto deseado.
-En la barra de navegación encontrará el ícono perteneciente al carrito. Para acceder, clickear en él.
-En el carrito se desplegarán las tarjetas con los items agregados. Cada uno tiene un botón de eliminar.
-Una vez elegidos los productos, verá en la parte inferior un formulario en el que deberá ingresar Nombre y Correo.
-Al darle a comprar, saldrá una alerta de compra exitosa y se enviará la orden a Firestore.