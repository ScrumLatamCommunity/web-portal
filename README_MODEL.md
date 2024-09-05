# My React App

Este proyecto es una aplicación web construida con React siguiendo el patrón de diseño MVC (Modelo-Vista-Controlador). A continuación, se detalla la estructura de carpetas y la funcionalidad de cada una.

## Estructura de Carpetas

### Descripción de Carpetas

#### `src/`

Directorio principal para todo el código fuente de React.

##### `assets/`

Contiene archivos estáticos como imágenes y estilos globales.

- **`images/`**: Carpeta para imágenes.
- **`styles/`**: Carpeta para estilos globales y variables CSS.

##### `models/`

Contiene la lógica de datos y estructuras de la aplicación.

##### `views/`

Contiene todos los componentes y páginas de la vista.

- **`components/`**: Componentes reutilizables en la aplicación.

  - **`common/`**: Componentes comunes y reutilizables como botones e inputs.
  - **`layout/`**: Componentes de layout como `Header` y `Footer`.

- **`pages/`**: Componentes que representan páginas completas.
  - **`Home/`**: Carpeta para la página `Home` con su archivo de estilo CSS Module.
  - **`About/`**: Carpeta para la página `About` con su archivo de estilo CSS Module.
  - **`Product/`**: Carpeta para las páginas de productos, incluyendo lista de productos y detalles de productos.

##### `controllers/`

Contiene la lógica que conecta los modelos y las vistas, separada por entidad.

##### `hooks/`

Contiene custom hooks reutilizables.

##### `utils/`

Contiene utilidades y funciones de ayuda.

##### `services/`

Contiene servicios para manejar la lógica de negocio y API calls.

##### `context/`

Contiene contextos de React para manejar el estado global.

---
